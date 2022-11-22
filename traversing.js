// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

console.log(body.children[0]);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');

/** The first parentNode points to <main>, the second parentNode points to <body> */
console.log(ul.parentNode.parentNode);


// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

/** PreviousElementSibling will point to <ul>, then children[2] accesses the 3rd <li> element */
console.log(p.previousElementSibling.children[2]);