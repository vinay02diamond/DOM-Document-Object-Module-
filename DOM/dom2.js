// Selecting elements correctly

// Get element by ID
const x = document.getElementById('new1');
console.log(x);

// Get elements by class name
const headings = document.getElementsByClassName('heading');
console.log(headings[0]); // First h1 with class "heading"
console.log(headings[1]); // Second h1 with class "heading"

// Get elements by tag name
const h1Elements = document.getElementsByTagName('h1');
console.log(h1Elements); // Logs all <h1> elements
console.log(h1Elements[1]); // Logs second <h1>
console.log(h1Elements[2]); // Logs third <h1>

// Query Selector (returns the first matching element)
const firstHeading = document.querySelector('.heading');
console.log(firstHeading); // Logs first <h1> with class "heading"

const paragraph = document.querySelector('#new1');
console.log(paragraph); // Logs <p> with id "new1"
