// function isValid(s) {
//   let arr = s.slice("");
//   if (arr.length % 2 == 1) return false;
//   const pairs = new Map([
//     ["(", ")"],
//     ["{", "}"],
//     ["[", "]"],
//   ]);
//   const noMatch = [];
//   for (let ch of s) {
//     if (pairs.has(ch)) {
//       noMatch.push(ch);
//     } else {
//       const top = noMatch.pop();
//       if (pairs.get(top) !== ch) {
//         return false;
//       }
//     }
//   }
//   return noMatch.length === 0;
// }
//
// console.log(isValid("({}){[]}"));
