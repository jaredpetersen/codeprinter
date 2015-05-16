// Global variables
var textSpace = document.getElementById('typeSpace');
var printSpace = document.getElementById('printSpace');

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

    // Sanitize the text
    text = text.replace(/'/g, "&#39;");
    text = text.replace(/"/g, "&#34;");
    text = text.replace(/</g, "&#60;");
    text = text.replace(/>/g, "&#62;");

    // Print the text
    printSpace.innerHTML = printSpace.innerHTML + text;
}
