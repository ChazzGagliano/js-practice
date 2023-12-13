def to_string(array)
    new_array = []
    i = 0
    while i < array.length 
        array[i] = array[i].to_s
        new_array << array[i]
        i += 1
    end
    return new_array
end

array = [1, 2, 3, 4]
p to_string(array)