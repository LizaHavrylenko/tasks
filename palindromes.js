const text = 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Rotator exercitation. aute irure dolod in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint mollom.'
 
 
const getPalindromes = (string) => {
  const splitString = string.replace(/[\.\,]/g, '').split(' ');
  
  const isPalindrome = rawWord => { 
    const word = rawWord.toLowerCase();
    
    return word === word.split('').reverse().join('');
  }
  
  return splitString.filter(word => isPalindrome(word));
}

console.log(getPalindromes(text))