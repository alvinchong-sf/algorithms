/*
3497. Analyze Subscription Conversion

Table: UserActivity
+------------------+---------+
| Column Name      | Type    | 
+------------------+---------+
| user_id          | int     |
| activity_date    | date    |
| activity_type    | varchar |
| activity_duration| int     |
+------------------+---------+
(user_id, activity_date, activity_type) is the unique key for this table.
activity_type is one of ('free_trial', 'paid', 'cancelled').
activity_duration is the number of minutes the user spent on the platform that day.
Each row represents a user's activity on a specific date.

A subscription service wants to analyze user behavior patterns. The company offers a 7-day free 
trial, after which users can subscribe to a paid plan or cancel. Write a solution to:
    Find users who converted from free trial to paid subscription
    Calculate each user's average daily activity duration during their free trial period (rounded to 2 decimal places)
    Calculate each user's average daily activity duration during their paid subscription period (rounded to 2 decimal places)

Return the result table ordered by user_id in ascending order.
The result format is in the following example.

Example:
Input:
UserActivity table:
+---------+---------------+---------------+-------------------+
| user_id | activity_date | activity_type | activity_duration |
+---------+---------------+---------------+-------------------+
| 1       | 2023-01-01    | free_trial    | 45                |
| 1       | 2023-01-02    | free_trial    | 30                |
| 1       | 2023-01-05    | free_trial    | 60                |
| 1       | 2023-01-10    | paid          | 75                |
| 1       | 2023-01-12    | paid          | 90                |
| 1       | 2023-01-15    | paid          | 65                |
| 2       | 2023-02-01    | free_trial    | 55                |
| 2       | 2023-02-03    | free_trial    | 25                |
| 2       | 2023-02-07    | free_trial    | 50                |
| 2       | 2023-02-10    | cancelled     | 0                 |
| 3       | 2023-03-05    | free_trial    | 70                |
| 3       | 2023-03-06    | free_trial    | 60                |
| 3       | 2023-03-08    | free_trial    | 80                |
| 3       | 2023-03-12    | paid          | 50                |
| 3       | 2023-03-15    | paid          | 55                |
| 3       | 2023-03-20    | paid          | 85                |
| 4       | 2023-04-01    | free_trial    | 40                |
| 4       | 2023-04-03    | free_trial    | 35                |
| 4       | 2023-04-05    | paid          | 45                |
| 4       | 2023-04-07    | cancelled     | 0                 |
+---------+---------------+---------------+-------------------+

Output:
+---------+--------------------+-------------------+
| user_id | trial_avg_duration | paid_avg_duration |
+---------+--------------------+-------------------+
| 1       | 45.00              | 76.67             |
| 3       | 70.00              | 63.33             |
| 4       | 37.50              | 45.00             |
+---------+--------------------+-------------------+
https://leetcode.com/problems/analyze-subscription-conversion/description/
*/

-- TODO Refactor
with T1 as (
    select user_id, activity_type,
    round(avg(activity_duration), 2) as duration
    from UserActivity
    group by user_id, activity_type
    having activity_type != 'cancelled'
    order by user_id, activity_type
), T2 as (
    select user_id,
    case
        when activity_type = 'free_trial' then duration else 0
    end as trial_avg_duration,
    case
        when activity_type = 'paid' then duration else 0
    end as paid_avg_duration
    from T1
), T3 as (
    select distinct user_id,
        (select trial_avg_duration from T2 where T1.user_id = T2.user_id and trial_avg_duration != 0) as trial_avg_duration,
        (select paid_avg_duration from T2 where T1.user_id = T2.user_id and paid_avg_duration != 0) as paid_avg_duration
    from T1
)

select * from T3 where trial_avg_duration is not null and paid_avg_duration is not null;
