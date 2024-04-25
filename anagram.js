// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
  // Remove any non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Sort the characters in both strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare the sorted words
  return sortedStr1 === sortedStr2;
}

// Accept two strings from the user
const string1 = prompt('Enter the first word:');
const string2 = prompt('Enter the second word:');

// Check if the strings are anagrams
if (areAnagrams(string1, string2)) {
  console.log('These words are anagrams.');
} else {
  console.log('These words are not anagrams.');
}