const campoPesquisa = document.getElementById('campoPesquisa');
const listaTermos = document.getElementById('listaTermos');
const resultadoMensagem = document.getElementById('resultadoMensagem');
const listaSugestoes = document.getElementById('listaSugestoes');

const modalTermo = new bootstrap.Modal(document.getElementById('modalTermo'));
const modalTermoArea = document.getElementById('modalTermoArea');
const modalTermoTitulo = document.getElementById('modalTermoTitulo');
const modalTermoResumo = document.getElementById('modalTermoResumo');
const modalTermoDetalhes = document.getElementById('modalTermoDetalhes');

function normalizarTexto(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function termoCombinaComBusca(dados, textoDigitado) {
    const conteudo = normalizarTexto(`${dados.termo} ${dados.area} ${dados.resumo}`);
    const palavrasBuscadas = normalizarTexto(textoDigitado).split(/\s+/).filter(Boolean);

    return palavrasBuscadas.every(function (palavra) {
        return conteudo.includes(palavra);
    });
}

function criarCard(dados) {
    const coluna = document.createElement('div');
    coluna.className = 'col-md-6 col-lg-4 termo-item';

    const card = document.createElement('article');
    card.className = 'termo-card-dicionario';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Abrir explicação de ${dados.termo}`);

    const area = document.createElement('span');
    area.textContent = dados.area;

    const titulo = document.createElement('h3');
    titulo.textContent = dados.termo;

    const resumo = document.createElement('p');
    resumo.textContent = dados.resumo;

    card.append(area, titulo, resumo);
    coluna.appendChild(card);

    card.addEventListener('click', function () {
        abrirModal(dados);
    });

    card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            abrirModal(dados);
        }
    });

    return coluna;
}

function renderizarTermos(termos) {
    listaTermos.replaceChildren(...termos.map(criarCard));
}

function abrirModal(dados) {
    modalTermoArea.textContent = dados.area;
    modalTermoTitulo.textContent = dados.termo;
    modalTermoResumo.textContent = dados.resumo;
    modalTermoDetalhes.textContent = dados.detalhes;
    modalTermo.show();
}

function obterTermosFiltrados() {
    const textoDigitado = campoPesquisa.value;

    if (normalizarTexto(textoDigitado) === '') {
        return termosJuridicos;
    }

    return termosJuridicos.filter(function (dados) {
        return termoCombinaComBusca(dados, textoDigitado);
    });
}

function filtrarTermos() {
    const termosFiltrados = obterTermosFiltrados();
    renderizarTermos(termosFiltrados);

    resultadoMensagem.style.display = termosFiltrados.length === 0 ? 'block' : 'none';
    resultadoMensagem.textContent = termosFiltrados.length === 0
        ? 'Nenhum termo encontrado. Tente pesquisar outro termo.'
        : '';
}

function mostrarSugestoes() {
    const textoDigitado = campoPesquisa.value;
    listaSugestoes.replaceChildren();

    if (normalizarTexto(textoDigitado) === '') {
        listaSugestoes.style.display = 'none';
        return;
    }

    const sugestoes = termosJuridicos
        .filter(function (dados) {
            return termoCombinaComBusca(dados, textoDigitado);
        })
        .slice(0, 5);

    sugestoes.forEach(function (dados) {
        const sugestao = document.createElement('button');
        sugestao.type = 'button';
        sugestao.className = 'sugestao-item';
        sugestao.textContent = dados.termo;

        sugestao.addEventListener('click', function () {
            campoPesquisa.value = dados.termo;
            listaSugestoes.style.display = 'none';
            filtrarTermos();
            abrirModal(dados);
        });

        listaSugestoes.appendChild(sugestao);
    });

    listaSugestoes.style.display = sugestoes.length > 0 ? 'block' : 'none';
}

function debounce(funcao, espera) {
    let temporizador;

    return function () {
        clearTimeout(temporizador);
        temporizador = setTimeout(funcao, espera);
    };
}

const atualizarBusca = debounce(function () {
    filtrarTermos();
    mostrarSugestoes();
}, 200);

campoPesquisa.addEventListener('input', atualizarBusca);

document.addEventListener('click', function (event) {
    if (!event.target.closest('.campo-busca')) {
        listaSugestoes.style.display = 'none';
    }
});

renderizarTermos(termosJuridicos);
