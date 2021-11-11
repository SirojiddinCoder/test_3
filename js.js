
// // for loop

// const data = [
//     {
//       name: 'John',
//       friends: [
//         {
//           name: 'Friend',
//         },
//         {
//           name: 'Friend2',
//         },
//         {
//           name: 'Friend3',
//         },
//       ],
//     },
//     {
//       name: 'John2',
//       friends: [
//         {
//           name: 'Friend22',
//         },
//         {
//           name: 'Friend222',
//         },
//         {
//           name: 'Friend322',
//         },
//       ],
//     },
//   ];

//   console.log(data[1].friends[0].name, 'friend');

//   for (let i = 0; i < data.length; i++) {
//     const friends = data[i].friends;

//     for (let j = 0; j < friends.length; j++) {
//       console.log(friends[j].name, 'name');
//     }

//     //   console.log(friends, 'friends');
//   }

//   console.log('loop beginning');


// for (let i = 0; i <= 5; i++) {
//   //   console.log(i, ' = i ');

//   for (let j = 0; j < 5; j++) {
//     // console.log(i, '= i  ichkarida');
//     console.log(j, '= j  ichkarida');
//   }
// }

// console.log('loop ending');



// // i = i + 1;
// // i++;

// let i = 0;

// console.log(i++, 'i');

// console.log(i, 'i next');

// let i = 0;
// let j = 0;

// while (i < 5) {
//   console.log(j, 'jjjjj');
//   j = 0;

//   while (j < 5) {
//     // console.log(j, 'index j');
//     // console.log(i, 'index i');
//     j++;
//   }

//   i++;
// }

// let i = 0;

// while (i < 0) {
//   console.log(i, 'i');
// }

// let i = 0;

// do {
//   console.log(i, 'i');

//   i++;
// } while (i < 0);

1;
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
// •	Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// •	Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

// •	removeLeadingTrailing("230.000") ➞ "230"
// •
// •	removeLeadingTrailing("00402") ➞ "402"
// •
// •	removeLeadingTrailing("03.1400") ➞ "3.14"
// •
// •	removeLeadingTrailing("30") ➞ "30"

2;
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

3;
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// To illustrate:
// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// reverseAndNot(123) ➞ 321123

// reverseAndNot(152) ➞ 251152

// reverseAndNot(123456789) ➞ 987654321123456789

4;
// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Examples

// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
