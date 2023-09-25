# Write a function that returns the greatest value from an array of numbers.

def max_number(array)
    max = 0
    array.each do |number|
        if number > max
            max = number
        end
    end
    return max
end

array = [5, 17, -4, 20, 12]
p max_number(array)