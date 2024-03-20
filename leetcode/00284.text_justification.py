# 68. Text Justification
# Given an array of strings words and a width maxWidth, format the text such that each line has 
# exactly maxWidth characters and is fully (left and right) justified.
# You should pack your words in a greedy approach; that is, pack as many words as you can in each 
# line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

# Extra spaces between words should be distributed as evenly as possible. If the number of spaces 
# on a line does not divide evenly between words, the empty slots on the left will be assigned more 
# spaces than the slots on the right. For the last line of text, it should be left-justified, 
# and no extra space is inserted between words.

# Note:
# A word is defined as a character sequence consisting of non-space characters only.
# Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
# The input array words contains at least one word.

# Example 1:
# Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
# Output:
# [
#    "This    is    an",
#    "example  of text",
#    "justification.  "
# ]

# Example 2:
# Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
# Output:
# [
#   "What   must   be",
#   "acknowledgment  ",
#   "shall be        "
# ]
# Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
# Note that the second line is also left-justified because it contains only one word.

# Example 3:
# Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
# Output:
# [
#   "Science  is  what we",
#   "understand      well",
#   "enough to explain to",
#   "a  computer.  Art is",
#   "everything  else  we",
#   "do                  "
# ]

# Constraints:
# 1 <= words.length <= 300
# 1 <= words[i].length <= 20
# words[i] consists of only English letters and symbols.
# 1 <= maxWidth <= 100
# words[i].length <= maxWidth

# time: O(n) | space: O(n) | n is the length of words given
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        result = self.format_words(words, maxWidth)
        final_result = []
        for i in range(len(result) - 1):
            temp, row, num_empty_space, remainder, whitespaces = self.handle_each_row(result, maxWidth, i)
            for word in row:
                temp.append(word)
                if num_empty_space > 0 and remainder > 0:
                    remainder -= 1
                    temp.append(" ")
                if num_empty_space > 0:
                    temp.append(whitespaces)
                    num_empty_space -= 1
            final_result.append("".join(temp))

        self.handle_last_row(result, maxWidth, final_result)
        return final_result

    def handle_last_row(self, result, maxWidth, final_result):
        temp = []
        last_row_str = " ".join(result[-1])
        whitespace_num = maxWidth - len(last_row_str)
        temp.append(last_row_str)
        temp.append(" " * whitespace_num)
        final_result.append("".join(temp))

    def handle_each_row(self, result, maxWidth, idx):
        temp = []
        row = result[idx]
        total_whitespace_needed = maxWidth - len("".join(row))
        num_empty_space = 1 if len(row) - 1 == 0 else len(row) - 1
        remainder = total_whitespace_needed % num_empty_space
        num_whitespace = total_whitespace_needed // num_empty_space
        whitespaces = " " * num_whitespace
        return (temp, row, num_empty_space, remainder, whitespaces)

    def format_words(self, words, maxWidth):
        result, temp = [], []
        currMaxWidth = maxWidth
        for word in words:
            if currMaxWidth < (len(word) if len(temp) == 0 else len(word) + 1):
                result.append(temp.copy())
                temp = []
                currMaxWidth = maxWidth
            currMaxWidth -= (len(word) if len(temp) == 0 else len(word) + 1)
            temp.append(word)
        result.append(temp)
        return result