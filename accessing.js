// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

// Selected element with querySelector then directly changed it's innerText property text
const headerText = document.querySelector('#weather-head');
headerText.innerText = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"

// Selected all 'sun' classes with getElementsByClassName. Since return is an HTML collection, converted to an array using Array.from and used forEach method to iterate through each element item to change it's color to 'orange'.
const sunClasses = Array.from(document.getElementsByClassName('sun'));
sunClasses.forEach(item => item.style.color = 'orange');


// Change the class of the second <li> from to "sun" to "cloudy"

// Selected the 2nd <li> element in the parent node #weather by using :nth-of-type() in querySelector method.  The method setAttribute was then used to update the class name to 'cloudy'. 
const secondLi = document.querySelector('#weather li:nth-of-type(2)');
secondLi.setAttribute('class', 'cloudy');