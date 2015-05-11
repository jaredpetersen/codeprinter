function keyPressed(event)
{
    var textSpace = document.getElementById('typeSpace');
    var printSpace = document.getElementById('printSpace');

    // Reset the print space
    printSpace.innerHTML = "";

    // Get the code
    var text = textSpace.value;

    // Max number of characters allowed per line is 104

    var textArray = text.split(" ");
    console.log(textArray);
    var newLine = "";
    var lineCount = 0;

    // Output lines of code in the printSpace
    for (i = 0; i < textArray.length; i++)
    {
        newLine = newLine + " " + textArray[i];
        //console.log(newLine.length + ": " + newLine);

        if (newLine.length > 104)
        {
            // Line is too long, backtrack
            newLine = newLine.substring(0, newLine.length - textArray[i].length);
            console.log(newLine.length + ": " + newLine);

            // Print the line
            printLine(newLine);
            lineCount++;

            // Put the item into the next line
            newLine = "";
            newLine = newLine + textArray[i];
            console.log(newLine.length + ": " + newLine);
        }

        else if (newLine.length == 104)
        {
            // Print the line
            printLine(newLine);
            lineCount++;
        }



        // Number of lines per page is 53
        if (lineCount % 53 == 0 && lineCount != 0)
        {
            // New page
            printSpace.innerHTML = printSpace.innerHTML + "\n\n\n\n";
        }
    }

    // Print the line
    printLine(newLine);

}

function printLine(text)
{
    var printSpace = document.getElementById('printSpace');
    printSpace.innerHTML = printSpace.innerHTML + text + "\n";
}

function printMultiLine(text)
{
    if (text.length > 104)
    {
        var wordArray = text.split(/" "|\r\n|\n\r|\n|\r/g);
        console.log(wordArray);
        var newLine = "";

        for (i = 0; i < wordArray.length; i++)
        {
            newLine = newLine + " " + wordArray[i];
            console.log(newLine.length + ": " + newLine);

            if (newLine.length > 104)
            {
                // Line is too long, backtrack
                newLine = newLine.substring(0, newLine.length - wordArray[i].length);
                console.log(newLine.length + ": " + newLine);

                // Print the line
                printLine(newLine);

                // Put the item into the next line
                newLine = "";
                newLine = newLine + wordArray[i];
                console.log(newLine.length + ": " + newLine);
            }

            else if (newLine.length == 104)
            {
                // Print the line
                printLine(newLine);
            }

        }

        // Print the line
        printLine(newLine);

    }
    else
    {
        // Print a single line
        printLine(text);
    }
}
