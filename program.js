function keyPressed(event)
{
    var textSpace = document.getElementById('typeSpace');
    var printSpace = document.getElementById('printSpace');

    // Reset the print space
    printSpace.innerHTML = "";

    // Get the code
    var text = textSpace.value;

    // Get the number of characters minus the newlines
    // The newlines will set our character width calculations off
    var characterNoNew = text.replace(/\r?\n|\r/,"").length;
    var characterNew = text.match(/\n/g).length;
    var characterTotal = characterNoNew + (characterNew * 104);

    // Max number of characters allowed per line is 104
    // Split the code into lines
    var textArray = text.match(/[^\r\n]+/g);
    console.log(textArray);

    for (i = 0; i <= textArray.length; i++)
    {
        // Output one line of code
        printSpace.innerHTML = printSpace.innerHTML + textArray[i] + "\n";

        // Number of lines per page is 53
        if (i % 53 == 0 && i != 0)
        {
            // New page
            printSpace.innerHTML = printSpace.innerHTML + "\n\n\n\n";
        }
    }

    console.log(characterTotal);

    // Put the data in the print space for printing
    //printSpace.innerHTML = text;

}

function countLines()
{
    var textSpace = document.getElementById('typeSpace');
    return textSpace.value.split(/\r\n|\n\r|\n|\r/g).length;
}
