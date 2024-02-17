function copyText(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        var text = elements[i].innerText;
        text = text.replace(/\bCopy\b/g, ""); // Removes "Copy" word
        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = text;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        alert("Text copied: " + text);
    }
}

function copyAll() {
    var elements = document.getElementsByClassName('copy-container');
    var textToCopy = "";
    for (var i = 0; i < elements.length; i++) {
        var text = elements[i].innerText;
        text = text.replace(/\bCopy\b/g, ""); // Removes "Copy" word
        text = text.replace(/\bAll\b/g, ""); // Removes "All" word
        textToCopy += text + "\n";
    }
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Text copied: " + textToCopy);
}