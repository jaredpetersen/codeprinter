/*!
 * CodePrinter (https://github.com/jaredpetersen/codeprinter)
 * Copyright (c) 2015 Jared Petersen
 * Licensed under MIT (https://github.com/jaredpetersen/codeprinter/blob/master/LICENSE)
 */

// Global variables
var textSpace = document.getElementById('typeSpace');
var printSpace = document.getElementById('printSpace');
var fonts = ["Andale Mono", "Courier", "Droid Sans Mono", "Ubuntu Mono"];
var fontSizes = ["8px", "9px", "10px", "11px", "12px", "13px", "14px","15px",
                 "16px"];
var languages = ["None", "Java", "Python"];


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

/**
 * Takes in a font and changes the printout font to match
 @param String the font the user wants
 **/
function changeFont(font)
{
    // Change the font family
    printSpace.style.fontFamily = font;
    textSpace.style.fontFamily = font;
    // Reset the navbar menu item highlighting
    for (i in fonts)
    {
        // Remove all highlighting
        document.getElementById(fonts[i]).className="";
    }
    // Highlight the desired item
    document.getElementById(font).className="selected";
}

/**
 * Takes in a font size and changes the printout font to match
 **/
function changeSize(size)
{
    // Change the font size
    printSpace.style.fontSize = size;
    textSpace.style.fontSize = size;
    // Reset the navbar menu item highlighting
    for (i in fontSizes)
    {
        // Remove all highlighting
        document.getElementById(fontSizes[i]).className="";
    }
    document.getElementById(size).className="selected";

}
