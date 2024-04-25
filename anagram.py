#The main task here is to create a function to check if two strings are anagrams

def check_anagram(first_string, second_string):
#since strings in python are case sensitive we convert the first string and second to uppercase or lower
#we rearrange the characters in the string them next

     ordered_first_string = sorted(first_string.lower())
     ordered_second_string = sorted(second_string.lower())

     return ordered_first_string == ordered_second_string
#the function returns a bool True/ False

#for simplicity, we can create another function that will print the truth value
def print_anagram_status(string_1, string_2):
     print(check_anagram(string_1,string_2))
     return 0
     

print_anagram_status("listen","silent")
    



