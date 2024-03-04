-- 177. Nth Highest Salary
-- Table: Employee

-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | salary      | int  |
-- +-------------+------+
-- id is the primary key (column with unique values) for this table.
-- Each row of this table contains information about the salary of an employee.
 

-- Write a solution to find the nth highest salary from the Employee table. If there is no nth highest salary, return null.

-- The result format is in the following example.

CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
  RETURN QUERY (
    select E.salary
    from Employee as E
    group by E.salary
    order by E.salary desc
    limit 1 
    offset case when N <= 0 then 10000 else N - 1 end
  );
END;
$$ LANGUAGE plpgsql;