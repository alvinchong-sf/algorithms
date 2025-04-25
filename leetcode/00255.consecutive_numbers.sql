-- 180. Consecutive Numbers
-- Table: Logs
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | num         | varchar |
-- +-------------+---------+
-- In SQL, id is the primary key for this table.
-- id is an autoincrement column.
 
-- Find all numbers that appear at least three times consecutively.
-- Return the result table in any order.
-- The result format is in the following example.

-- Example 1:
-- Input: 
-- Logs table:
-- +----+-----+
-- | id | num |
-- +----+-----+
-- | 1  | 1   |
-- | 2  | 1   |
-- | 3  | 1   |
-- | 4  | 2   |
-- | 5  | 1   |
-- | 6  | 2   |
-- | 7  | 2   |
-- +----+-----+
-- Output: 
-- +-----------------+
-- | ConsecutiveNums |
-- +-----------------+
-- | 1               |
-- +-----------------+
-- Explanation: 1 is the only number that appears consecutively for at least three times.
-- https://leetcode.com/problems/consecutive-numbers/

with cte as (
    select 
        L1.id as id1, L1.num as num1, 
        L2.id as id2, L2.num as num2, 
        L3.id as id3, L3.num as num3
    from Logs as L1
    cross join Logs as L2
    cross join Logs as L3
    where L1.id + 1 = L2.id and L1.id + 2 = L3.id

)

select distinct num1 as ConsecutiveNums
from cte
where num1 = num2 and num2 = num3;