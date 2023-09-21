# Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.


def less_than(array)
    new_array = []
    array.each do |number|
        if number < 100
            new_array << number
        end
    end

    return new_array

end

array = [99, 101, 88, 4, 2000, 50]
p less_than(array)