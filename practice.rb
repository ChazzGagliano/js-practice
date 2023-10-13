def product(array)
    product = 1
    array.each do |number|
        product *= number
    end
    return product
end

array = [8, 4, 2, 1]
p product(array)