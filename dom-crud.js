// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

/** Created <a> element and set 'id' attribute to "cta" */
const aElement = document.createElement('a');
aElement.setAttribute('id', 'cta');

/** Used query selector to find last <p> element and insert the new <a> element after the location using the after() method */
const lastPElement = document.querySelector('p:last-of-type');
lastPElement.after(aElement);

/** Created the 'Buy Now!' text node and used appendChild to place in the desired <a> element */
const aTextNode = document.createTextNode('Buy Now!');
aElement.appendChild(aTextNode);

// Access (read) the data-color attribute of the <img>,
// log to the console

/** Selected the <img> element with querySelector, then used getAttribute method to read the value of the attribute 'data-color' */
const imgDataColor = document.querySelector('img').getAttribute('data-color');
console.log(`The "data-color" attribute of the <img> is: ${imgDataColor}`);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

/** Used querySelector and :nth-of-type to specifically target the 3rd <li> of the <ul> parent. The method setAttribute was used to update the class name. */
document.querySelector('ul li:nth-of-type(3)').setAttribute('class', 'highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

/** Selected the <main> element then used the removeChild method to select and remove the last <p> child element in <main> */
document.querySelector('main').removeChild(document.querySelector('main p:last-of-type'));

