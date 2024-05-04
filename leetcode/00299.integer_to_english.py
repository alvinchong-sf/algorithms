# 273. Integer to English Words
# Convert a non-negative integer num to its English words representation.

# Example 1:
# Input: num = 123
# Output: "One Hundred Twenty Three"

# Example 2:
# Input: num = 12345
# Output: "Twelve Thousand Three Hundred Forty Five"

# Example 3:
# Input: num = 1234567
# Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 
# Constraints:
# 0 <= num <= 231 - 1

# Todo: refactor and clean up. I coded the solution out as fast as I can.
class Solution:
    ones = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }
    teens = {
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
    }
    tens = {
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
        6: "Sixty",
        7: "Seventy",
        8: "Eighty",
        9: "Ninety",
    }
    hundred = "Hundred"
    thousand = "Thousand"
    million = "Million"
    billion = "Billion"
    def say_2digits_less(self, num: int):
        if num == 0: return ""
        number = str(num)
        n = len(number)
        if num < 10:
            return self.ones[num]
        
        if num < 20:
            return self.teens[num]

        if n == 2:
            left = self.tens[int(number[0])]
            right = "" if number[1] == "0" else self.ones[int(number[1])]
            return left + " " + right

    def say_3digits(self, number: str):
        if int(number) == 0: return ""
        real_num = int(number)
        if len(str(real_num)) != 3:
            return self.numberToWords(real_num)
        a = self.ones[int(number[0])]
        b = self.say_2digits_less(int(number[1:]))
        return f"{a} {self.hundred} {b}".strip()

    def say_4digits(self, number: str):
        a = self.ones[int(number[0])]
        b = self.thousand
        c = self.say_3digits(number[1:])
        return f"{a} {b} {c}"
    
    def say_5digits(self, number: str):
        digit = number[:2]
        a = ""
        b = ""
        if int(digit) < 20:
            a = self.teens[int(digit)]
        else:
            a = self.tens[int(number[0])]
            if number[1] != "0":
                b = self.ones[int(number[1])]

        c = self.say_3digits(number[2:])
        
        if b and c:
            return f"{a} {b} {self.thousand} {c}"
        elif b:
            return f"{a} {b} {self.thousand}"
        elif c:
            return f"{a} {self.thousand} {c}"
        else:
            return f"{a} {self.thousand}"

    def say_6digits(self, number: str):
        real_num = int(number)
        if len(str(real_num)) != 6:
            return self.numberToWords(real_num)
        a = self.say_3digits(number[:3])
        b = self.say_3digits(number[3:])
        if b == "Zero":
            b = ""
        if a and b:
            return f"{a} {self.thousand} {b}"
        else:
            return f"{a} {self.thousand}"

    def say_7digits(self, number: str):
        a = self.ones[int(number[0])]
        b = self.say_6digits(number[1:])
        if b == "Zero" or b == "":
            b = ""
        if a and b:
            return f"{a} {self.million} {b}"
        else:
            return f"{a} {self.million}"

    def say_8digits(self, number: str):
        digit = number[:2]
        a = ""
        b = ""
        if int(digit) < 20:
            a = self.teens[int(digit)]
        else:
            a = self.tens[int(number[0])]
            if number[1] != "0":
                b = self.ones[int(number[1])]
        
        if b == "Zero":
            b = ""
        c = self.say_6digits(number[2:])
        if c == "Zero":
            c = ""
        if b and c:
            return f"{a} {b} {self.million} {c}"
        elif c:
            return f"{a} {self.million} {c}"
        elif b:
            return f"{a} {b} {self.million}"
        else:
            return f"{a} {self.million}"

    def say_9digits(self, number: str):
        real_num = int(number)
        if len(str(real_num)) != 9:
            return self.numberToWords(real_num)
        a = self.say_3digits(number[:3])
        b = self.say_6digits(number[3:])
        if b == "Zero" or b == "":
            b = ""
        if a and b:
            return f"{a} {self.million} {b}"
        else:
            return f"{a} {self.million}"

    def say_10digits(self, number: str):
        a = self.ones[int(number[0])]
        b = self.say_9digits(number[1:])
        if b == "Zero":
            b = ""
        return f"{a} {self.billion} {b}"

    def numberToWords(self, num: int) -> str:
        # 2,147,483,647 max number
        if num == 0: return "Zero"
        number = str(num)
        n = len(number)
        result = ""

        if n <= 2:
            result = self.say_2digits_less(num)

        if n == 3:
            result = self.say_3digits(number)

        if n == 4:
            result = self.say_4digits(number)
        
        if n == 5:
            result = self.say_5digits(number)
        
        if n == 6:
            result = self.say_6digits(number)

        if n == 7:
            result = self.say_7digits(number)

        if n == 8:
            result = self.say_8digits(number)

        if n == 9:
            result = self.say_9digits(number)

        if n == 10:
            result = self.say_10digits(number) 

        return result.strip()