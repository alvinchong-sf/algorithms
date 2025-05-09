/*
3521. Find Product Recommendation Pairs

Table: ProductPurchases
+-------------+------+
| Column Name | Type | 
+-------------+------+
| user_id     | int  |
| product_id  | int  |
| quantity    | int  |
+-------------+------+
(user_id, product_id) is the unique key for this table.
Each row represents a purchase of a product by a user in a specific quantity.

Table: ProductInfo
+-------------+---------+
| Column Name | Type    | 
+-------------+---------+
| product_id  | int     |
| category    | varchar |
| price       | decimal |
+-------------+---------+
product_id is the primary key for this table.
Each row assigns a category and price to a product.

Amazon wants to implement the Customers who bought this also bought... feature based on 
co-purchase patterns. Write a solution to :
    - Identify distinct product pairs frequently purchased together by the same customers (where 
    product1_id < product2_id)
    - For each product pair, determine how many customers purchased both products

A product pair is considered for recommendation if at least 3 different customers have purchased 
both products. Return the result table ordered by customer_count in descending order, and in 
case of a tie, by product1_id in ascending order, and then by product2_id in ascending order.
The result format is in the following example.

Example:
Input:
ProductPurchases table:
+---------+------------+----------+
| user_id | product_id | quantity |
+---------+------------+----------+
| 1       | 101        | 2        |
| 1       | 102        | 1        |
| 1       | 103        | 3        |
| 2       | 101        | 1        |
| 2       | 102        | 5        |
| 2       | 104        | 1        |
| 3       | 101        | 2        |
| 3       | 103        | 1        |
| 3       | 105        | 4        |
| 4       | 101        | 1        |
| 4       | 102        | 1        |
| 4       | 103        | 2        |
| 4       | 104        | 3        |
| 5       | 102        | 2        |
| 5       | 104        | 1        |
+---------+------------+----------+

ProductInfo table:
+------------+-------------+-------+
| product_id | category    | price |
+------------+-------------+-------+
| 101        | Electronics | 100   |
| 102        | Books       | 20    |
| 103        | Clothing    | 35    |
| 104        | Kitchen     | 50    |
| 105        | Sports      | 75    |
+------------+-------------+-------+

Output:
+-------------+-------------+-------------------+-------------------+----------------+
| product1_id | product2_id | product1_category | product2_category | customer_count |
+-------------+-------------+-------------------+-------------------+----------------+
| 101         | 102         | Electronics       | Books             | 3              |
| 101         | 103         | Electronics       | Clothing          | 3              |
| 102         | 104         | Books             | Kitchen           | 3              |
+-------------+-------------+-------------------+-------------------+----------------+

https://leetcode.com/problems/find-product-recommendation-pairs/description/
*/

with T1 as (
    select PI1.product_id as product1_id, PI2.product_id as product2_id
    from ProductInfo as PI1
    cross join ProductInfo as PI2
    where PI1.product_id < PI2.product_id
), T2 as (
    select PP1.product_id as product1_id, PP2.product_id as product2_id
    from ProductPurchases as PP1
    cross join ProductPurchases as PP2
    where PP1.user_id = PP2.user_id and PP1.product_id < PP2.product_id
), T3 as (
    select *,
    (
        select count(*) as customer_count
        from T2
        where T1.product1_id = T2.product1_id and T1.product2_id = T2.product2_id
    ) as customer_count
    from T1
)

select T3.product1_id, T3.product2_id, PI1.category as product1_category, PI2.category as product2_category, T3.customer_count
from T3
inner join ProductInfo as PI1
on T3.product1_id = PI1.product_id
inner join ProductInfo as PI2
on T3.product2_id = PI2.product_id
where T3.customer_count >= 3
order by T3.customer_count desc, T3.product1_id asc, T3.product2_id asc
