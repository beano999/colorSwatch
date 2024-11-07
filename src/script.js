/*
Ben Wartman | ColorSwatch | 11/7/2024 | script.js
*/


//This entire script is a work in progress and will be updated as the project progresses... 
//Right now I know it is a mess, my next few commits will be to resolve this and make it more readable and efficient.

// Ensure the page is fully loaded before running the effects
document.addEventListener("DOMContentLoaded", function() {
    setInterval(setEffectsRandomColor, 1000); // Set the buttons & text to a random color every second
    typeMessage(); // Start typing the message after the page has loaded
});

document.getElementById("submit").addEventListener("click", function() {
    var inputHex = document.getElementById("hex").value;

    // Validate input
    if (inputHex[0] !== "#") {
        inputHex = "#" + inputHex;
    }
    else if (inputHex.length !== 7) {
        alert("Invalid input. Please enter a hex code.");
        return;
    }

    var red = inputHex.substring(1, 3);
    var green = inputHex.substring(3, 5);
    var blue = inputHex.substring(5, 7);
    
    var redDec = parseInt(red, 16);
    var greenDec = parseInt(green, 16);
    var blueDec = parseInt(blue, 16);
/* this is to test the color change for lightness it sorta works i think */
    var lightness = 200;
    var darkness = -200;

    var lighterRed = Math.max(0, Math.min(255, redDec + lightness));
    var lighterGreen = Math.max(0, Math.min(255, greenDec + lightness));
    var lighterBlue = Math.max(0, Math.min(255, blueDec + lightness));

    var darkerRed = Math.max(0, Math.min(255, redDec + darkness));
    var darkerGreen = Math.max(0, Math.min(255, greenDec + darkness));
    var darkerBlue = Math.max(0, Math.min(255, blueDec + darkness));



    // Convert to hex and ensure only two characters
    var finalOutputLight = "#" +
        lighterRed.toString(16).padStart(2, '0') +
        lighterGreen.toString(16).padStart(2, '0') +
        lighterBlue.toString(16).padStart(2, '0');

    var finalOutputDark = "#" +
        darkerRed.toString(16).padStart(2, '0') +
        darkerGreen.toString(16).padStart(2, '0') +
        darkerBlue.toString(16).padStart(2, '0');

    // Convert to hex and ensure two characters (this isnt really a needed calc and might be removed later)
    var finalOutput = "#" +
        redDec.toString(16).padStart(2, '0') +
        greenDec.toString(16).padStart(2, '0') +
        blueDec.toString(16).padStart(2, '0');

        // Set the background color of the div holding the text and generate a lighter version of that color
        // text colors are swapped for readability

    document.getElementById("color-0").style.backgroundColor = finalOutput;
    document.getElementById("textColor-0").style.color = finalOutputLight;
    document.getElementById("textColor-0").innerText = finalOutput;

    document.getElementById("color-1").style.backgroundColor = finalOutputLight;
    document.getElementById("textColor-1").style.color = finalOutput;
    document.getElementById("textColor-1").innerText = finalOutputLight;

    document.getElementById("color-2").style.backgroundColor = finalOutputDark;
    document.getElementById("textColor-2").style.color = finalOutput;
    document.getElementById("textColor-2").innerText = finalOutputDark;

    /* this is to see if the input color is being read into the script correctly
    console.log(finalOutput);
    */

});

//set getstarted button to random color every second
function setEffectsRandomColor() {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.getElementById("getStarted").style.backgroundColor = randomColor;
    document.getElementById("openingPrompt").style.color = randomColor;
    
    //console.log(document.getElementById("getStarted").backgroundColor); (for testing)
}

// Function to simulate typing effect
function typeMessage() {
    const landingMessage = "Welcome to ColorSwatch! Discover your perfect color palette.";
    const aboutMessage = "ColorSwatch is a tool that helps you find the perfect color palette for your projects using our algorithmic take on color theory. Jump in and get Started!";
    let index = 0;
    const speed = 50; // Speed of typing (in milliseconds)
    
    // Declare variables outside of the conditional blocks
    let message = "";
    let typedElement = "";

    // Determine which message to type based on the page and get the element to type it in
    if (window.location.pathname.endsWith("/index.html")) {
        message = landingMessage;
        typedElement = document.getElementById("openingPrompt");
    }
    else if (window.location.pathname.endsWith("/about.html")) {
        message = aboutMessage;
        typedElement = document.getElementById("aboutPrompt");
    }
    else {
        message = "404 Error: Message not found.";
        typedElement = document.getElementById("openingPrompt"); // Default to "openingPrompt"
    }

    // Check if the typedElement exists to avoid errors
    if (typedElement) {
        // Function to type the message one letter at a time
        function typingEffect() {
            if (index < message.length) {
                typedElement.textContent += message.charAt(index); // Append the next character
                index++;
                setTimeout(typingEffect, speed); // Call itself with a delay to create the typing effect
            }
        }

        typingEffect(); // Start the typing effect
    } else {
        console.error("No element found to display the message.");
    }
}

