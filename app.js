// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';
import { cats } from './cats-data.js';
import { renderCats } from './render-cats.js';

const candyList = document.getElementById('candy-list');
const catList = document.getElementById('cat-list');

function displayCandies() {
    candyList.innerHTML = '';

    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}

function displayCats() {
  catsList.innerHTML = '';

  for (let cats of )
}

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
