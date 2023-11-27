def greater_than(array)
    i = 0
    new_array = []
    while i < array.length 
        if array[i] > 5
            new_array << array[i]
        end
        i += 1
    end
    return new_array
end

array = [1, 4, 6, 5, 8]
p greater_than(array)