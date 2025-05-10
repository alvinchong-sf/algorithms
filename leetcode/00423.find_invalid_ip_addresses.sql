/*
3451. Find Invalid IP Addresses

Table:  logs
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| log_id      | int     |
| ip          | varchar |
| status_code | int     |
+-------------+---------+
log_id is the unique key for this table.
Each row contains server access log information including IP address and HTTP status code.

Write a solution to find invalid IP addresses. An IPv4 address is invalid if it meets any of these conditions:
    Contains numbers greater than 255 in any octet
    Has leading zeros in any octet (like 01.02.03.04)
    Has less or more than 4 octets

Return the result table ordered by invalid_count, ip in descending order respectively. 
The result format is in the following example.

Example:
Input:
logs table:
+--------+---------------+-------------+
| log_id | ip            | status_code | 
+--------+---------------+-------------+
| 1      | 192.168.1.1   | 200         | 
| 2      | 256.1.2.3     | 404         | 
| 3      | 192.168.001.1 | 200         | 
| 4      | 192.168.1.1   | 200         | 
| 5      | 192.168.1     | 500         | 
| 6      | 256.1.2.3     | 404         | 
| 7      | 192.168.001.1 | 200         | 
+--------+---------------+-------------+

Output:
+---------------+--------------+
| ip            | invalid_count|
+---------------+--------------+
| 256.1.2.3     | 2            |
| 192.168.001.1 | 2            |
| 192.168.1     | 1            |
+---------------+--------------+

Explanation:
    256.1.2.3 is invalid because 256 > 255
    192.168.001.1 is invalid because of leading zeros
    192.168.1 is invalid because it has only 3 octets

The output table is ordered by invalid_count, ip in descending order respectively.

https://leetcode.com/problems/find-invalid-ip-addresses/description/
*/

select ip, count(*) as invalid_count
from logs
group by ip
having 
array_length(string_to_array(ip, '.'), 1) != 4 
or 
substring((string_to_array(ip, '.'))[1], 1, 1) = '0'
or
substring((string_to_array(ip, '.'))[2], 1, 1) = '0'
or
substring((string_to_array(ip, '.'))[3], 1, 1) = '0'
or
substring((string_to_array(ip, '.'))[4], 1, 1) = '0'
or 
(string_to_array(ip, '.'))[1]::integer < 0
or 
(string_to_array(ip, '.'))[1]::integer > 255
or 
(string_to_array(ip, '.'))[2]::integer < 0
or 
(string_to_array(ip, '.'))[2]::integer > 255
or 
(string_to_array(ip, '.'))[3]::integer < 0
or 
(string_to_array(ip, '.'))[3]::integer > 255
or 
(string_to_array(ip, '.'))[4]::integer < 0
or 
(string_to_array(ip, '.'))[4]::integer > 255
order by invalid_count desc, ip desc