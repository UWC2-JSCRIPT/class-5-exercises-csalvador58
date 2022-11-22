// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.


// Selected the <body> element to be used later to append child elements
const body = document.querySelector('body');

// Created the plus element with text and appended as a child to the <body>
const plusEl = document.createElement('h1');
const plusElText = document.createTextNode('Plus +');
plusEl.appendChild(plusElText);
body.appendChild(plusEl);

// Created the minus element with text and appended as a child to the <body>
const minusEl = document.createElement('h1');
const minusElText = document.createTextNode('Minus -');
minusEl.appendChild(minusElText);
body.appendChild(minusEl);


// Initialized count variable
let count = 0;

// Created an element to track the count with text and appended as a child to the <body>
const countEl = document.createElement('h2');
const countElText = document.createTextNode(`Count: ${count}`);
countEl.appendChild(countElText);
body.appendChild(countEl);

// Created 'click' event listeners to the plus and minus elements. After the count is incremented or decremented, the innerText property is updated with the latest count value.
plusEl.addEventListener('click', () => { 
    count++;
    countEl.innerText = `Count: ${count}`;
});
minusEl.addEventListener('click', () => {
    count--;
    countEl.innerText = `Count: ${count}`;
});
