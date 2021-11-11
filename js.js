
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


for (let i = 0; i <= 5; i++) {
  //   console.log(i, ' = i ');

  for (let j = 0; j < 5; j++) {
    // console.log(i, '= i  ichkarida');
    console.log(j, '= j  ichkarida');
  }
}

console.log('loop ending');