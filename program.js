function keyPressed(event)
{
    var textSpace = document.getElementById('typeSpace');
    var printSpace = document.getElementById('printSpace');

    // Reset the print space
    printSpace.innerHTML = "";

    // Get the code
    var text = textSpace.value;

    // Seperate the input text into words
    var textArray = text.match(/([^\s]+\n*|\n+)/g);
    console.log(textArray);

    // Set up the line, line counter, and top margin
    printLine("\n");
    var newLine = "";
    var lineCount = 1;

    // Output lines of code in the printSpace
    for (i = 0; i < textArray.length; i++)
    {
        console.log(textArray[i]);
        // Get the next word for the line
        if (newLine == "")
        {
            newLine = newLine + textArray[i];
        }
        else
        {
            newLine = newLine + " " + textArray[i];
        }

        var singleMatch = newLine.match(/\r|\n/);
        var doubleMatch = newLine.match(/\r\r|\n\n/);

        if (newLine.length == 80 || singleMatch)
        {
            // Print the line
            if (singleMatch)
            {
                // Already has a newline character
                printLine(newLine);
            }
            else
            {
                // Does not have a newline, add one
                printLine(newLine + "\n");
            }

            console.log(lineCount + " : " + newLine + " : " + newLine.length);

            //console.log((newLine.match(/\n*$/) || []).length + " ---- " + newLine.match(/\n*$/));


            var matchy = newLine.match(/\n*$/);
            // Reset the line
            if (matchy)
            {
                //console.log(matchy);
                //console.log((newLine.match(/\n/g) || []).length);
                lineCount = lineCount + (newLine.match(/\n/g) || []).length;
            }
            else
            {
                lineCount++;
            }
            newLine = "";
        }
        else if (newLine.length > 80)
        {
            console.log("before: " + lineCount + " : " + newLine + " : " + newLine.length);
            // Line is too long, backtrack
            newLine = newLine.substring(0, newLine.length - textArray[i].length);

            // Print the line
            printLine(newLine);

            console.log("after: " + lineCount + " : " + newLine + " : " + newLine.length);

            // Reset the line
            newLine = "";

            // Put the overflow item into the next line
            newLine = newLine + textArray[i];
            lineCount++;


            // TODO Need to find a way to deal with items that are longer
            // than the width but can't be broken up in a clear way.

            /*if (newLine.length > 80)
            {
                console.log(newLine.length);
                // Line is longer than the allotted line length
                while (newLine.length > 80)
                {
                    console.log(newLine.substring(0, 80));
                    printLine(newLine.substring(0, 80))
                    newLine = newLine.replace(newLine.substring(0, 80), "");
                    lineCount++;
                }

            }*/
        }

        // Number of lines per page is 53
        if (lineCount % 63 == 0 && lineCount != 1)
        {
            // New page
            //console.log(printSpace.innerHTML + "\n");
            printSpace.innerHTML = printSpace.innerHTML + "\n\n\n\n\n";
            lineCount = 1;
        }
    }

    // Print the line
    printLine(newLine);

}

function printLine(text)
{
    var printSpace = document.getElementById('printSpace');
    printSpace.innerHTML = printSpace.innerHTML + text;
}
