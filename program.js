// Global variables
var textSpace = document.getElementById('typeSpace');
var printSpace = document.getElementById('printSpace');
var lineCount = 0;
var pageLength = 63;
var lineLength = 80;
var newLine = "";

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
    // Reset the print space
    printSpace.innerHTML = "";
    // Get the code
    var text = textSpace.value;
    // Seperate the input text into words
    var textArray = text.match(/([^\s]+\n*|\n+)/g);

    // Set up the line, line counter, and top margin
    printLine("111111111\n");
    newLine = "";
    lineCount = 1;

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
        var singleMatch = newLine.match(/\r|\n/g);

        // Line length is the right size or has a newline at the end
        if (newLine.length == lineLength || ((newLine.length <= lineLength) && (singleMatch != null)))
        {
            // Check if the line has a newline character
            if (!singleMatch)
            {
                // Does not have a newline, add one
                newLine = newLine + "\n";
            }

            // Print the new line
            printLine(newLine);

            // Reset the line counter
            if (singleMatch)
            {
                // Have to take the newlines into account for the lineCount
                lineCount = lineCount + (singleMatch || []).length;
            }
            else
            {
                // Nothing fancy, just add a single line
                lineCount++;
            }

            // Reset the line variable
            newLine = "";

        }

        // Line length is larger than what is allowed for a page
        else if (newLine.length > lineLength)
        {
            // Line is too long, backtrack one word
            newLine = newLine.substring(0, newLine.length - textArray[i].length - 1);
            console.log("toobig");
            console.log(newLine);
            console.log(newLine.length);

            // Make sure the line isn't too big still (cases where the word is
            // longer than the actual line length)
            if (newLine.length > lineLength)
            {
                console.log("tootoobig");
                lineTooBig(newLine);

                // Get the line ready for the next iteration
                console.log(newLine);
                if (newLine.match(/\r|\n/g))
                {
                    console.log("match");
                    lineCount++;
                    printLine(newLine);
                    newLine = textArray[i];
                    console.log(newLine);
                }
                else
                {
                    console.log("nomatch");
                    newLine = newLine + " " + textArray[i];
                    console.log(newLine);
                }
                //console.log(newLine);
                //console.log(textArray[i]);

            }
            else
            {
                console.log(newLine);
                console.log(newLine.substring(newLine.length - 2, newLine.length));
                console.log(newLine.match(/\n/g));
                // Good to go, just added too many words
                if (newLine.match(/\n/g) == null)
                {
                    // Don't add a newline character to a line that already has
                    // one
                    newLine = newLine + "\n";
                }
                printLine(newLine);
                // Get the line ready for the next iteration
                newLine = textArray[i];
            }

            // Increment the line counter
            // At least one line was added here, so take care of the initial
            // line
            lineCount++;
        }

        // New page
        // Make sure the lineCount is equal to the number of lines allowed per
        // page or make sure the lineCount is larger but has a newline character
        // The idea here is that if a page is larger but has a newline
        // character, backtracking isn't going to help us.
        if (lineCount == pageLength ||
            (lineCount > pageLength &&
                (printSpace.innerHTML
                    .substring(printSpace.innerHTML.length - 1,
                               printSpace.innerHTML.length)
                    .match(/\r|\n/))))
        {

            if (lineCount > pageLength)
            {
                // LineCount is larger than it should be for a page
                // Find the number of newline characters at the end of te line
                var numberNewLines = (printSpace.innerHTML.substring(printSpace.innerHTML.length - 1, printSpace.innerHTML.length).match(/\n/g) || []).length;
                console.log(numberNewLines);
                console.log("numbernewlinematch: " + (printSpace.innerHTML.substring(printSpace.innerHTML.length - 1, printSpace.innerHTML.length)));
                var currentText = printSpace.innerHTML;
                console.log(currentText.length);
                console.log(lineCount);

                printSpace.innerHTML = currentText.substring(0, currentText.length - numberNewLines);
            }

            // Print the necessary newline character to space out the new
            // page lines
            printLine("111111111\n222222222\n333333333\n444444444\n");
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
    console.log(lineCount + ": " + text);
    printSpace.innerHTML = printSpace.innerHTML + text;
}

/**
 * Prints words that are too big for a single line
 * @param {String} newLine The text to be printed
 */
function lineTooBig(text)
{
    console.log("tootoobiglength: " + text.length);
    if (text.length > lineLength)
    {
        // Print the part of the line that fits
        printLine(text.substring(0, lineLength) + "\n");

        // Remove the section that was already printed
        text = text.replace(text.substring(0, lineLength), "");

        console.log("text: " + text);

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
