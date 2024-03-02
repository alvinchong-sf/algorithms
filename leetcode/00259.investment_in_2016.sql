-- 585. Investments in 2016
-- Table: Insurance

-- +-------------+-------+
-- | Column Name | Type  |
-- +-------------+-------+
-- | pid         | int   |
-- | tiv_2015    | float |
-- | tiv_2016    | float |
-- | lat         | float |
-- | lon         | float |
-- +-------------+-------+
-- pid is the primary key (column with unique values) for this table.
-- Each row of this table contains information about one policy where:
-- pid is the policyholder's policy ID.
-- tiv_2015 is the total investment value in 2015 and tiv_2016 is the total investment value in 2016.
-- lat is the latitude of the policy holder's city. It's guaranteed that lat is not NULL.
-- lon is the longitude of the policy holder's city. It's guaranteed that lon is not NULL.
 

-- Write a solution to report the sum of all total investment values in 2016 tiv_2016, for all policyholders who:

-- have the same tiv_2015 value as one or more other policyholders, and
-- are not located in the same city as any other policyholder (i.e., the (lat, lon) attribute 
-- pairs must be unique).
-- Round tiv_2016 to two decimal places.

-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Insurance table:
-- +-----+----------+----------+-----+-----+
-- | pid | tiv_2015 | tiv_2016 | lat | lon |
-- +-----+----------+----------+-----+-----+
-- | 1   | 10       | 5        | 10  | 10  |
-- | 2   | 20       | 20       | 20  | 20  |
-- | 3   | 10       | 30       | 20  | 20  |
-- | 4   | 10       | 40       | 40  | 40  |
-- +-----+----------+----------+-----+-----+
-- Output: 
-- +----------+
-- | tiv_2016 |
-- +----------+
-- | 45.00    |
-- +----------+
-- Explanation: 
-- The first record in the table, like the last record, meets both of the two criteria.
-- The tiv_2015 value 10 is the same as the third and fourth records, and its location is unique.

-- The second record does not meet any of the two criteria. Its tiv_2015 is not like any other 
-- policyholders and its location is the same as the third record, which makes the third record fail, too.
-- So, the result is the sum of tiv_2016 of the first and last record, which is 45.

-- https://leetcode.com/problems/investments-in-2016
with cte1 as (select * from Insurance where tiv_2015 in (
    select tiv_2015
    from Insurance
    group by tiv_2015
    having count(*) >= 2  
))
select round(sum(temp.tiv_2016), 2) as tiv_2016
from (
    select A.tiv_2016
    from cte1 as A
    cross join Insurance as B
    where A.pid != B.pid
    and (A.lat != B.lat or A.lon != B.lon)
    group by A.pid
    having count(*) = (select count(*) - 1 from Insurance)
    order by A.pid, B.pid
) as temp