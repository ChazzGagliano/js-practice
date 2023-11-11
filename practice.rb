def sum_array(array)
    sum = 0
    i = 0
    while i < array.length
        sum += array[i]
        i += 1
    end
    return sum
end

array = [1, 3, 5, 6]
p sum_array(array)