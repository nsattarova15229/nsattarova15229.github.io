// Select all buttons in the navigation
const buttons = document.querySelectorAll('#nav-buttons button');

// Track the currently focused button
let currentIndex = 0;

// Function to update focus on a button
function updateFocus(index) {
  currentIndex = (index + buttons.length) % buttons.length; // Circular navigation
  buttons[currentIndex].focus(); // Focus the current button
}

// Listen for keyboard events
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      updateFocus(currentIndex + 1);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      updateFocus(currentIndex - 1);
      break;
    case 'Enter': // Simulate a button click
      buttons[currentIndex].click();
      break;
    default:
      // Ignore other keys
      break;
  }
});
