console.log('START WHILE DO')
var myCurrentAge = 3;
while (myCurrentAge < 16) {
    console.log('myCurrentAge = ', myCurrentAge);
    myCurrentAge = myCurrentAge + 3;
    if (myCurrentAge === 16) {
        console.log('BREAK')
        break;
    }
}

console.log('START DO WHILE')
var myCurrentAge = 3;
do {
    console.log('myCurrentAge = ', myCurrentAge);
    myCurrentAge = myCurrentAge + 3;
    if (myCurrentAge === 16) {
        console.log('BREAK')
        break;
    }
} while (myCurrentAge < 16)

console.log('START FOR')
for (var myCurrentAge = 3; myCurrentAge < 16; myCurrentAge = myCurrentAge + 3) {
    if (myCurrentAge === 16) {
        console.log('BREAK')
        break;
    }
    console.log('myCurrentAge = ', myCurrentAge);
}

//var myCurrentAge = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//console.log('START FOR-IN ARRAY')
//for (var numbers in myCurrentAge) {
    //console.log('numbers = ', numbers);
    //myCurrentAge = myCurrentAge + 3;
//}

   // ar.forEach(function (myCurrentAge) {
        //console.log('myCurrentAge = ',myCurrentAge);
        //myCurrentAge = myCurrentAge + 3;
//})

