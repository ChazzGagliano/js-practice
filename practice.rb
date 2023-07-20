$count = 0

def frequence(array)
    array.each do |string|
        if string[0] == "s"
            $count += 1
        end
    end
    return $count
end

array = ["sword", "apple", "slide", "super", "candy"]

p frequence(array)