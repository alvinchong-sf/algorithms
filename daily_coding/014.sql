/* Daily SQL coding from chatgpt 4/13/2025 */
/*
Prompt 4: Active Customer Tiers

Table: transactions
transaction_id	customer_id	transaction_type	amount	transaction_date
1	                101	        purchase	      100	   2024-12-01
2	                102	        refund	          50	   2024-12-02
3	                101	        purchase	      250	   2024-12-03
4	                103	        purchase	      400	   2024-12-04
5	                102	        purchase	      200	   2024-12-05

Problem: For each customer, calculate:
    total_purchases (sum of 'purchase' amounts)
    total_refunds (sum of 'refund' amounts)
    last_transaction_date
    customer_tier:
        "Platinum" if total_purchases ≥ 500
        "Gold" if total_purchases ≥ 300 and < 500
        "Silver" if total_purchases ≥ 100 and < 300
        "Bronze" if total_purchases < 100

Constraints:
    Use CASE statements
    Use GROUP BY
    Avoid window functions (for now)
*/

with cte as (
    select customer_id,
    SUM(case when transaction_type = 'purchase' then amount else 0 end) as total_purchases,
    SUM(case when transaction_type = 'refund' then amount else 0 end) as total_refunds
    from transactions
    group by customer_id
), cte2 as (
    select customer_id,
    max(transaction_date) as last_transaction_date
    from transactions
    group by customer_id
)

select cte.customer_id, cte.total_purchases, 
cte.total_refunds, cte2.last_transaction_date, 
case
    when cte.total_purchases >= 500 then 'Platinum'
    when cte.total_purchases >= 300 then 'Gold'
    when cte.total_purchases >= 100 then 'Silver'
    else 'Bronze'
end as customer_tier
from cte
left join cte2 
on cte.customer_id = cte2.customer_id
