let stringPattern = "^[a-z]+$";
let letters = [];

for (let index = 65; index < 90; index++) {
  letters.push(String.fromCharCode(index).toLowerCase());
}

function secretPassword(message) {
  console.log(message.length)
  if (!message.match(stringPattern) || message.length != 9) {
    return "BANG! BANG! BANG!";
  } else {
    let first = stepOne(message);
    let second = stepTwo(first);
    let third = stepThree(first);
    let four = stepFour(first);

    return third + four + second;
  }
}

function stepOne(message) {
  let splitted = [];
  for (let index = 0; index < message.length; index++) {
    if (index % 3 == 0) {
      let part = message.substring(index, index + 3);
      splitted.push(part);
    }
  }
  return splitted;
}

function stepTwo(messageArray) {
  let firstLetter = messageArray[0].charAt(0);
  let secondLetter = messageArray[0].charAt(1);
  let thirdLetter = messageArray[0].charAt(2);

  let firstIndex = letters.findIndex((letter) => letter == firstLetter) + 1;
  let secondIndex = letters.findIndex((letter) => letter == thirdLetter) + 1;

  firstLetter = firstIndex;
  thirdLetter = secondIndex;

  return firstLetter + secondLetter + thirdLetter;
}

function stepThree(messageArray) {
  let fourthLetter = messageArray[1].charAt(0);
  let fifthLetter = messageArray[1].charAt(1);
  let sixthLetter = messageArray[1].charAt(2);

  return sixthLetter + fifthLetter + fourthLetter;
}

function stepFour(messageArray) {
  let seventhLetter = messageArray[2].charAt(0);
  let eightLetter = messageArray[2].charAt(1);
  let ninthLetter = messageArray[2].charAt(2);

  let seventhIndex = letters.findIndex((letter) => letter == seventhLetter) + 1;
  let eightLetterIndex =
    letters.findIndex((letter) => letter == eightLetter) + 1;
  let ninthLetterIndex =
    letters.findIndex((letter) => letter == ninthLetter) + 1;

  seventhLetter = nextIndexLetter(letters, seventhIndex - 1);
  eightLetter = nextIndexLetter(letters, eightLetterIndex - 1);
  ninthLetter = nextIndexLetter(letters, ninthLetterIndex - 1);

  return seventhLetter + eightLetter + ninthLetter;
}

function nextIndexLetter(array, index) {
  if (index >= array.length) {
    return array[0];
  } else {
    return array[index + 1];
  }
}
