// 3.	Given an array of number from 1 to 100, write a method that find which number is duplicate in this array.

//[1,2,3,4,4,5,6]  ==> return 4

function findDup(array) {
  const dup = {};

  for (let el of array) {
    if (!dup[el]) {
      dup[el] = 1;
    } else {
      return el;
    }
  }
}

// -------------- now, modify the function to find mutiple repeated values

function findDup(array) {
  const checker = {}; // {1: 1, 2:1, 3:1}
  const dup = {};

  for (let el of array) {
    if (!checker[el]) {
      checker[el] = 1;
    } else {
      dup[el] = el;
    }
  }

  const result = [];

  for (let el in dup) {
    result.push(el);
  }

  return result;
}

//Given a number for example: 12258 ,  translate to a string where 1 is translate to ‘a’ , 2 to ‘b’, 12 to ‘i’ and 26 to ‘z’
// this input will 1,2,2,5,8   abbeh
//                             aveh
//                             abyh
//                             lbeh
//                             lyh
// will return  5, because they are permunation of those set of numbers.

const stringTranslate = str => {
  // "12333str"; == > "abcccstr"

  for (let i = 0; i < str.length; i++) {}
};
