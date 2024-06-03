document.addEventListener('DOMContentLoaded', function() {
    console.log('Text Editor is ready.');

    // Funcionalidad del acordeón
    var acc = document.getElementsByClassName('accordion');
    var panels = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            var isActive = this.classList.contains('active');

            // Cierra todos los paneles
            for (var j = 0; j < panels.length; j++) {
                acc[j].classList.remove('active');
                panels[j].style.display = 'none';
            }

            // Abre el panel actual si no estaba activo
            if (!isActive) {
                this.classList.add('active');
                this.nextElementSibling.style.display = 'block';
            }
        });
    }
});
