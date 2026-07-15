document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (elemento) {
        new bootstrap.Tooltip(elemento);
    });

    const anoAtual = new Date().getFullYear();

    document.querySelectorAll('[data-ano-atual]').forEach(function (elemento) {
        elemento.textContent = anoAtual;
    });

    const creditoRodape = document.querySelector('.rodape p:first-child');

    if (creditoRodape && !creditoRodape.querySelector('[data-ano-atual]')) {
        const anoRodape = document.createElement('span');
        anoRodape.dataset.anoAtual = '';
        anoRodape.textContent = anoAtual;
        creditoRodape.append(' · ', anoRodape);
    }

    const menu = document.getElementById('menu-principal');

    if (menu) {
        menu.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992 && menu.classList.contains('show')) {
                    bootstrap.Collapse.getOrCreateInstance(menu).hide();
                }
            });
        });
    }
});
