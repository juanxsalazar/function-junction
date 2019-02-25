/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

// ...

const max = (x,y) => {
  if (x > y) {
    return x
  } else {
    return y
  }
  }

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

// ...

const maxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x
  } else if (x < y && y > z) {
    return y
  } else if (x < z && y < z) {
    return z
  }
}


/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

// ...

const sum = (x, y) => {
  return x + y
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

// ...
const sumOfArray = (array) => {
  let total = 0
  array.forEach(number => {
    total += number
  })
  return total
}



/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

// ...

const isVowel = letter => {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  return vowel.includes(letter.toLowerCase())
}

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

// ...

// confused about the wording on this one...

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// ...

const reverse = (string) => {
  return string.split('').reverse().join('')}


/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

// ...

let findLongestWord = words => {
  let wordArray = words.split(' ')
  let longestString = ''
  for (let i = 0; i <wordArray.length; i++) {
    if (longestString.length < wordArray[i].length){
      longestString = wordArray[i]
    }
  }
}



/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

test('max() can handle non numbers', t => {
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree() can handle non numbers', t => {
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

/* eslint-enable */
