// Global variables
var textSpace = document.getElementById('typeSpace');
var printSpace = document.getElementById('printSpace');
var lineCount = 0;
// On line 64, print the new page newlines
var pageLength = 64;
var lineLength = 80;
var newLine = "";

/**
 * Prints whatever text is given to it
 * @param {Event} event The keydown event from inputting data into the text box
 */
function keyPressed(event)
{
    // Prevent printing an empty string
    if (textSpace.value != "")
    {
        // Take the input text box code and set it up for printing out.
        printInput();
    }
}

/**
 * Takes the data in the text box and formats it for printing on the page
 */
function printInput()
{
    // Reset the print space
    printSpace.innerHTML = "";
    // Get the code
    var text = textSpace.value;
    // Seperate the input text into words
    //var textArray = text.match(/([^\s]+\n*|\n+)/g);
    //var textArray = text.match(/([^\s]+\n*|\s[\s]+|\n+)/g);
    var textArray = text.match(/([^\s]+\n*)|\s[\s]+\n|(\s[\s]+)|(\n+)/g);

    // Set up the line, line counter, and top margin
    printSpace.innerHTML = printSpace.innerHTML + "11111\n22222\n";
    newLine = "";
    lineCount = 2;

    // Output lines of code in the printSpace
    for (i = 0; i < textArray.length; i++)
    {
        // Get the next word for the line
        if (newLine == "")
        {
            newLine = textArray[i];
        }
        else
        {
            newLine = newLine + " " + textArray[i];
        }

        // Regular expression used to find single newline characters
        var singleMatch = newLine.match(/\n/g);

        // Line length is the right size or has a newline at the end
        if (newLine.length == lineLength ||
            ((newLine.length <= lineLength) && (singleMatch != null)))
        {
            // Check if the line has a newline character
            if (!singleMatch)
            {
                // Does not have a newline, add one
                newLine = newLine + "11111\n";
            }
            // Print the new line
            printLine(newLine);

            // Reset the line variable
            newLine = "";
        }

        // Line length is larger than what is allowed for a page
        else if (newLine.length > lineLength)
        {
            // Line is too long, backtrack one word
            var backtrackWord = newLine.length - textArray[i].length - 1;
            newLine = newLine.substring(0, backtrackWord);

            // Make sure the line isn't too big still (cases where the word is
            // longer than the actual line length)
            if (newLine.length > lineLength)
            {
                lineTooBig(newLine);

                // Get the line ready for the next iteration
                if (newLine.match(/\n/g))
                {
                    printLine(newLine);
                    newLine = textArray[i];
                }
                else
                {
                    newLine = newLine + " " + textArray[i];
                }

            }
            else
            {
                // Good to go, just added too many words
                if (newLine.match(/\n/g) == null)
                {
                    // Does not have a newline character, add one
                    newLine = newLine + "\n";
                }

                // Print the line
                printLine(newLine);

                // Get the line ready for the next iteration
                newLine = textArray[i];

                // Take the line and make sure that that's not the end
                if (newLine.match(/\n/g))
                {
                    // End of that line sequence
                    // Print it and start a new one
                    printLine(newLine);
                    newLine = "";
                }
            }
        }
    }

    // Print the last line
    printLine(newLine);
}

/**
 * Prints words that are too big for a single line
 * @param {String} newLine The text to be printed
 */
function lineTooBig(text)
{
    if (text.length > lineLength)
    {
        // Print the part of the line that fits
        printLine(text.substring(0, lineLength) + "\n");

        // Remove the section that was already printed
        text = text.replace(text.substring(0, lineLength), "");

        // Re-call the method to make sure that the line doesn't need to be
        // broken down any further
        lineTooBig(text);
    }
    else
    {
        // Assign the leftover text to newLine so that it can be printed
        // properly
        newLine = text;
    }
}

/**
 * Prints whatever text is given to it
 * @param {String} text The text to be printed
 */
 function printLine(text)
 {
    console.log(text);
    // Increment the line counter per the number of newline characters
    var newLineCount = (text.match(/\n/g) || []).length;
    console.log("newlinecount: " + newLineCount);
    lineCount = lineCount + newLineCount;
    console.log("lineCount: " + lineCount);

    // Sanitize the text
    text = text.replace(/'/g, "&#39;");
    text = text.replace(/"/g, "&#34;");
    text = text.replace(/</g, "&#60;");
    text = text.replace(/>/g, "&#62;");

    // Variables used for tracking the line length
    // Number of lines left
    var deficit = pageLength - lineCount + 1;
    var deficitCount = (printSpace.innerHTML
        .substring(printSpace.innerHTML.length - deficit,
                   printSpace.innerHTML.length)
        .match(/\n/g) || []).length;

    // Used to track a special case in which there is a line of text at the
    // very end with multiple newlines after it
    // We're using this marker instead because the if statement is pretty long
    var specialMark = false;

    console.log("deficit: " + deficit);
    console.log("deficitCount: " + deficitCount);
    if (text.substring(0, text.length - deficitCount).match(/\n/g) &&
        (lineCount == pageLength) &&
        (deficitCount == deficit))
    {
        console.log("special");
        // It's the special case
        specialMark = true;
    }

    // Check if a new page should be added
    if (lineCount == pageLength ||
        (lineCount > pageLength &&
            (printSpace.innerHTML
                .substring(printSpace.innerHTML.length - 1,
                           printSpace.innerHTML.length)
                .match(/\n/))))
    {
        // A new page should be added

        // If this special case, print out the text first
        if (specialMark)
        {
            printSpace.innerHTML = printSpace.innerHTML + text;
            printSpace.innerHTML = printSpace.innerHTML.substring(0,
                printSpace.innerHTML.length - deficit);
            console.log("specialMark");
        }

        // Print the necessary newline character to space out the new
        // page lines
        printSpace.innerHTML = printSpace.innerHTML + "11111\n22222\n33333\n444444\n";

        // Reset the page counter
        lineCount = 3;

        // If this is the special case, print out the necessary newlines
        if (specialMark)
        {
            printSpace.innerHTML = printSpace.innerHTML + "\n";
        }
    }

    // If it's not the special case, just print out the text
    if (!specialMark)
    {
        printSpace.innerHTML = printSpace.innerHTML + text;
    }

    console.log(lineCount + ": " + text);
}
