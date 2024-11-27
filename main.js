// Select the input field, notification area, and button
const input = document.getElementById('name-input');
const notification = document.getElementById('notification');
const button = document.getElementById('my-button');

// Add an event listener to the input field
input.addEventListener('input', () => {
  const nickname = input.value.trim(); // Get and trim the input value

  // Check if the nickname matches the required pattern
  const isValid = /^[a-zA-Z0-9_]{4,15}$/.test(nickname);
  if (isValid) {
    // Valid input: clear notification, enable button, reset styles
    notification.innerHTML = ''; // Clear notification text
    input.classList.remove('invalid'); // Remove red border
    button.disabled = false; // Enable the button
    button.style.backgroundColor = '#356c35'; // Restore green background
    button.style.color = 'black'; // Set text color to black explicitly
} else {
    // Invalid input: show error, disable button, apply styles
    notification.innerHTML = `
        ⚠ Make sure your input meets these requirements:
        <ul>
            <li>Between 4-15 characters</li>
            <li>Contains letters, numbers, or underscores</li>
            <li>No spaces</li>
        </ul>
    `;
    input.classList.add('invalid'); // Add red border
    button.disabled = true; // Disable the button
    button.style.backgroundColor = 'grey'; // Change button to grey
    button.style.color = 'black'; // Set text color to black explicitly
}
});

// Add a click event listener to the button (greeting message if no error)
button.addEventListener('click', () => {
  const nickname = input.value.trim();
  // Redirect to the main page with the nickname as a URL parameter
  window.location.href = `index.html?nickname=${encodeURIComponent(nickname)}`;
});