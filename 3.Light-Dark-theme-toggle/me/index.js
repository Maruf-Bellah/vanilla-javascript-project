function myFunction(){
    const click = document.body;
    click.classList.toggle("dark-mode")
}

let first = 5;
let second = 7;

console.log(first, second);


// swaap bole , first niyom ========================
// let temp = first;
// first = second;
// second = temp;

// second niyom ==================================
[first, second] = [second, first];

console.log(first, second);


// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log( a, b);