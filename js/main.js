document.addEventListener('DOMContentLoaded', function () {
    const paginaEmSubpasta = window.location.pathname.includes('/paginas/');
    const destinoConteudo = document.querySelector('main, header, .pagina-interna');

    const descricoesPorPagina = {
        '/paginas/conteudos.html': 'Acesse os quadros e as publicações do Vozes do Direito sobre temas jurídicos do cotidiano.',
        '/paginas/dicionario.html': 'Consulte termos jurídicos explicados em linguagem clara e acessível pelo projeto Vozes do Direito.',
        '/paginas/cotidiano.html': 'Entenda como o Direito aparece em situações comuns da vida cotidiana.',
        '/paginas/quem-somos.html': 'Conheça a equipe, a orientação acadêmica e os objetivos do projeto de extensão Vozes do Direito.',
        '/paginas/contato.html': 'Entre em contato com a equipe do projeto de extensão Vozes do Direito.',
        '/paginas/fala-direito.html': 'Conceitos jurídicos explicados de forma simples no quadro Fala Direito!',
        '/paginas/mito-ou-verdade.html': 'Informações jurídicas verificadas no quadro Mito ou Verdade?',
        '/paginas/normal-nao-e-legal.html': 'Situações naturalizadas que podem envolver violações de direitos, explicadas no quadro Normal Não é Legal.',
        '/paginas/jurinews.html': 'Notícias jurídicas contextualizadas em linguagem acessível no quadro JuriNews.',
        '/paginas/pergunta-da-semana.html': 'Respostas claras para dúvidas jurídicas enviadas ao quadro Pergunta da Semana.',
        '/paginas/vale-a-pena-ver-direito.html': 'Obras culturais analisadas sob uma perspectiva jurídica no quadro Vale a Pena Ver Direito.',
        '/paginas/politica-editorial.html': 'Conheça os critérios de pesquisa, autoria, revisão, fontes e atualização do Vozes do Direito.'
    };

    if (!window.location.pathname.endsWith('/publicacao.html')) {
        const caminho = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
        const descricao = descricoesPorPagina[caminho];
        const urlCanonica = `https://projetovozesdodireito.com.br${caminho}`;

        if (descricao && !document.querySelector('meta[name="description"]')) {
            const metaDescricao = document.createElement('meta');
            metaDescricao.name = 'description';
            metaDescricao.content = descricao;
            document.head.appendChild(metaDescricao);
        }

        if (!document.querySelector('link[rel="canonical"]')) {
            const canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = urlCanonica;
            document.head.appendChild(canonical);
        }

        const metadadosSociais = [
            ['og:type', 'website'],
            ['og:title', document.title],
            ['og:description', descricao || 'Educação jurídica clara e acessível.'],
            ['og:url', urlCanonica],
            ['og:image', 'https://projetovozesdodireito.com.br/imagens/logo-vozes-do-direito.png']
        ];

        metadadosSociais.forEach(function ([propriedade, conteudo]) {
            if (!document.querySelector(`meta[property="${propriedade}"]`)) {
                const meta = document.createElement('meta');
                meta.setAttribute('property', propriedade);
                meta.content = conteudo;
                document.head.appendChild(meta);
            }
        });
    }

    if (destinoConteudo) {
        destinoConteudo.id ||= 'conteudo-principal';
        destinoConteudo.tabIndex = -1;

        const linkPular = document.createElement('a');
        linkPular.className = 'link-pular-conteudo';
        linkPular.href = `#${destinoConteudo.id}`;
        linkPular.textContent = 'Pular para o conteúdo principal';
        document.body.prepend(linkPular);
    }

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (elemento) {
        new bootstrap.Tooltip(elemento);
    });

    const anoAtual = new Date().getFullYear();

    document.querySelectorAll('[data-ano-atual]').forEach(function (elemento) {
        elemento.textContent = anoAtual;
    });

    const indicadores = {
        quadros: typeof quadros !== 'undefined' ? Object.keys(quadros).length : null,
        publicacoes: typeof publicacoes !== 'undefined'
            ? publicacoes.filter(function (item) { return item.status === 'publicado'; }).length
            : null,
        termos: typeof termosJuridicos !== 'undefined' ? termosJuridicos.length : null
    };

    document.querySelectorAll('[data-indicador]').forEach(function (elemento) {
        const valor = indicadores[elemento.dataset.indicador];
        if (valor !== null && valor !== undefined) {
            elemento.textContent = valor;
        }
    });

    const creditoRodape = document.querySelector('.rodape p:first-child');

    if (creditoRodape && !creditoRodape.querySelector('[data-ano-atual]')) {
        const anoRodape = document.createElement('span');
        anoRodape.dataset.anoAtual = '';
        anoRodape.textContent = anoAtual;
        creditoRodape.append(' · ', anoRodape);
    }

    const rodape = document.querySelector('.rodape .container');
    if (rodape && !rodape.querySelector('.rodape-links')) {
        const links = document.createElement('p');
        links.className = 'rodape-links';

        const politica = document.createElement('a');
        politica.href = paginaEmSubpasta ? 'politica-editorial.html' : 'paginas/politica-editorial.html';
        politica.textContent = 'Política editorial';

        const contato = document.createElement('a');
        contato.href = paginaEmSubpasta ? 'contato.html' : 'paginas/contato.html';
        contato.textContent = 'Contato';

        links.append(politica, ' · ', contato);
        rodape.appendChild(links);
    }

    const linkAtivo = document.querySelector('.nav-link.active');
    if (linkAtivo) {
        linkAtivo.setAttribute('aria-current', 'page');
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
