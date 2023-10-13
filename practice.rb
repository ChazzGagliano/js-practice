def start_with(array) 
    count = 0
    i = 0
    while i < array.length
        if array[i][0] == "a"
            count += 1
        end
        i += 1
    end
    return count
end

array = ["apple", "orange", "april"]
p start_with(array)