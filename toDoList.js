// If an li element is clicked, toggle the class "done" on the <li>

function toggleDone (e) {
  // console.log(e.target);
  // console.log(e.target.parentNode);
  // console.log(this);
  
  // Check if mouse clicked on <span> element instead of <li> element. If so, target the parentNode to update className to 'done' since <span> is a child of <li>.
  e.target.tagName == "SPAN" ? e.target.parentNode.classList.toggle('done') : e.target.classList.toggle('done');
};

// Add event listener to <ul> element to track for mouse clicks and run toggleDone function.
const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', toggleDone);


// If a delete link is clicked, delete the li element / remove from the DOM


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
};
