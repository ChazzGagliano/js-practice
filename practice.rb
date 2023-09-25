# Write a function that accepts an array of numbers and returns the product of all the numbers.

def total(array)
    product = 1
    array.each do |number|
        product *= number
    end
    return product
end

array = [1, 2, 3, 4]
p total(array)
