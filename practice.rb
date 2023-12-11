def greater_than(array) 
    new_array = []
    i = 0
    while i < array.length
        if array[i] > 5
            new_array << array[i]
        end
        i += 1
    end
    return new_array
end

array = [1, 7, 3, 4, 5, 8]
p greater_than(array)
