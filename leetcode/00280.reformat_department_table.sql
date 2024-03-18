-- 1179. Reformat Department Table
-- Table: Department
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | revenue     | int     |
-- | month       | varchar |
-- +-------------+---------+
-- In SQL,(id, month) is the primary key of this table.
-- The table has information about the revenue of each department per month.
-- The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
-- Reformat the table such that there is a department id column and a revenue column for each month.
-- Return the result table in any order. The result format is in the following example.

-- Example 1:
-- Input: 
-- Department table:
-- +------+---------+-------+
-- | id   | revenue | month |
-- +------+---------+-------+
-- | 1    | 8000    | Jan   |
-- | 2    | 9000    | Jan   |
-- | 3    | 10000   | Feb   |
-- | 1    | 7000    | Feb   |
-- | 1    | 6000    | Mar   |
-- +------+---------+-------+
-- Output: 
-- +------+-------------+-------------+-------------+-----+-------------+
-- | id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
-- +------+-------------+-------------+-------------+-----+-------------+
-- | 1    | 8000        | 7000        | 6000        | ... | null        |
-- | 2    | 9000        | null        | null        | ... | null        |
-- | 3    | null        | 10000       | null        | ... | null        |
-- +------+-------------+-------------+-------------+-----+-------------+
-- Explanation: The revenue from Apr to Dec is null.
-- Note that the result table has 13 columns (1 for the department id + 12 for the months).
-- https://leetcode.com/problems/reformat-department-table/description/

select cte1.id,
(select D.revenue from Department as D where cte1.id = D.id and month = 'Jan') as "Jan_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Feb') as "Feb_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Mar') as "Mar_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Apr') as "Apr_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'May') as "May_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Jun') as "Jun_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Jul') as "Jul_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Aug') as "Aug_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Sep') as "Sep_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Oct') as "Oct_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Nov') as "Nov_Revenue",
(select D.revenue from Department as D where cte1.id = D.id and month = 'Dec') as "Dec_Revenue"
from (select distinct id from Department) as cte1