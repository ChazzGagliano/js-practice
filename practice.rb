def start_with_a(array)
    count = 0
    array.each do |string|
        if string[0] == "a"
            count += 1
        end
    end
    return count
end

array = ["apple", "orange", "axe", "fence"]
p start_with_a(array)