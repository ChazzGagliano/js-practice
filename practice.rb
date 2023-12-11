def start_with(array) 
    i = 0
    count = 0
    while i < array.length 
        if array[i][0] == "a"
            count += 1
        end
        i += 1
    end
    return count
end

array = ["apple", "bottom", "jeans", "abel"]
p start_with(array)