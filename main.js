// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];
var instructors = [{
    firstname: 'JD',
    teaches: 'JavaScript'
}, {
    firstname: 'Tim',
    teaches: 'JavaScript'
}, {
    firstname: 'Brit',
    teaches: 'Ruby'
}, {
    firstname: 'Rhonda',
    teaches: 'iOS'
}, {
    firstname: 'Gil',
    teaches: 'Java'
}, {
    firstname: 'Ben',
    teaches: 'UI'
}, {
    firstname: 'Jess',
    teaches: 'JavaScript'
}, {
    firstname: 'Will',
    teaches: 'JavaScript'
}, {
    firstname: 'Calvin',
    teaches: 'JavaScript'
}, {
    firstname: 'James',
    teaches: 'Ruby'
}];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(a, b) {
    return a + b;
}
// write your console.log/asserts here:
console.log(sum(2, 4));
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2, 3));
console.assert(sum(2, 3) === 5);
console.assert(sum(1, 0) === 1);
console.assert(sum(-48, 5) === -43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg(x, y, z) {
    return (x + y + z)/3;
}
// write your console.log/asserts here:
console.log(avg(14,19,24));
// console.log('average of 2, 2, and 2 is ', avg(2, 2, 2));
console.assert(avg(12, 8, 1) === 7); //passed
console.assert(avg(2, 2, 2) === 1); //failed assertion

// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(phrase) {
    return phrase.length;
}

// write your console.log/asserts here:
console.log(getLength('this is life')); //12
console.log(getLength('it only gets better')); //19
console.assert(getLength('gvgvgt') === 6);
// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(c, d) {
    return c < d;
}

// write your console.log/asserts here:
console.log(greaterThan(1, 2));
console.log(greaterThan(4, 2));
console.assert(greaterThan(4,8) === true);
// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formated like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name) {

    return 'Hello, ' + name;
}
// write your console.log/asserts here:
console.log(greet('chris'));
console.log(greet('tony'));
console.log(greet('mike'));
console.assert(greet('shannon') === 'Hello, shannon');
// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib(name, age, color, day) {
    return 'Please ' + name + ' act ' + age + ' look ' + color + ' on ' + day;
}
// write your console.log/asserts here:
console.log(madlib('Chris', '28', 'purple', 'Friday'));
console.log(madlib('Mike', '32', 'red', 'Monday'));
console.assert(madlib('Jake', '12', 'pink', 'monday') === 'Please Jake act 12 look pink on monday');
// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
// write your console.log/asserts here:
console.log(max(2, 4));
console.log(max(4, 2));
console.assert(max(7,8) === 8 );
// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (c > b) {
        return c;
    } else {
        return b;
    }
}


// write your console.log/asser {ts here:
console.log(maxOfThree(8,4,9));
console.log(maxOfThree(8,4,2));
console.log(maxOfThree(8,14,9));
console.assert(maxOfThree(8,14,9) === 14);

// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}
// write your console.log/asserts here:
console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));
console.log(isVowel('c'));
console.assert(isVowel('c') === true);//assertion failed because in my if statment the arguement char never = c
console.assert(isVowel('e') === true); //pass
// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate(text) {
  var textArray = text.split('');
  //textArray= ['j','e','s','s'] //length is 4
  // console.log(textArray);
  var wordString = [];
  //add o each letter seperately
  for (var i = 0; i < textArray.length; i++) {
    if ( isVowel(textArray[i]) === false ) {
      //'j' becomes 'joj'
      var consonant = textArray[i] + 'o' + textArray[i];
      wordString.push(consonant);
      console.log(consonant);
    } else if ( isVowel(textArray[i]) === true ) {
        var vowel = textArray[i];
        wordString.push(vowel);
        console.log(vowel);
    }

    //check to see if letter is a vowel
    // textArray[i];
  // console.log(textArray[i]);
  // if (textArray === i) {
  // it is a add consonant write letter then add o then same letter
// if it isnt a consonant just write the letter
  // }
  }
  var answer = wordString.join('');
  console.log(answer);
  return answer;
}

var word = 'cats';

// write your console.log/asserts here:
console.log(translate(word));
console.log(word);
// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse(string){
var reversal = string.split('').reverse('').join('');
return reversal;
}
// write your console.log/asserts here:
console.log(reverse('string'));
console.log(reverse('chain'));
console.log(reverse('smoke'));
// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
var numbers = [5, 22, 54, 90];
var numbers1 = [54, 22, 66, 78];

function largest(numArray) {
var largeNum = 0;
for(i = 0; i < numArray.length; i++) {
  if (numArray[i] > largeNum) {
    largeNum = numArray [i];
  }
}
return largeNum
}
// write your console.log/asserts here:
console.log(largest([2,86,78]));
console.log(largest(numbers1));
console.log('the largest number in the `numbers` array is ', largest(numbers));
console.assert(largest(numbers), 101);

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
var lngStr = '';

function longest(strArray) {
  for(i = 0; i < strArray.length; i++) {
    {
      if (strArray[i].length > lngStr.length)
      {
        lngStr = strArray[i];

      }
    }
  }
  return lngStr;
}
// write your console.log/asserts here:
console.log(longest(['get', 'done', 'already']));
console.log(longest(['get', 'up', 'down', 'functionality'] === 'functionality' ));
console.log(longest(['get', 'done', 'already'] === 'already'));
// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:

function getEvens(newArray) {
  var evenArray = [];
  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] % 2 === 0 ) {
      evenArray.push(newArray[i]);
    }
  }
  return evenArray;
}

// write your console.log/asserts here:
console.log(getEvens([8, 4, 3, 5]));
console.log(getEvens([8, 4, 3, 5]));
console.assert(getEvens([8, 4, 3, 5]) === [8, 4, 3]);


// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:

function getOdds(newArray) {
  var oddArray = [];
  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] % 2 !== 0 ) {
      oddArray.push(newArray[i]);
    }
  }
  return oddArray;
}
// write your console.log/asserts here:
console.log(getOdds([8, 5, 24, 7]));
console.log(getOdds([3, 5, 7, 8]));
console.assert(getOdds([8, 5, 24, 7]) [0] === 5);
console.assert(getOdds([8, 5, 24, 7]) [1] === 7);

// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:

function containsIs(words) {
  var stringArr = [];
  for (i = 0; i < words.length; i++){
    if(words[i].includes ('is')){
      stringArr.push(words[i]);
    }
  }
  return stringArr;
}
// write your console.log/asserts here:
console.log(containsIs(['this miss', 'cant', 'miss this']));
console.log( containsIs( ['this'] )[0] === 'this' );
///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
// at least 8 characters
// contains at least one number
// contains at least one of the following: . , ! $ &
// contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
