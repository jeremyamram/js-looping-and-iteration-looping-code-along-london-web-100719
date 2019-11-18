// Code your solutions in this file
const names1 = ["Ada", "Brendan", "Ali"];
const names2 = ["Lisa", "Kaitlin", "Jan"];


// const arr = [];
 function writeCards(names, event) {
    const arr = [];
     for (let i = 0; i < names.length; i += 1) {
         arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
     }
     console.log(arr);
     return arr;
 }


writeCards(names1, "birthday");

/**
 * WHILE LOOP (initialization; while(condition){console.log}; increment;})
 */

 const gifts = ['teddy bear', 'drone', 'doll'];

 function wrapGifts(gifts) {
     let i = 0;
     while (i < gifts.length) {
         console.log(`Wrapped ${gifts[i]} and added a bow!`);
         i += 1; 
     }
     return gifts;
 }

 wrapGifts(gifts)

//  function wrapGifts(gift) {
//     do {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//          i += 1; 
//     } while (i < gifts.length)
//     return gifts
//  }

//  wrapGifts(gifts)

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i -= 1;
    }
    return number;
}

countDown(10);