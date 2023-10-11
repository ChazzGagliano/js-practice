def string_array(array)
    string = []
    i = 0
    while i < array.length 
        array[i] = array[i].to_s
        string << array[i].to_s
        i += 1
    end
    return string
end

array = [1, 2, 3, 4]
p string_array(array)