console.log("This is disco light-bar");
let boxes = [];
let stop = false; // Flag to indicate whether to stop color changing

function GetRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`;
}

function changeColors() {
    if (!stop) {
        let lastColor = null;
        boxes.forEach(box => {
            let newColor = GetRandomColor();
            while (newColor === lastColor) {
                newColor = GetRandomColor();
            }
            box.style.transition = "background-color 0.5s ease"; // Add transition effect
            box.style.backgroundColor = newColor;
            lastColor = newColor;
        });
    }
}

// Function to create and append boxes to the discolight container
function createBoxes() {
    const container = document.querySelector(".discolight");
    const numBoxesX = Math.floor(window.innerWidth / 30); // Adjust box size as needed
    const numBoxesY = Math.floor(window.innerHeight / 30); // Adjust box size as needed
    for (let i = 0; i < numBoxesY; i++) {
        for (let j = 0; j < numBoxesX; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            container.appendChild(box);
            boxes.push(box);
        }
    }
}

// Call the function to create boxes initially
createBoxes();

// Call the function to change colors initially
changeColors();

// Set interval to change colors every 1000 milliseconds (1 second)
const intervalId = setInterval(changeColors, 1000);

// Stop button functionality
const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', () => {
    stop = !stop;
    stopButton.textContent = stop ? 'Start' : 'Stop';
    stopButton.classList.toggle('active'); // Add active class for styling and visual feedback
});

// Update boxes on window resize for responsiveness
window.addEventListener('resize', () => {
    // Remove existing boxes
    boxes.forEach(box => box.remove());
    boxes = [];
    // Recreate boxes to fit the new window size
    createBoxes();
    // Update colors
    changeColors();
});
