/*!
 * CodePrinter (https://github.com/jaredpetersen/codeprinter)
 * Copyright (c) 2015 Jared Petersen
 * Licensed under MIT (https://github.com/jaredpetersen/codeprinter/blob/master/LICENSE)
 */

// Global variables
var textSpace = document.getElementById('typeSpace');
var printSpace = document.getElementById('printSpace');

/**
 * Takes the data in the text box and formats it for printing on the page
 */
function overallPrint()
{
    if (textSpace.value != "")
    {
        // Reset the print space
        printSpace.innerHTML = "";

        // Get the code
        var text = textSpace.value;

        // Sanitize the text
        text = text.replace(/'/g, "&#39;");
        text = text.replace(/"/g, "&#34;");
        text = text.replace(/</g, "&#60;");
        text = text.replace(/>/g, "&#62;");

        // Print the text
        printSpace.innerHTML = printSpace.innerHTML + text;
    }

    // Open the print window
    window.print()
}
