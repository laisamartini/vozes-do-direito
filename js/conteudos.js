/*
 * Base central das publicações do projeto.
 *
 * Para publicar um conteúdo, copie o modelo abaixo para dentro do array,
 * preencha todos os campos obrigatórios e use status: 'publicado'.
 * Conteúdos com status: 'rascunho' não aparecem no site.
 *
 * Modelo:
 * {
 *     slug: 'titulo-curto-sem-acentos',
 *     quadro: 'fala-direito',
 *     titulo: 'Título da publicação',
 *     resumo: 'Resumo curto para o card.',
 *     conteudo: [
 *         'Primeiro parágrafo.',
 *         'Segundo parágrafo.'
 *     ],
 *     dataPublicacao: '2026-07-20',
 *     dataAtualizacao: '',
 *     autor: 'Nome da pessoa responsável',
 *     revisadoPor: 'Nome da pessoa revisora',
 *     tags: ['Direito Civil'],
 *     fontes: [
 *         { titulo: 'Nome da fonte', link: 'https://exemplo.com' }
 *     ],
 *     imagem: '',
 *     textoAlternativo: '',
 *     status: 'publicado'
 * }
 */

const publicacoes = [];

const quadros = {
    'fala-direito': {
        nome: 'Fala Direito!',
        pagina: 'fala-direito.html'
    },
    'mito-ou-verdade': {
        nome: 'Mito ou Verdade?',
        pagina: 'mito-ou-verdade.html'
    },
    'normal-nao-e-legal': {
        nome: 'Normal Não é Legal',
        pagina: 'normal-nao-e-legal.html'
    },
    jurinews: {
        nome: 'JuriNews',
        pagina: 'jurinews.html'
    },
    'pergunta-da-semana': {
        nome: 'Pergunta da Semana',
        pagina: 'pergunta-da-semana.html'
    },
    'vale-a-pena-ver-direito': {
        nome: 'Vale a Pena Ver Direito',
        pagina: 'vale-a-pena-ver-direito.html'
    }
};
