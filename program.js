// Global variables
var lineCount = 0;
var pageLength = 63;
var lineLength = 80;

/**
 * Prints whatever text is given to it
 * @param {Event} event The keydown event from inputting data into the text box
 */
function keyPressed(event)
{
    // Take the input text box code and set it up for printing out.
    printInput();
}

/**
 * Takes the data in the text box and formats it for printing on the page
 */
function printInput()
{
    var textSpace = document.getElementById('typeSpace');
    var printSpace = document.getElementById('printSpace');

    // Reset the print space
    printSpace.innerHTML = "";

    // Get the code
    var text = textSpace.value;

    // Seperate the input text into words
    var textArray = text.match(/([^\s]+\n*|\n+)/g);

    // Set up the line, line counter, and top margin
    printLine("111111111\n");
    var newLine = "";
    lineCount = 1;

    // Output lines of code in the printSpace
    for (i = 0; i < textArray.length; i++)
    {
        // Get the next word for the line
        if (newLine == "")
        {
            newLine = newLine + textArray[i];
        }
        else
        {
            newLine = newLine + " " + textArray[i];
        }

        // Regular expression used to find single newline characters
        var singleMatch = newLine.match(/\r|\n/);

        console.log("Linecount= " + lineCount + " ;; Line= " + newLine + " ;; length= " + newLine.length);

        // Line length is the right size or has a newline at the end
        if (newLine.length == lineLength || ((newLine.length <= lineLength) && (singleMatch != null)))
        {
            console.log("cowabunga " + newLine.length);
            console.log(singleMatch);
            // Check if the new line has a newline character
            if (!singleMatch)
            {
                // Does not have a newline, add one
                newLine = newLine + "\n";
            }

            // Print the new line
            printLine(newLine);

            var multipleMatch = newLine.match(/\n*$/);

            // Reset the line counter
            if (multipleMatch)
            {
                // Have to take the newlines into account for the lineCount
                lineCount = lineCount + (newLine.match(/\n/g) || []).length;
            }
            else
            {
                // Nothing fancy, just add a single line
                lineCount++;
            }

            // Reset the line variable
            newLine = "";
        }
        // Line length is larger
        else if (newLine.length > lineLength)
        {
            // Line is too long, backtrack one word
            console.log("Bit too big " + newLine + "; Lenght: " + newLine.length);
            newLine = newLine.substring(0, newLine.length - textArray[i].length);
            console.log("------LINE TOO BIG FIRST= " + newLine + " ;; Length=" + newLine.length);
            // Make sure the line isn't too big still (cases where the word is
            // longer than the actual line length)
            if (newLine.length > lineLength)
            {
                lineTooBig(newLine);
            }
            else
            {
                // Good to go, just added too many words
                printLine(newLine + "\n");

            }

            // Increment the line counter
            lineCount++;

            // Put the overflow into the next line
            // Don't worry about printing it, that will be handeled on the next
            // pass through
            newLine = textArray[i];
            console.log("juju: " + textArray[i])
        }

        // New page
        console.log("special: " + printSpace.innerHTML.substring(printSpace.innerHTML.length - 2, printSpace.innerHTML.length))

        if (lineCount == pageLength ||
            (lineCount > pageLength) &&
                (printSpace.innerHTML
                    .substring(printSpace.innerHTML.length - 2,
                               printSpace.innerHTML.length)
                    .match(/\r|\n/)))
        {
            // Print the necessary newline character to space out the new
            // page lines
            printSpace.innerHTML = printSpace.innerHTML + "111111111\n222222222\n333333333\n444444444\n";
            // Reset the page counter
            lineCount = 1;
            console.log("=================================================");
            console.log("New Page")
            console.log("=================================================");
        }
    }
    // Print the last line
    printLine(newLine);
}

/**
 * Prints whatever text is given to it
 * @param {String} text The text to be printed
 */
function printLine(text)
{
    var printSpace = document.getElementById('printSpace');
    console.log(lineCount + ": " + text + " ;; " + text.length);
    printSpace.innerHTML = printSpace.innerHTML + text;
}

/**
 * Prints words that are too big for a single line
 * @param {String} newLine The text to be printed
 */
function lineTooBig(newLine)
{
    if (newLine.length > 80)
    {
        // Only print out part of the newline
        printLine(newLine.substring(0, 80) + "\n");
        console.log("Linecount=" + lineCount + " ------LINE TOO BIG=" + newLine.substring(0, 80));
        // Increment the lineCounter
        //lineCount++;
        // Reset the newline
        newLine = newLine.replace(newLine.substring(0, 80), "");
        console.log("--------TOO BIG NEWLINE=" + newLine)
        // Re-call the method to make sure that the line doesn't need to be
        // broken down any further
        lineTooBig(newLine);
    }
    else
    {
        console.log("--------TOO BIG PRINTED=" + newLine)
        // Good size, good to go
        printLine(newLine);
    }
}
