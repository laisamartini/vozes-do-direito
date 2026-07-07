const campoPesquisa = document.getElementById('campoPesquisa');
const termos = document.querySelectorAll('.termo-item');
const cardsTermos = document.querySelectorAll('.termo-card-dicionario');
const resultadoMensagem = document.getElementById('resultadoMensagem');
const listaSugestoes = document.getElementById('listaSugestoes');

const modalTermo = new bootstrap.Modal(document.getElementById('modalTermo'));

const modalTermoArea = document.getElementById('modalTermoArea');
const modalTermoTitulo = document.getElementById('modalTermoTitulo');
const modalTermoResumo = document.getElementById('modalTermoResumo');
const modalTermoDetalhes = document.getElementById('modalTermoDetalhes');

function pegarDadosDoCard(card) {
    const titulo = card.querySelector('h3')?.innerText || '';
    const area = card.querySelector('span')?.innerText || '';
    const resumo = card.querySelector('p')?.innerText || '';

    return {
        termo: card.dataset.termo || titulo,
        area: card.dataset.area || area,
        resumo: card.dataset.resumo || resumo,
        detalhes: card.dataset.detalhes || 'Mais informações sobre este termo serão adicionadas em breve.'
    };
}

function termoCombinaComBusca(nomeTermo, textoDigitado) {
    const palavras = nomeTermo.toLowerCase().split(' ');

    return palavras.some(function (palavra) {
        return palavra.startsWith(textoDigitado);
    });
}

function abrirModal(card) {
    const dados = pegarDadosDoCard(card);

    modalTermoArea.innerText = dados.area;
    modalTermoTitulo.innerText = dados.termo;
    modalTermoResumo.innerText = dados.resumo;
    modalTermoDetalhes.innerText = dados.detalhes;

    modalTermo.show();
}

function filtrarTermos() {
    const textoDigitado = campoPesquisa.value.toLowerCase().trim();
    let quantidadeVisivel = 0;

    termos.forEach(function (termo) {
        const card = termo.querySelector('.termo-card-dicionario');
        const dados = pegarDadosDoCard(card);
        const nomeTermo = dados.termo.toLowerCase();

        if (textoDigitado === '' || termoCombinaComBusca(nomeTermo, textoDigitado)) {
            termo.style.display = 'block';
            quantidadeVisivel++;
        } else {
            termo.style.display = 'none';
        }
    });

    if (quantidadeVisivel === 0) {
        resultadoMensagem.style.display = 'block';
        resultadoMensagem.innerText = 'Nenhum termo encontrado. Tente pesquisar outro termo.';
    } else {
        resultadoMensagem.style.display = 'none';
    }
}

function mostrarSugestoes() {
    const textoDigitado = campoPesquisa.value.toLowerCase().trim();

    listaSugestoes.innerHTML = '';

    if (textoDigitado === '') {
        listaSugestoes.style.display = 'none';
        return;
    }

    let sugestoesEncontradas = 0;

    cardsTermos.forEach(function (card) {
        const dados = pegarDadosDoCard(card);
        const nomeTermo = dados.termo.toLowerCase();

        if (termoCombinaComBusca(nomeTermo, textoDigitado)) {
            const sugestao = document.createElement('div');

            sugestao.classList.add('sugestao-item');
            sugestao.innerText = dados.termo;

            sugestao.addEventListener('click', function () {
                campoPesquisa.value = dados.termo;
                listaSugestoes.style.display = 'none';
                filtrarTermos();
                abrirModal(card);
            });

            listaSugestoes.appendChild(sugestao);
            sugestoesEncontradas++;
        }
    });

    if (sugestoesEncontradas > 0) {
        listaSugestoes.style.display = 'block';
    } else {
        listaSugestoes.style.display = 'none';
    }
}

campoPesquisa.addEventListener('input', function () {
    filtrarTermos();
    mostrarSugestoes();
});

cardsTermos.forEach(function (card) {
    card.style.cursor = 'pointer';

    card.addEventListener('click', function () {
        abrirModal(card);
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.campo-busca')) {
        listaSugestoes.style.display = 'none';
    }
});