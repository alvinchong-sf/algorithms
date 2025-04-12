/* Daily SQL coding problems from chatGPT*/

/*
You have a table called orders:
order_id	customer_id	order_status	order_date
1	            101	    'Completed'	    '2024-01-01'
2	            102	    'Cancelled'	    '2024-01-02'
3	            103	    'Pending'	    '2024-01-02'
4	            101	    'Completed'	    '2024-01-03'
Task:
Write a query to count how many orders fall into each status category 
(Completed, Cancelled, Pending) per customer.
*/

select
    sum(case when order_status = 'Completed' then 1 end) as 'completed_count',
    sum(case when order_status = 'Cancelled' then 1 end) as 'cancelled_count',
    sum(case when order_status = 'Pending' then 1 end) as 'pending_count'
from orders
group by customer_id

/*
Prompt 2: Category Revenue Split
You have a table called sales:
sale_id	category	revenue
1	      'A'	      100
2	      'B'	      150
3	      'A'	      200
4	      'C'	      50
5	      'B'	      300

Task:
Write a query to display the total revenue for each category, 
and an extra column called high_revenue_flag:
    'High' if total category revenue is greater than 300
    'Low' otherwise
Hint: Use CASE in the SELECT clause after aggregation.

Bonus: Percentage Split
If you’re still vibing —
Take Prompt 2 and add a column that shows the percentage of total revenue that each 
category contributes.
*/

with cte as (
    select category,
    sum(revenue) as total_revenue
    from sales
    group by category
), cte2 as (
    select sum(revenue) as grand_total from sales
)

select *,
case
    when total_revenue > 300 then 'High' else "Low"
end as high_revenue_flag,
(total_revenue / (select grand_total from cte2)) * 100 as percentage
from cte

/*
Prompt 3: Tricky Multi-Level CASE
You have a transactions table:
transaction_id	customer_id	amount	transaction_type
1	                101	     200        'purchase'
2	                101	     50	        'refund'
3	                102	     400       	'purchase'
4	                103	     300       	'purchase'
5	                103	     100       	'refund'
6	                103	     50	        'purchase'

Task:
Write a query to display:
    customer_id
    total_purchases (sum of amounts where type is 'purchase')
    total_refunds (sum of amounts where type is 'refund')
    net_amount (total_purchases - total_refunds)
    customer_status:
        'High Value' if net_amount >= 300
        'Low Value' otherwise

Hints
    Use conditional SUM with CASE
    Combine multiple CASE statements and calculations
    Watch for customers with multiple mixed transaction types
*/

with cte as (
    select customer_id,
    sum(case when transaction_type = "purchase" then amount else 0 end) as total_purchases,
    sum(case when transaction_type = "refund" then amount else 0 end) as total_refunds
    from transactions
    group by customer_id
)

select *,
(total_purchases - total_refunds) as net_amount,
case 
    when (total_purchases - total_refunds) >= 300 then "High Value" else "Low value"
end as customer_status
from cte