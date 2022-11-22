// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

/** Selected all <td> elements into an array using Array.from method. */
const tdEl = Array.from(document.querySelectorAll('td'));

/** Created a function that'll store the x and y coordinates of the mouse click and display the coordinates in the corresponding <td> element where the mouse was clicked. */
const displayXY = (e) => {
    const xCoordinate = e.x;
    const yCoordinate = e.y;
    e.target.innerHTML = `X: ${xCoordinate}<br> Y: ${yCoordinate}`;
}

/** Event listeners added to each <td> element to display the X and Y coordinates */
tdEl.forEach(item => item.addEventListener('click', displayXY));