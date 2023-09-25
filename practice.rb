

# Given an array, write a function that returns an array that contains the original array’s values in reverse.



    def select_numbers(arr)
      selected_numbers = [arr[0]]  
      index = 0
      while (index + selected_numbers.last) < arr.length
        index += selected_numbers.last
        selected_numbers << arr[index]
      end
      return selected_numbers
    end
    

    original_array = [1, 2, 1, 3, 2, 4, 1, 5]
   p select_numbers(original_array)





