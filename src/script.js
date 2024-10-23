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
    
    var lightness = +0;

    var lighterRed = Math.max(0, Math.min(255, redDec + lightness));
    var lighterGreen = Math.max(0, Math.min(255, greenDec + lightness));
    var lighterBlue = Math.max(0, Math.min(255, blueDec + lightness));

    // Convert to hex and ensure two characters
    var lightHex = "#" +
        lighterRed.toString(16).padStart(2, '0') +
        lighterGreen.toString(16).padStart(2, '0') +
        lighterBlue.toString(16).padStart(2, '0');

    document.body.style.backgroundColor = lightHex;
});
