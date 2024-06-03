document.getElementById('downloadBtn').addEventListener('click', function() {
    const textArea = document.getElementById('textArea');
    const fileNameInput = document.getElementById('fileName');
    const fileTypeSelect = document.getElementById('fileType');

    const fileName = fileNameInput.value || 'untitled'; // Nombre del archivo, por defecto 'untitled'
    const fileType = fileTypeSelect.value; // Tipo de archivo seleccionado

    const blob = new Blob([textArea.value], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = `${fileName}.${fileType}`; // Nombre y tipo del archivo
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
});
