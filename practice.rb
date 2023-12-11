def sum_array(array)
    i = 0
    sum = 0
    while i < array.length
        sum += array[i]
        i += 1
    end
    return sum
end

array = [1, 2, 3, 4]
p sum_array(array)