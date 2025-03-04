// function join(arr1, arr2) {
//   let res = [];
//   // for (var f = 0; f < arr1.length; f++) {
//   //   res.push(arr1[f]);
//   // }
//   res = [...arr1];
//   for (var i = 0; i < arr2.length; i++) {
//     let isExist = false;
//     for (var j = 0; j < res.length; j++) {
//       // if (arr2[i].id === res[j].id) res[j] = arr2[i];
//       // else res.push(arr2[i]);
//       if (arr2[i].id === res[j].id) {
//         isExist = true;
//         res[j] = arr2[i];
//       } else isExist = false;
//     }
//     if (!isExist) res.push(arr2[i]);
//   }
//   return res;
// }
//
// console.log(
//   join(
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ],
//   ),
// );
