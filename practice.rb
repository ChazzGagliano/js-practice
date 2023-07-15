$sum = 0
def total(array)
    array.each do |number|
        $sum += number
    end
    return $sum
end

array = [3, 4, 7, 8]

p total(array)
