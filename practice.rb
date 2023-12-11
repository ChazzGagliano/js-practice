def maximus(array)
    i = 0
    max_number = array[0]
    while i < array.length
        if max_number < array[i]
            max_number = array[i]
        end
        i += 1
    end
    return max_number
end

array = [1, 2, 4, 5, 6, 3]
p maximus(array)