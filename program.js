function keyPressed(event)
{
    var textSpace = document.getElementById('typeSpace');
    var printSpace = document.getElementById('printSpace');
    printSpace.innerHTML = "";
    var regEx = /\r\n|\n\r|\n|\r/g;
    var textArray = textSpace.value.replace(regEx,"\n").split("\n");
    var lineCount = 0;
    var lineBlock = 53;

    console.log(textArray);

    for (i = 0; i <= textArray.length; i++)
    {
        var printSpace = document.getElementById("printSpace");

        if (lineCount >= lineBlock)
        {
            lineCount = 0;
            lineBlock = lineBlock;
            printSpace.innerHTML = printSpace.innerHTML + '\n\n\n\n\n\n';
        }

        printSpace.innerHTML = printSpace.innerHTML + '\n' + textArray[i];

        lineCount = lineCount + 1;
    }

    //printSpace.innerHTML = textSpace.value;
    //console.log(textSpace.value);
}

function countLines()
{
    var textSpace = document.getElementById('typeSpace');
    return textSpace.value.split(/\r\n|\n\r|\n|\r/g).length;
}
