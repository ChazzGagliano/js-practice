def start_with_a(array)
    count = 0
    array.each do |number|
        if number[0] == "a"
            count += 1
        end
    end
    return count
end

array = ["apple", "biden", "abercrombie"]
p start_with_a(array)