// script.js
function addEmptyLines(count) {
    for (let i = 0; i < count; i++) {
        const emptyLine = document.createElement('div');
        emptyLine.className = 'empty-line'; // Optionally, you can add a class for styling
        document.body.appendChild(emptyLine);
    }
}
// Call the function to add 10 empty lines
addEmptyLines(10);
