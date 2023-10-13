def to_string(array) 
    i = 0  
    new_string = []
    while i < array.length
        new_string << array[i].to_s
        i += 1
    end
    return new_string
end

array = [1, 2, 3, 4]
p to_string(array)

