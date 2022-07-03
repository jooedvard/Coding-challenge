function isValid(str) {
    let letters = {};
    Array.prototype.forEach.call(str, (letter) => {
      if (letters.hasOwnProperty(letter)) {
        letters[letter].push(letter);
      } else {
        letters[letter] = [letter];
      }
    });
  
    return checkLetters(letters);
  }
  
  let checkLetters = (letters) => {
    let numbers = [];
    for (const letter in letters) {
      numbers.push(letters[letter].length);
    }
  
    let value = numbers.reduce((init, number) => {
      return (init += number);
    });
    console.log(numbers.length);
    console.log(value);
    if (numbers.length === value || numbers.length * 2 === value - 1 || numbers.length === value - 1) return "YES";
    return "NO";
  };
  