-- 1164. Product Price at a Given Date

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | product_id    | int     |
-- | new_price     | int     |
-- | change_date   | date    |
-- +---------------+---------+
-- (product_id, change_date) is the primary key (combination of columns with unique values) of this table.
-- Each row of this table indicates that the price of some product was changed to a new price at some date.
 

-- Write a solution to find the prices of all products on 2019-08-16. Assume the price of all products 
-- before any change is 10.

-- Return the result table in any order.

-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Products table:
-- +------------+-----------+-------------+
-- | product_id | new_price | change_date |
-- +------------+-----------+-------------+
-- | 1          | 20        | 2019-08-14  |
-- | 2          | 50        | 2019-08-14  |
-- | 1          | 30        | 2019-08-15  |
-- | 1          | 35        | 2019-08-16  |
-- | 2          | 65        | 2019-08-17  |
-- | 3          | 20        | 2019-08-18  |
-- +------------+-----------+-------------+
-- Output: 
-- +------------+-------+
-- | product_id | price |
-- +------------+-------+
-- | 2          | 50    |
-- | 1          | 35    |
-- | 3          | 10    |
-- +------------+-------+

(
    select P1.product_id as product_id, P1.new_price as price
    from Products as P1
    where P1.change_date <= '2019-08-16' 
    and change_date = (
        select max(change_date) 
        from Products as P2 
        where P2.product_id = P1.product_id 
        and P2.change_date <= '2019-08-16' 
    )
)
union all
(
    select distinct product_id, 10 as new_price
    from Products as P3
    where product_id not in (
        select P4.product_id as product_id
        from Products as P4
        where P3.product_id = P4.product_id
        and change_date <= '2019-08-16'
    )
)