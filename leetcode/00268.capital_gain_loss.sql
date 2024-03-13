-- 1393. Capital Gain/Loss

-- Table: Stocks
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | stock_name    | varchar |
-- | operation     | enum    |
-- | operation_day | int     |
-- | price         | int     |
-- +---------------+---------+
-- (stock_name, operation_day) is the primary key (combination of columns with unique values) for 
-- this table. The operation column is an ENUM (category) of type ('Sell', 'Buy') .Each row of this 
-- table indicates that the stock which has stock_name had an operation on the day operation_day 
-- with the price. It is guaranteed that each 'Sell' operation for a stock has a corresponding 
-- 'Buy' operation in a previous day. It is also guaranteed that each 'Buy' operation for a stock 
-- has a corresponding 'Sell' operation in an upcoming day. 

-- Write a solution to report the Capital gain/loss for each stock.
-- The Capital gain/loss of a stock is the total gain or loss after buying and selling the stock 
-- one or many times.
-- Return the result table in any order.
-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Stocks table:
-- +---------------+-----------+---------------+--------+
-- | stock_name    | operation | operation_day | price  |
-- +---------------+-----------+---------------+--------+
-- | Leetcode      | Buy       | 1             | 1000   |
-- | Corona Masks  | Buy       | 2             | 10     |
-- | Leetcode      | Sell      | 5             | 9000   |
-- | Handbags      | Buy       | 17            | 30000  |
-- | Corona Masks  | Sell      | 3             | 1010   |
-- | Corona Masks  | Buy       | 4             | 1000   |
-- | Corona Masks  | Sell      | 5             | 500    |
-- | Corona Masks  | Buy       | 6             | 1000   |
-- | Handbags      | Sell      | 29            | 7000   |
-- | Corona Masks  | Sell      | 10            | 10000  |
-- +---------------+-----------+---------------+--------+
-- Output: 
-- +---------------+-------------------+
-- | stock_name    | capital_gain_loss |
-- +---------------+-------------------+
-- | Corona Masks  | 9500              |
-- | Leetcode      | 8000              |
-- | Handbags      | -23000            |
-- +---------------+-------------------+

-- using cte and subquery(performance seems faster than example1 code)
with cte1 as (
    select stock_name, operation, sum(price) as total
    from Stocks
    group by stock_name, operation
), cte2 as (
    select distinct stock_name from Stocks
)

select stock_name,
((select total from cte1 where cte1.operation = 'Sell' and cte1.stock_name = cte2.stock_name) - 
(select total from cte1 where cte1.operation = 'Buy' and cte1.stock_name = cte2.stock_name)) as capital_gain_loss
from cte2

-- example 1 code
-- using aggretion with case statement (performance seems slower)
select stock_name,
sum(case when operation = 'Sell' then price else -price end) as capital_gain_loss
from Stocks
group by stock_name