// Append a new section
function appendNewSection(paragraphContent) {
    let newSection = document.createElement("section");
    newSection.classList.add("content");

    let newParagraph = document.createElement("p");
    newParagraph.textContent = paragraphContent;

    newSection.appendChild(newParagraph);

    document.querySelector("main").appendChild(newSection);
}

// Handle button for append new section
function handleButtonClick() {
    let paragraphContent = prompt("Enter the content for the new paragraph:");

    if (paragraphContent !== null && paragraphContent.trim() !== "") {
        appendNewSection(paragraphContent);
    }
}


// Function to change the background color of the header
function changeHeaderColor() {
    let header = document.querySelector('header');
    header.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to add a new section with a random background color
function addRandomSection() {
    let main = document.querySelector('main');

    // Create a new section
    let newSection = document.createElement('section');
    newSection.classList.add('content');

    // Set a random background color
    newSection.style.backgroundColor = getRandomColor();

    // Add content to the section
    newSection.innerHTML = '<h2>New Section</h2><p>This is a dynamically added section!</p>';

    // Append the new section to the main element
    main.appendChild(newSection);
}

// Function to change the text color of the footer
function changeFooterTextColor() {
    let footer = document.querySelector('footer');
    footer.style.color = getRandomColor();
}

// Function to reset all style changes
function resetStyles() {
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    let mainSections = document.querySelectorAll('main section');

    // Reset header and footer styles
    header.style.backgroundColor = 'aqua';
    footer.style.color = 'black';

    // Reset main section styles
    mainSections.forEach(section => {
        section.style.backgroundColor = 'white';
    });
}

// Example usage of the functions
document.addEventListener('DOMContentLoaded', function () {
    // Attach functions to buttons
    document.getElementById('changeHeaderColorBtn').addEventListener('click', changeHeaderColor);
    document.getElementById('addRandomSectionBtn').addEventListener('click', addRandomSection);
    document.getElementById('changeFooterTextColorBtn').addEventListener('click', changeFooterTextColor);
    document.getElementById('resetStylesBtn').addEventListener('click', resetStyles);
});
