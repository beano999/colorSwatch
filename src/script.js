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

    var lighterRed = Math.max(0, Math.min(255, redDec + lightness));
    var lighterGreen = Math.max(0, Math.min(255, greenDec + lightness));
    var lighterBlue = Math.max(0, Math.min(255, blueDec + lightness));



    // Convert to hex and ensure only two characters
    var finalOutputLight = "#" +
        lighterRed.toString(16).padStart(2, '0') +
        lighterGreen.toString(16).padStart(2, '0') +
        lighterBlue.toString(16).padStart(2, '0');

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

    /* this is to see if the input color is being read into the script correctly
    console.log(finalOutput);
    */

});
