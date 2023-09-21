# Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

def double(array)
    new_array = []

    array.each do |number|
        number *= 2
        new_array << number
    end
    return new_array
end

array = [4, 2, 5, 99, -4]
p double(array)

