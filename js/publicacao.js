const parametros = new URLSearchParams(window.location.search);
const slug = parametros.get('slug');
const publicacao = publicacoes.find(function (item) {
    return item.slug === slug && item.status === 'publicado';
});

const estadoErro = document.getElementById('publicacaoNaoEncontrada');
const artigo = document.getElementById('publicacaoConteudo');

function formatarData(data) {
    if (!data) {
        return '';
    }

    return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(data));
}

function criarFontes(fontes) {
    const lista = document.getElementById('publicacaoFontes');

    if (!fontes?.length) {
        lista.closest('.bloco-fontes').hidden = true;
        return;
    }

    fontes.forEach(function (fonte) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = fonte.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = fonte.titulo;
        item.appendChild(link);
        lista.appendChild(item);
    });
}

function renderizarPublicacao() {
    if (!publicacao) {
        artigo.hidden = true;
        estadoErro.hidden = false;
        document.title = 'Publicação não encontrada | Vozes do Direito';
        return;
    }

    const quadro = quadros[publicacao.quadro];
    document.title = `${publicacao.titulo} | Vozes do Direito`;
    document.querySelector('meta[name="description"]').content = publicacao.resumo;
    document.getElementById('publicacaoQuadro').textContent = quadro?.nome || 'Conteúdo';
    document.getElementById('publicacaoTitulo').textContent = publicacao.titulo;
    document.getElementById('publicacaoResumo').textContent = publicacao.resumo;
    document.getElementById('publicacaoAutor').textContent = publicacao.autor;
    document.getElementById('publicacaoData').textContent = formatarData(publicacao.dataPublicacao);
    document.getElementById('publicacaoRevisor').textContent = publicacao.revisadoPor || 'Não informado';
    document.getElementById('voltarAoQuadro').href = quadro?.pagina || 'conteudos.html';

    const atualizacao = document.getElementById('publicacaoAtualizacao');
    atualizacao.textContent = publicacao.dataAtualizacao
        ? `Atualizado em ${formatarData(publicacao.dataAtualizacao)}`
        : '';

    const corpo = document.getElementById('publicacaoCorpo');
    corpo.replaceChildren(...publicacao.conteudo.map(function (paragrafo) {
        const elemento = document.createElement('p');
        elemento.textContent = paragrafo;
        return elemento;
    }));

    const imagem = document.getElementById('publicacaoImagem');
    if (publicacao.imagem) {
        imagem.src = publicacao.imagem;
        imagem.alt = publicacao.textoAlternativo || '';
        imagem.hidden = false;
    }

    criarFontes(publicacao.fontes);
}

renderizarPublicacao();
