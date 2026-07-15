const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!formContato.reportValidity()) {
        return;
    }

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const corpo = [
        'Olá, equipe do Vozes do Direito.',
        '',
        `Nome: ${nome}`,
        `E-mail para retorno: ${email}`,
        `Tema: ${assunto}`,
        '',
        'Mensagem:',
        mensagem
    ].join('\n');

    const destino = 'vozesdodireitoprojeto@gmail.com';
    const titulo = `Sugestão de tema - ${assunto}`;
    window.location.href = `mailto:${destino}?subject=${encodeURIComponent(titulo)}&body=${encodeURIComponent(corpo)}`;
});
