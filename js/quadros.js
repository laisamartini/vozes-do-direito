const listaPublicacoes = document.getElementById('listaPublicacoes');
const quadroAtual = document.body.dataset.quadro;

function formatarData(data) {
    if (!data) {
        return '';
    }

    return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(data));
}

function criarCardPublicacao(publicacao) {
    const coluna = document.createElement('div');
    coluna.className = 'col-md-6 col-lg-4';

    const link = document.createElement('a');
    link.className = 'publicacao-link';
    link.href = `publicacao.html?slug=${encodeURIComponent(publicacao.slug)}`;

    const card = document.createElement('article');
    card.className = 'exemplo-card publicacao-card';

    const categoria = document.createElement('span');
    categoria.textContent = publicacao.tags?.[0] || quadros[publicacao.quadro]?.nome || 'Conteúdo';

    const titulo = document.createElement('h3');
    titulo.textContent = publicacao.titulo;

    const resumo = document.createElement('p');
    resumo.textContent = publicacao.resumo;

    const meta = document.createElement('small');
    meta.className = 'publicacao-meta';
    meta.textContent = formatarData(publicacao.dataPublicacao);

    card.append(categoria, titulo, resumo, meta);
    link.appendChild(card);
    coluna.appendChild(link);

    return coluna;
}

function renderizarPublicacoes() {
    if (!listaPublicacoes || !quadroAtual) {
        return;
    }

    const itens = publicacoes
        .filter(function (publicacao) {
            return publicacao.quadro === quadroAtual && publicacao.status === 'publicado';
        })
        .sort(function (a, b) {
            return new Date(b.dataPublicacao) - new Date(a.dataPublicacao);
        });

    if (itens.length === 0) {
        const vazio = document.createElement('div');
        vazio.className = 'estado-vazio';
        vazio.innerHTML = '<i class="bi bi-journal-text" aria-hidden="true"></i><p>Novas publicações serão adicionadas em breve.</p>';
        listaPublicacoes.replaceChildren(vazio);
        return;
    }

    listaPublicacoes.replaceChildren(...itens.map(criarCardPublicacao));
}

renderizarPublicacoes();
