// Get references to HTML elements
const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');
const outputDiv = document.getElementById('outputDiv');
const mouseTracker = document.getElementById('mouseTracker');
const coordinatesDiv = document.getElementById('coordinates');

// Function to handle the click event of the submit button
submitButton.addEventListener('click', function () {
    const name = nameInput.value.trim();
    if (name) {
        // Display a welcome message and change the background color to green
        outputDiv.textContent = `Welcome, ${name}!`;
        outputDiv.style.backgroundColor = 'green';
        outputDiv.style.color = 'white'; // Change text color to white for better visibility
    } else {
        // Display an error message if no name is entered
        outputDiv.textContent = 'Error: Please enter a name.';
        outputDiv.style.backgroundColor = 'white';
        outputDiv.style.color = 'red'; // Set error text color to red
    }
});

// Function to handle the mouse move event inside the mouseTracker area
mouseTracker.addEventListener('mousemove', function (event) {
    const x = event.clientX - mouseTracker.offsetLeft;
    const y = event.clientY - mouseTracker.offsetTop;
    coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});

// Function to handle the keyboard event for the "Enter" key
nameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Prevent the default form submission
        event.preventDefault();

        const name = nameInput.value.trim();
        if (name) {
            // Trigger the click event for the submit button if the name is not empty
            submitButton.click();
        } else {
            // Display an error message if no name is entered
            outputDiv.textContent = 'Error: Please enter a name.';
            outputDiv.style.backgroundColor = 'white';
            outputDiv.style.color = 'red'; // Set error text color to red
        }
    }
});
