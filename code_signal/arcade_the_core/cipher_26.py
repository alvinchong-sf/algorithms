# You've intercepted an encrypted message, and you are really curious about its contents. You were 
# able to find out that the message initially contained only lowercase English letters, and was 
# encrypted with the following cipher:

# Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
# The number corresponding to the ith letter of the encrypted message is then equal to the sum of 
# numbers corresponding to the first i letters of the initial unencrypted message modulo 26.
# Now that you know how the message was encrypted, implement the algorithm to decipher it.

# Example

# For message = "taiaiaertkixquxjnfxxdh", the output should be
# solution(message) = "thisisencryptedmessage".

# The initial message "thisisencryptedmessage" was encrypted as follows:

# letter 0: t -> 19 -> t;
# letter 1: th -> (19 + 7) % 26 -> 0 -> a;
# letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i;
# etc.

import string

def solution(message):
    alphabet = string.ascii_letters
    total = 0
    result = []

    for i in range(len(message)):
        char = message[i]
        idx = alphabet.index(char)
        new_idx = idx - total
        while new_idx < 0:
            new_idx += 26

        new_char = alphabet[new_idx]
        result.append(new_char)
        total += new_idx

    return "".join(result)