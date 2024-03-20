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

# time: O(n) | space: O(n) | n is the length of words gien
# But probably need a refactor for code stylistic improvements
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        result = self.format_1(words, maxWidth)
        return self.format_2(result, maxWidth)

    def format_2(self, result, maxWidth):
        real_result = []
        for j in range(len(result)):
            row = result[j]
            total_whitespace_needed = maxWidth - len("".join(row))
            num_empty_space = len(row) - 1
            if num_empty_space == 0:
                num_empty_space = 1
            remainder = total_whitespace_needed % num_empty_space
            whitespace_num = total_whitespace_needed // num_empty_space
            actual_whitespace = " " * whitespace_num
            temp = []
            if j == len(result) - 1:
                new_s = " ".join(row)
                n = len(new_s)
                wn = maxWidth - n
                aw = " " * wn
                temp.append(new_s)
                temp.append(aw)
            else:
                for i in range(len(row)):
                    word = row[i]
                    temp.append(word)
                    if num_empty_space > 0:
                        if remainder > 0:
                            remainder -= 1
                            temp.append(actual_whitespace + " ")
                        else:
                            temp.append(actual_whitespace)
                        num_empty_space -= 1

            real_result.append("".join(temp))
        return real_result

    def format_1(self, words, maxWidth):
        result, temp = [], []
        currMaxWidth = maxWidth
        for word in words:
            curr_length = len(word) if len(temp) == 0 else len(word) + 1
            if currMaxWidth >= curr_length:
                temp.append(word)
                currMaxWidth -= curr_length
            else:
                result.append(temp.copy())
                temp = []
                currMaxWidth = maxWidth
                temp.append(word)
                currMaxWidth -= len(word)
        result.append(temp)
        return result