def starts_with(array)
    count = 0
    i = 0 
    while i < array.length 
        if array[i][0] == "b"
            count += 1
        end
        i += 1
    end
    return count
end

array = ["boom", "chicka", "boom"]
p starts_with(array)