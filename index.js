// Write your code here!
// Remove the <main id="main"> element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to "victory"
newHeader.id = 'victory';

// Set its text content (replace with your real name!)
newHeader.textContent = 'Paul is the champion';

// Append it to the body (so it's visible in DOM)
document.body.appendChild(newHeader);