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

var ar = ['s1', 's2', 's3'];
console.log('START FOR-IN ARRAY')
for (var l in ar) {
    console.log('l = ', l);
}

ar.forEach(function (el, index) {
    console.log('el = ', el, ' index = ', index);
})

