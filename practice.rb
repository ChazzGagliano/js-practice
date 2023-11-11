def product_(array)
    product = 1
    i = 0
    while i < array.length
        product *= array[i]
        i += 1
    end
    return product
end

array = [1, 2, 3, 4]
p product_(array)