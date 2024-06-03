document.getElementById('searchBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    const textArea = document.getElementById('textArea').value;
    const resultCount = document.getElementById('resultCount');

    // Reset previous search results
    window.searchResults = [];
    window.currentIndex = -1;

    if (searchInput) {
        const regex = new RegExp(searchInput, 'g');
        let match;
        while ((match = regex.exec(textArea)) !== null) {
            window.searchResults.push({ index: match.index, match: match[0] });
        }

        resultCount.textContent = `Results found: ${window.searchResults.length}`;
        if (window.searchResults.length > 0) {
            window.currentIndex = 0;
            highlightResult(window.currentIndex);
        }
    }
});

document.getElementById('prevResult').addEventListener('click', function() {
    if (window.searchResults.length > 0 && window.currentIndex > 0) {
        highlightResult(--window.currentIndex);
    }
});

document.getElementById('nextResult').addEventListener('click', function() {
    if (window.searchResults.length > 0 && window.currentIndex < window.searchResults.length - 1) {
        highlightResult(++window.currentIndex);
    }
});

function highlightResult(index) {
    const textArea = document.getElementById('textArea');
    const startPos = window.searchResults[index].index;
    const endPos = startPos + window.searchResults[index].match.length;

    textArea.focus();
    textArea.setSelectionRange(startPos, endPos);
}
