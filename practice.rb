def min_number(array)
    minimum_number = array[0]
    i = 0
    while i < array.length
        if minimum_number > array[i]
            minimum_number = array[i]
        end
        i += 1
    end
    return minimum_number

end

array = [2, 3, 8, 1]
p min_number(array)