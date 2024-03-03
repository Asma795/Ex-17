// let guestLeast: string[] = ["Ali", "Dua", "Saba"];
// for (let i = 0; i < guestLeast.length; i++) {
//   console.log(
//     `Dear friend, ${guestLeast} ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You`
//   );
// }
// let guestLeast: string[] = ["Ali", "Dua", "Saba"];
// guestLeast.pop();
// guestLeast.push("Ali");
// for (let i = 0; i < guestLeast.length; i++) {
//   console.log(
//     `Dear friend, ${guestLeast} ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You`
//   );
// }
//  let guestLeast: string[] = ["Ali", "Dua", "Saba"];
// console.log(
//   `Hello Guests, I would like to Inform, I got more room available so would like to invite 3 more people\n`
// );
// guestLeast.unshift("Robert");
// guestLeast.splice(3, 0, "Thomas");
// guestLeast.push("Davies");
// for (let i = 0; i < guestLeast.length; i++) {
//   console.log(
//     `Hello Dear ${guestLeast[i]}, I would like to invite you to join me tomorrow dinner at 9pm`
//   );
// }
// console.log(`Hello Guests, I would like to Inform,I can invite only two people for dinner.\n`);
// removing until reaches 2
var guestLeast = ["Ali", "Dua", "Saba"];
while (guestLeast.length > 2) {
    var removed = guestLeast.pop();
    console.log("Hello Dear ".concat(removed, ", We are really sorry that we had to cancel your invitation.\n"));
}
// Confirming Invitation
for (var i = 0; i < guestLeast.length; i++) {
    console.log("Hello Dear ".concat(guestLeast[i], ", You are still invited to join us.\n"));
}
//Emptying the Array
guestLeast.splice(0, 2);
console.log(guestLeast);
