/*
3374. First Letter Capitalization II
Table: user_content
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| content_id  | int     |
| content_text| varchar |
+-------------+---------+
content_id is the unique key for this table.
Each row contains a unique ID and the corresponding text content.

Write a solution to transform the text in the content_text column by applying the following rules:
    Convert the first letter of each word to uppercase and the remaining letters to lowercase
    Special handling for words containing special characters:
        For words connected with a hyphen -, both parts should be capitalized (e.g., top-rated → Top-Rated)
    All other formatting and spacing should remain unchanged

Return the result table that includes both the original content_text and the modified text following the above rules.
The result format is in the following example.

Example:
Input:
user_content table:
+------------+---------------------------------+
| content_id | content_text                    |
+------------+---------------------------------+
| 1          | hello world of SQL              |
| 2          | the QUICK-brown fox             |
| 3          | modern-day DATA science         |
| 4          | web-based FRONT-end development |
+------------+---------------------------------+

Output:
+------------+---------------------------------+---------------------------------+
| content_id | original_text                   | converted_text                  |
+------------+---------------------------------+---------------------------------+
| 1          | hello world of SQL              | Hello World Of Sql              |
| 2          | the QUICK-brown fox             | The Quick-Brown Fox             |
| 3          | modern-day DATA science         | Modern-Day Data Science         |
| 4          | web-based FRONT-end development | Web-Based Front-End Development |
+------------+---------------------------------+---------------------------------+

https://leetcode.com/problems/first-letter-capitalization-ii/description/
*/

select content_id, content_text as original_text,
string_agg(initcap(word), ' ') as converted_text
from user_content
cross join unnest(string_to_array(content_text, ' ')) as word
group by content_id
order by content_id

/*
    1. string_to_array coverts string to: ['hello', 'world', 'of', 'SQL']
    2. cross join unnest converts the table into the following
        +------------+-----------------------+----------+
        | content_id | content_text          | word     |
        +------------+-----------------------+----------+
        | 1          | hello world of SQL    | hello    |
        | 1          | hello world of SQL    | world    |
        | 1          | hello world of SQL    | of       |
        | 1          | hello world of SQL    | SQL      |

    3. initcap capitalizes each unnest to: ['Hello', 'World', 'Of', 'Sql']
    4. string_agg joins it back to: 'Hello World Of Sql'
        
*/