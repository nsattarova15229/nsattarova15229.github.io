// Get the nickname from the URL
const urlParams = new URLSearchParams(window.location.search);
const nickname = urlParams.get('nickname');

// Get the current hour
const currentHour = new Date().getHours();

// Determine the greeting based on the time of day and its color
let greeting;
let greetingColor;
if (currentHour >= 5 && currentHour < 12) {
  greeting = 'Good Morning';
  greetingColor = '#efdd6e'; // Morning color
} else if (currentHour >= 12 && currentHour < 17) {
  greeting = 'Good Afternoon';
  greetingColor = '#5a94f2'; // Afternoon color
} else if (currentHour >= 17 && currentHour < 21) {
  greeting = 'Good Evening';
  greetingColor = '#ff9326'; // Evening color
} else {
  greeting = 'Omg... It is so late';
  greetingColor = '#335e9e'; // Late night color
}

// Update the welcome message dynamically
const welcomeMessage = document.getElementById('welcome-message');
if (nickname) {
  welcomeMessage.innerHTML = `
    <span style="color: ${greetingColor};">${greeting}</span>, ${nickname}! Welcome to the Main Page!
  `;
} else {
  welcomeMessage.textContent = 'Welcome to the Main Page!'; // Fallback if no nickname
}
