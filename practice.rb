# Write a function that returns the sum of all numbers in a given array.

def sum_array(array)
    sum = 0

    array.each do |number|
        sum += number
    end
    return sum
end

array = [1, 2, 3, 4]

p sum_array(array)