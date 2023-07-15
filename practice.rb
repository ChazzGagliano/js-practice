$max = 0

def high(array)
    array.each do |number|
        if number > $max
            $max = number
        end
    end
    return $max
end

array = [10, 4, 7, 8]

p high(array)
