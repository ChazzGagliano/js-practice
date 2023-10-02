def productArr(array)
    product = 1
    array.each do |number|
        product *= number
    end
    return product
end

array = [1, 2, 3, 4]
p productArr(array)

