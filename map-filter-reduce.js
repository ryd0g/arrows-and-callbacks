// Try these map filter and reduce practice problems

const names = ['anatoly', 'bobby', 'carlsen', 'gary', 'fabiano'];
const primes = [1, 2, 3, 5, 7, 11, 13];
const users = [
  {
    name: 'anatoly',
    rating: 2848,
  },
  {
    name: 'bobby',
    rating: 2785,
  },
  {
    name: 'carlsen',
    rating: 2882,
  },
  {
    name: 'gary',
    rating: 2851,
  },
  {
    name: 'fabiano',
    rating: 2844,
  },
];

// Solve the problems below using map, filter, and reduce.
// Be sure to log the results to the console as you solve
// each problem to check your results.

// --------------------------------------------------------------

// Map problems

// Create an array of uppercase names
console.log('1 -------');
const upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames);

// TODO: Map the names array to an array of three letter strings
// ['anatoly', 'bobby', 'carlsen'] -> ['ana', 'bob', 'car']
console.log('2 -------');
const shortNames = names.map((name) => name.slice(0, 3));
console.log(shortNames);

// TODO: Use map to create an array of squares from the primes array.
// [1,2,3,5,7,11,13] -> [1,4,9,25,49,121,169]
console.log('3 -------');
const squares = primes.map((n) => n * n);
console.log(squares);

// TODO: Map the users array into an array of name strings:
// [{ name: "anatoly", ... }, {}, {}] -> ['anatoly', 'bobby', 'carlsen']
console.log('4 -------');
const usersList = users.map((user) => user.name);
console.log(usersList);

// TODO: Map the array of users to an array of ratings:
// [{ name: "anatoly", rating: 2848 }, {}, {}] -> [2848, 2785, 2882]
console.log('5 -------');
const ratingList = users.map((user) => user.rating);
console.log(ratingList);

// TODO: Map the Users array into an array of string descriptions:
// [{ name: "anatoly", rating: 2848 }, {}, {}] -> ['name: anatoly rating: 2848', ...]
console.log('6 -------');
const usersFullList = users.map((user) => {
  return `Name: ${user.name} Rating: ${user.rating}`;
});
console.log(usersFullList);
// --------------------------------------------------------------

// Filter

// Use filter to create an array that has a subset of the items
// from the source array.

// TODO: Filter the names array to create a new array that
// that contains only names that begin with the letter 'b'
console.log('7 -------');
const bNames = names.filter((names) => names.charAt(0) === 'b');
console.log(bNames);

// TODO: Filter the primes array to a new array that contains
// only numbers that are greater than 10
console.log('8 -------');
const primes10 = primes.filter((n) => n > 10);
console.log(primes10);

// TODO: Filter the users array to a new array containing
// Users with a rating greater than 2850
console.log('9 -------');
const rating2850 = users.filter((user) => {
  if (user.rating > 2850) {
    return `Name: ${user.name} Rating: ${user.rating}`;
  }
});
console.log(rating2850);

// ---------------------------------------------------------------

// Reduce

// Use reduce to aggregate the contents of an array to
// a single new value. Usually you'll reduce to a number or
// string but sometimes you'll reduce to an array or object.

// Be sure to include an initial value when using reduce. This
// is the second praramter: arr.reduce(callBack, initalValue)
// arr.reduce(() => {}, 0) <- here 0 is the intial value!

// TODO: Reduce the names array to a string made from the first
// letter of each string in the source array:
// ['anatoly', 'bobby', 'carlsen'] -> 'abc'
console.log('10 -------');
const firstLetter = names.reduce((acc, name) => acc + name[0], '');
console.log(firstLetter);

// TODO: Reduce the primes array to the total sum of all
// numbers in the array.
// [1,2,3,5,7,11,13] -> 42
console.log('11 -------');
const sum = primes.reduce((acc, n) => acc + n);
console.log(sum);

// TODO: Reduce the users array to on object with the key
// as the name and value as the rating. For example:
// [{ name: "anatoly", rating: 2848 }, {}, {}] -> { 'anatoly': 2848, 'bobby': 2785, 'carlsen': 2882 }
console.log('12 -------');
const usersObj = users.reduce((obj, name, rating) => {
  return { ...obj, [rating]: name };
}, {});
console.log(usersObj);
// ----------------------------------------------------------

// Combine map filter and reduce!

// You ,may have noticed that Map and Filter each return a
// new array. They do not modify the existing array.
// All arrays have these methods. This means you can chain
// them together like this: arr.map().filter(), or like
// this: arr.filter().map(), or arr.map().filter().reduce()
// Or any other combination you can think of.

// TODO: filter the primes array to numbers less than 10. Then
// reduce to get the sum.
// primes.filter().reduce() -> 18
console.log('13 -------');
const primesLess10 = primes.filter((n) => n < 10).reduce((acc, n) => acc + n);
console.log(primesLess10);

// TODO: filter the users array to get all of the players
// with ratings above 2850 and then map these objects to
// name and rating strings:
// users.filter().map() -> ['anatoly rating: 2848', ...]
console.log('14 -------');
const players = users
  .filter((users) => {
    if (users.rating > 2850) {
      return `Name: ${users.name} Rating: ${users.rating}`;
    }
  })
  .map((users) => {
    return `Name: ${users.name} Rating: ${users.rating}`;
  });
console.log(players);

// TODO: Sometimes you'll run into data that is missing.
// often this will appear as undefined, or null. The
// array below has some undefined values. Filter these
// then get the sum.
const data = [23, 44, undefined, 12, undefined, 59, 83, 13, 42, 71, undefined];

console.log('15 -------');
const missing = data
  .filter((n) => typeof n === 'number')
  .reduce((acc, n) => acc + n);
console.log(missing);
