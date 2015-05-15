// Global variables
var textSpace = document.getElementById('typeSpace');
var printSpace = document.getElementById('printSpace');
var lineCount = 0;
// On line 63, start printing the new page newlines
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
    printSpace.innerHTML = printSpace.innerHTML + "111111111\n222222222\n";

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
        var singleMatch = newLine.match(/\r|\n/g);

        // Line length is the right size or has a newline at the end
        if (newLine.length == lineLength || ((newLine.length <= lineLength) && (singleMatch != null)))
        {
            console.log(singleMatch);
            // Check if the line has a newline character
            if (!singleMatch)
            {
                // Does not have a newline, add one
                newLine = newLine + "\n";
            }
            console.log("printy");
            // Print the new line
            printLine(newLine);

            // Increment the line counter
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
            console.log("toobig: " + newLine);
            // Line is too long, backtrack one word
            newLine = newLine.substring(0, newLine.length - textArray[i].length - 1);
            console.log(newLine);
            console.log(newLine.length);
            console.log(lineCount);

            // Make sure the line isn't too big still (cases where the word is
            // longer than the actual line length)
            if (newLine.length > lineLength)
            {
                lineTooBig(newLine);

                // Get the line ready for the next iteration
                if (newLine.match(/\r|\n/g))
                {
                    lineCount++;
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
                console.log(newLine.match(/\n/g));
                // Good to go, just added too many words
                if (newLine.match(/\n/g) == null)
                {
                    // Does not have a newline character, add one
                    console.log("match");
                    console.log(lineCount);
                    console.log(newLine);
                    newLine = newLine + "\n";
                }

                // Print the line
                printLine(newLine);

                // Get the line ready for the next iteration
                newLine = textArray[i];
                console.log("fresh: " + newLine);

                // Take the line and make sure that that's not the end
                if (newLine.match(/\n/g))
                {
                    console.log("secondmatch")
                    // End of that line sequence
                    // Print it and start a new one
                    lineCount++;
                    printLine(newLine);
                    console.log((newLine.match(/\n/g) || []).length - 1);
                    lineCount = lineCount + (newLine.match(/\n/g) || []).length - 1;
                    //lineCount = lineCount + (newLine.match(/\n/g) || []).length;
                    newLine = "";
                }
            }

            // Increment the line counter
            // At least one line was added here, so take care of the initial
            // line
            lineCount++;
        }
    }
    // Print the last line
    printLine(newLine);
}

/**
 * Prints whatever text is given to it
 * @param {String} text The text to be printed
 */
/*function printLine(text)
{
    // Check if a new page should be added
    if (checkPage())
    {
        // Add a new page

        // Print the necessary newline character to space out the new
        // page lines
        printSpace.innerHTML = printSpace.innerHTML + "111111111\n222222222\n333333333\n444444444\n";
        // Reset the page counter
        lineCount = 1;
        console.log("=================================================");
        console.log("New Page")
        console.log("=================================================");
    }

    console.log(lineCount + ": " + text);
    printSpace.innerHTML = printSpace.innerHTML + text;
}*/

/**
 * Prints whatever text is given to it
 * @param {String} text The text to be printed
 */
 function printLine(text)
 {
    var deficit = pageLength - lineCount + 1;
    console.log("deficit: " + deficit);
    var stringy = printSpace.innerHTML.substring(printSpace.innerHTML.length - deficit,
        printSpace.innerHTML.length);
    console.log("stringy: " + stringy);
    var deficitcount = (stringy.match(/\r|\n/g) || []).length;
    console.log("deficitcount: " + deficitcount);


     //console.log(lineCount);
     // Check if a new page should be added
     if (lineCount == pageLength ||
         (lineCount > pageLength &&
             (printSpace.innerHTML
                 .substring(printSpace.innerHTML.length - 1,
                            printSpace.innerHTML.length)
                 .match(/\r|\n/)
             )
         ) ||
         (lineCount < pageLength &&
            ((printSpace.innerHTML
                .substring(printSpace.innerHTML.length - deficit,
                           printSpace.innerHTML.length)
                .match(/\r|\n/g) || []).length == deficit
            )
         )
        )
     {
         // A new page should be added
         /*if (lineCount < pageLength && deficit == deficitcount)
         {
             printSpace.innerHTML = printSpace.innerHTML.substring(0, printSpace.innerHTML.length - deficit);
         }*/

         // Add a new page

         // Print the necessary newline character to space out the new
         // page lines
         printSpace.innerHTML = printSpace.innerHTML + "111111111\n222222222\n333333333\n444444444\n";
         // Reset the page counter
         lineCount = 1;
         console.log("=================================================");
         console.log("New Page")
         console.log("=================================================");
     }

     //else
     //{
         console.log(lineCount + ": " + text);
         printSpace.innerHTML = printSpace.innerHTML + text;
     //}
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
        //console.log("return: " + newLine);
    }
}
