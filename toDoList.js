// If an li element is clicked, toggle the class "done" on the <li>

/** Add event listener to <ul> element to track for mouse clicks and run toggleDone function. */
const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', toDoListAction);

function toDoListAction(e) {
  /** Check if mouse clicked on <span> element instead of <li> element. If so, target the parentNode to update className to 'done' since <span> is a child of <li>. */
  e.target.tagName == "SPAN" ? e.target.parentNode.classList.toggle('done') : 
    e.target.tagName == "LI" ? e.target.classList.toggle('done') : false;

// If a delete link is clicked, delete the li element / remove from the DOM

  /** Check if mouse clicked on delete button and use remove() on parentNode */
  e.target.className == "delete" ? e.target.parentNode.remove() : false;

  /** Check if Up or Down arrows are clicked */
  e.target.className == "moveUp" ? moveLiUp(e) : e.target.className == "moveDown" ? moveLiDown(e) : false;

};

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here

  /** Created a new <li> element and used the innerHTML property to set the HTML default elements and text. 
   * <li>
   *  <span>...</span>
   *  <a class="delete">Delete</a>
   * </li>
   * The 'text' input is passed into the innerHTML using template literals. The querySelector is then used to find the <ul> with 'class = today-list' and append the new <li> as a child element.  */
  const newListItemEl = document.createElement('li');
  newListItemEl.innerHTML = `\n<span>${text}</span>\n<a class="delete">Delete</a>\n`;
  document.querySelector('.today-list').appendChild(newListItemEl);

  /** Clear input form */
  input.value = '';
  /** Disable reorder feature if a list item is added to avoid break in code. */
  reorderFeat.innerText == 'Done Reordering Items' ? toggleReorder() : false;
};

/** Add event listener to <a.add-item> element to track for mouse clicks and run addListItem function. */
const addEl = document.querySelector('.add-item');
addEl.addEventListener('click', addListItem);

/** {EXTRA CREDIT} Reorder List Feature */

/** Created a 'Reorder Items' clickable element to enable the feature */
const reorderFeat = document.createElement(`a`);
reorderFeat.innerText = 'Reorder Items';
reorderFeat.style.backgroundColor = 'darkorange';
reorderFeat.style.marginLeft = '6px';
addEl.after(reorderFeat);

reorderFeat.addEventListener('click', toggleReorder);

function toggleReorder() {
  /** Check if feature is enabled or disabled and run code based on if-else conditions. If enabled then create up and down arrows for each <li> element. If disabled then delete all arrows from <li> elements. */
  const reorderStatus = reorderFeat.innerText;

  if (reorderStatus == 'Reorder Items') {
    const allListItems = Array.from(document.querySelectorAll('li'));
    allListItems.forEach(item => {
      if(!item.classList.contains('reorderEnabled')) {
        createArrows(item);
        item.classList.add('reorderEnabled');
      }
    })

    reorderFeat.innerText = 'Done Reordering Items';

  } else if (reorderStatus == 'Done Reordering Items') {
    deleteArrows();

    const allListItems = Array.from(document.querySelectorAll('li'));
    allListItems.forEach(item => item.classList.remove('reorderEnabled'));

    reorderFeat.innerText = 'Reorder Items';
  }
};

function createArrows(item) {
  /** Created Up and Down elements and set a class to easily delete when deleteArrows function is called. */
  const moveUp = document.createElement(`a`);
  moveUp.classList.add('moveUp');
  moveUp.innerText = "⇧";
  moveUp.style.backgroundColor = 'purple';
  moveUp.style.marginLeft = '6px';
  item.appendChild(moveUp);

  const moveDown = document.createElement(`a`);
  moveDown.classList.add('moveDown');
  moveDown.innerText = "⇩";
  moveDown.style.backgroundColor = 'purple';
  moveDown.style.marginLeft = '6px';
  item.appendChild(moveDown);
};

function deleteArrows() {
  const reorderOptionEl = Array.from(document.querySelectorAll('a[class^="move"]'));
  reorderOptionEl.forEach(item => item.remove());
};

function moveLiUp(e) {
  /** Check if <li> element is already at the top of list, if not then move up once */
  const priorEl = e.target.parentNode.previousElementSibling;
  const currentEl = e.target.parentNode;
  priorEl ? priorEl.before(currentEl) : window.alert('To Do item is already at the top of the list!');
  
}

function moveLiDown(e) {
  /** Check if <li> element is already at the bottom of list, if not then move down once */
  const nextEl = e.target.parentNode.nextElementSibling;
  const currentEl = e.target.parentNode;
  nextEl ? nextEl.after(currentEl) : window.alert('To Do item is already at the bottom of the list!');
}
