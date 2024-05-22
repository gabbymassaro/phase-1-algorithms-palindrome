function isPalindrome(word) {
  let reversedWord = [...word].reverse().join('')
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here:
  function isPalindrome takes a strings
    Declare a variable to this : 
      [spread the string passed into isPalindrome into individual characters
      and call the reverse method, then join the characters back into a string.]
    If the string passed === the decalred variable
        return true
    If not
        return false


  # each index must equal it's 'backwards' index equivalent
  # ex: r.a.c.e.c.a.r === [0]=[6], [1]=[5], [2]=[4], [3]=[3]
  # function needs to take a string, map over each letter, return the string in reverse order
  # if the output of the returned string is the same as the passed string, it's a palindrome

  Acceptance Criteria:
  1. Write a function isPalindrome that will receive one argument, a string
  3. Your function should return true if the string is a palindrome
  4. Your function should return false if the string is not a palindrome
*/

/*
  Add written explanation of your solution here:
  I've created a function that takes a single string as it's argument.
  This string is a 'word' that I've taken and broke up into individual letters
  using the spread operator. Then, I reversed the order of those letters using
  the .reverse method and re-joined them as a string. I've held this value in 
  a variable called 'reversedWord'. I then use a if-else statement to compare
  the string (word) that was passed as the functions argument to the value of
  the reversedWord.  If they match, the functinon returns true. Else, the
  function returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("expecting: false");
  console.log("=>", isPalindrome('toy'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
