document.getElementById('replaceNextBtn').addEventListener('click', function() {
    const findInput = document.getElementById('findInput').value;
    const replaceInput = document.getElementById('replaceInput').value;
    const textArea = document.getElementById('textArea');
    const text = textArea.value;
    const cursorPosition = textArea.selectionEnd;

    const regex = new RegExp(findInput, 'g');
    regex.lastIndex = cursorPosition;
    const match = regex.exec(text);

    if (match) {
        const newText = text.slice(0, match.index) + replaceInput + text.slice(regex.lastIndex);
        textArea.value = newText;
        textArea.focus();
        textArea.setSelectionRange(match.index + replaceInput.length, match.index + replaceInput.length);
    }
});

document.getElementById('replaceAllBtn').addEventListener('click', function() {
    const findInput = document.getElementById('findInput').value;
    const replaceInput = document.getElementById('replaceInput').value;
    const textArea = document.getElementById('textArea');
    const text = textArea.value;

    const regex = new RegExp(findInput, 'g');
    const newText = text.replace(regex, replaceInput);
    const count = (text.match(regex) || []).length;

    textArea.value = newText;
    document.getElementById('replaceCount').textContent = `Replacements made: ${count}`;
});

document.getElementById('replaceLineBreaksBtn').addEventListener('click', function() {
    const textArea = document.getElementById('textArea');
    const text = textArea.value;

    const regex = /[\r\n]+/g;
    const newText = text.replace(regex, ',\n');
    const count = (text.match(regex) || []).length;

    textArea.value = newText;
    document.getElementById('replaceCount').textContent = `Line breaks replaced: ${count}`;
});
