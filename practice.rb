def starts_with(array)
    count = 0
    array.each do |string|
        if string[0] == "a"
            count += 1
        end
    end
    return count
end

array = ["apple", "bottom", "apricot"]
result = starts_with(array)
p result