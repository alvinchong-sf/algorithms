# Given a square matrix, rotate the original matrix 90 degrees clockwise... in place! 
# This means that you are not allowed to build a rotated matrix and return it. 
# Modify the original matrix using a temporary variable to swap elements and 
# return it. You are allowed to use a couple scalar variables if needed.

def rotate_in_place(matrix)
    (0...matrix.length).each do |row|
        (row + 1...matrix.length).each do |col|
          matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]
        end
    end
  
    matrix.each { |subarr| reverse_helper(subarr) }
    matrix
end

def reverse_helper(arr)
    i = 0; j = arr.length - 1;
    while i < j
      arr[i], arr[j] = arr[j], arr[i]
      i += 1; j -= 1
    end
end

# time o(n^2) | space o(1)
# https://www.codewars.com/kata/53fe3578d5679bf04900093f/train/ruby