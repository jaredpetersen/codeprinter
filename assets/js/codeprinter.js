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
var themes = ["None", "GitHub", "VS", "XCode"];
var currentTheme = "None";
var stylesheetCount = 4;

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

        // Highlight the code
        text = highlightCode(text);

        // Print the text
        printSpace.innerHTML = text;
    }
    else
    {
        printSpace.value = "Hello, and welcome to CodePrinter!<br />This is where your code will be printed out to!";
    }

    // Open the print window
    window.print()
}

/**
 * Takes in a font and changes the printout font to match
 @param String The font the user wants
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
 * @param String The font size the user wants
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

/**
 * Takes in a language and changes the currentLanguage global variable
 * @param String The language the user wants
 **/
function setTheme(theme)
{
    // Set the language to the user selected language
    currentTheme = theme;
    // Reset the navbar menu item highlighting
    for (i in themes)
    {
        // Remove all highlighting
        document.getElementById(themes[i]).className="";
    }
    document.getElementById(theme).className="selected";
}

/**
 * Takes in code and outputs the highlighted version
 * @param String The code the user wants to print
 **/
function highlightCode(code)
{
    // The main language switchboard
    // Keeping it seperate for when the program grows to support more themes
    if (currentTheme != "None")
    {
        // Change the theme depending on the user selection
        for (i = 2; i <= stylesheetCount; i++)
        {
            if (currentTheme == "GitHub" && i == 2)
            {
                document.styleSheets[i].disabled=false;
            }
            else if (currentTheme == "VS" && i == 3)
            {
                document.styleSheets[i].disabled=false;
            }
            else if (currentTheme == "XCode" && i == 4)
            {
                document.styleSheets[i].disabled=false;
            }
            else
            {
                document.styleSheets[i].disabled=true;

            }
        }

        // Use Highlight.js to highlight the code
        // highlightAuto() detects the language on its own
        // If it can't find the language, the code is still returned but not
        // highlighted
        code = hljs.highlightAuto(code).value;
    }
    else
    {
        // Disable all syntax highlighting stylesheets
        for (i = 2; i <= stylesheetCount; i++)
        {
            document.styleSheets[i].disabled=true;
        }

        // Not using code highlighting, so we need to do more sanitation
        code = code.replace(/</g, "&#60;");
        code = code.replace(/>/g, "&#62;");
    }

    return code;
}
