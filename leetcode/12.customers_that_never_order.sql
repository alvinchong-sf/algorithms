-- Customers Who Never Order

--  Suppose that a website contains two tables, the Customers table and the 
--  Orders table. Write a SQL query to find all customers who never 
--  order anything.


-- customer table
-- +----+-------+
-- | Id | Name  |
-- +----+-------+
-- | 1  | Joe   |
-- | 2  | Henry |
-- | 3  | Sam   |
-- | 4  | Max   |
-- +----+-------+


-- order table
-- +----+------------+
-- | Id | CustomerId |
-- +----+------------+
-- | 1  | 3          |
-- | 2  | 1          |
-- +----+------------+

-- return the following 

-- +-----------+
-- | Customers |
-- +-----------+
-- | Henry     |
-- | Max       |
-- +-----------+

SELECT Customers.Name AS Customers
FROM Customers
WHERE Customers.Id NOT IN (
    SELECT CustomerId
    from Orders
)