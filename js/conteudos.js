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

const publicacoes = [
    {
        slug: 'jurisprudencia-sumula-doutrina-e-instancia',
        quadro: 'fala-direito',
        titulo: 'Jurisprudência, súmula, doutrina e instância: o que significam?',
        resumo: 'Um guia direto para compreender quatro expressões muito usadas no mundo jurídico.',
        conteudo: [
            'O vocabulário jurídico pode dificultar o acesso à Justiça e à informação. Por isso, entender algumas expressões frequentes ajuda a acompanhar notícias, decisões e documentos com mais segurança.',
            'Jurisprudência é o conjunto de decisões dos tribunais sobre determinada questão. Quando vários julgamentos seguem uma orientação semelhante, fala-se em entendimento jurisprudencial. Isso não significa, necessariamente, que todos os julgadores concordem ou que a posição nunca possa mudar.',
            'Súmula é um enunciado curto que resume uma orientação consolidada de um tribunal. Em regra, ela serve como referência para casos semelhantes. Já a súmula vinculante, aprovada pelo Supremo Tribunal Federal nos requisitos constitucionais, deve ser observada pelos demais órgãos do Poder Judiciário e pela administração pública.',
            'Um exemplo é a Súmula 301 do Superior Tribunal de Justiça: na investigação de paternidade, a recusa do suposto pai em realizar o exame de DNA gera uma presunção relativa de paternidade, que deve ser analisada com as demais provas. Outro exemplo é a Súmula Vinculante 13 do STF, relacionada à proibição do nepotismo na administração pública.',
            'Doutrina é a produção de juristas e pesquisadores que estudam, organizam e interpretam o Direito em livros, artigos e outras obras. Ela influencia debates e decisões, mas não substitui a lei nem obriga o juiz a seguir determinada opinião.',
            'Instância, ou grau de jurisdição, indica o nível em que um processo é analisado. Em geral, a primeira instância é onde a causa começa e as provas são examinadas; a segunda instância julga recursos contra decisões do primeiro grau.',
            'STJ e STF são tribunais superiores com competências definidas pela Constituição. Eles não funcionam simplesmente como uma “terceira instância” para reexaminar todos os fatos e provas: o STJ uniformiza a interpretação da legislação federal, enquanto o STF trata principalmente de questões constitucionais.',
            'Conhecer esses termos não resolve sozinho uma questão jurídica, mas torna a linguagem do Direito menos distante e facilita a busca por informação confiável.'
        ],
        dataPublicacao: '2026-08-23',
        dataAtualizacao: '',
        autor: 'Maria Clara Matos Recalcatti',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Linguagem jurídica', 'Acesso à Justiça', 'Jurisprudência'],
        fontes: [
            {
                titulo: 'CNJ — Panorama e estrutura do Poder Judiciário brasileiro',
                link: 'https://www.cnj.jus.br/poder-judiciario/panorama-e-estrutura-do-poder-judiciario-brasileiro/'
            },
            {
                titulo: 'STJ — Súmula 301',
                link: 'https://scon.stj.jus.br/SCON/sumstj/doc.jsp?b=SUMU&i=376&l=100&operador=AND&ordenacao=-%40NUM&p=false&tipo=SUMULA'
            },
            {
                titulo: 'STF — Súmula Vinculante 13',
                link: 'https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1227'
            }
        ],
        imagem: '../imagens/publicacoes/fala-direito-termos-juridicos.webp',
        textoAlternativo: 'Estudantes consultam livros jurídicos em uma mesa clara, com detalhes em vinho e dourado.',
        status: 'publicado'
    },
    {
        slug: 'aposentada-perde-37-milhoes-em-golpe-de-falso-investimento',
        quadro: 'jurinews',
        titulo: 'Aposentada perde R$ 37 milhões em golpe de falso investimento',
        resumo: 'Operação policial investiga uma rede que usava grupos de mensagens e uma plataforma falsa para simular lucros.',
        conteudo: [
            'Uma aposentada de 70 anos, no Rio Grande do Sul, perdeu mais de R$ 37 milhões em um esquema de falso investimento. O caso deu origem à Operação Criptoabate, deflagrada pela Polícia Civil em agosto de 2026.',
            'Segundo as informações divulgadas sobre a investigação, a vítima havia recebido uma herança e foi convencida, ao longo de aproximadamente seis meses, a retirar o patrimônio de uma corretora legítima e transferi-lo para a organização investigada.',
            'O grupo criava comunidades virtuais que pareciam profissionais, com supostos especialistas, assistentes e participantes. Uma plataforma falsa exibia resultados positivos para estimular novos aportes. Quando a vítima tentava sacar, surgiam bloqueios e cobranças de novas taxas ou impostos.',
            'A investigação identificou ao menos 140 possíveis vítimas e apura crimes como estelionato por fraude eletrônica, organização criminosa e lavagem de dinheiro. A responsabilidade penal de cada investigado dependerá das provas e das decisões do processo.',
            'Na esfera civil, instituições financeiras podem responder por fraudes ligadas a falhas do próprio serviço, conforme o artigo 14 do Código de Defesa do Consumidor e a Súmula 479 do STJ. Essa responsabilidade, porém, não é automática em qualquer golpe: é necessário analisar se houve defeito de segurança, movimentação incompatível com o perfil do cliente ou falta de diligência na abertura e manutenção das contas usadas pelos criminosos.',
            'Quem sofre um golpe deve reunir comprovantes, conversas, endereços de sites, dados das transferências e protocolos; comunicar imediatamente as instituições envolvidas; registrar ocorrência; e buscar orientação adequada. A possibilidade de bloqueio ou recuperação do dinheiro varia conforme a rapidez das medidas e as circunstâncias do caso.',
            'Promessas de retorno elevado, pressão para depositar rapidamente, grupos com depoimentos excessivamente positivos e exigência de novos pagamentos para liberar saques são sinais de alerta. Antes de investir, é importante verificar se a instituição e os profissionais estão autorizados pelos órgãos reguladores.'
        ],
        dataPublicacao: '2026-08-22',
        dataAtualizacao: '',
        autor: 'Júlia Gabriele Schiremberck Oliveira',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['JuriNews', 'Fraude eletrônica', 'Direito do Consumidor'],
        fontes: [
            {
                titulo: 'UOL — Aposentada perde R$ 37 milhões em golpe de investimentos no RS',
                link: 'https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/08/13/vitima-perde-r-37-milhoes-em-golpe-de-investimentos-no-rs.ghtm'
            },
            {
                titulo: 'g1 — Aposentada foi convencida a transferir fortuna para plataforma falsa',
                link: 'https://g1.globo.com/rs/rio-grande-do-sul/noticia/2026/08/14/aposentada-perdeu-r-37-milhoes-herdou-fortuna-convencida-transferir-valor-plataforma-falsa-seis-meses-policia.ghtml'
            },
            {
                titulo: 'STJ — Responsabilidade bancária em golpe com uso de conta digital exige demonstração de falta de diligência',
                link: 'https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/27012025-Responsabilidade-de-banco-por-golpe-com-uso-de-conta-digital-exige-demonstracao-de-falta-de-diligencia.aspx'
            },
            {
                titulo: 'STJ — Súmula 479',
                link: 'https://scon.stj.jus.br/SCON/sumstj/doc.jsp?b=SUMU&i=1&l=10&livre=sumula+479&operador=e&ordenacao=-%40NUM&p=false'
            }
        ],
        imagem: '../imagens/publicacoes/jurinews-golpe-falso-investimento.webp',
        textoAlternativo: 'Pessoa pesquisa informações jurídicas e financeiras em uma mesa, em ambiente claro com detalhes em vinho.',
        status: 'publicado'
    },
    {
        slug: 'mandar-print-de-conversa-privada-sem-autorizacao-e-crime',
        quadro: 'normal-nao-e-legal',
        titulo: 'Mandar print de conversa privada sem autorização é crime?',
        resumo: 'Não existe uma resposta única: a divulgação pode violar a privacidade, gerar indenização e, em certas situações, configurar crime.',
        conteudo: [
            'Não necessariamente. Mandar um print de conversa privada sem autorização não é automaticamente crime em todo caso, mas pode ser uma conduta ilícita e gerar consequências civis ou penais, conforme o conteúdo, a finalidade, a forma de obtenção e o dano causado.',
            'A Constituição protege a intimidade, a vida privada, a honra, a imagem e o sigilo das comunicações. Quem participa de uma conversa tem acesso legítimo às mensagens, mas isso não significa que possa divulgá-las livremente a terceiros ou nas redes sociais.',
            'Em 2021, o Superior Tribunal de Justiça decidiu que a divulgação pública de mensagens de WhatsApp sem autorização pode gerar obrigação de indenizar. Para o tribunal, existe uma expectativa de que a conversa permaneça restrita aos participantes. O STJ ressalvou situações em que a exposição é necessária para proteger um direito próprio do destinatário.',
            'Na esfera civil, a divulgação que viola direitos e causa dano pode resultar em indenização, com fundamento nos artigos 186 e 927 do Código Civil. O contexto é essencial: não é igual encaminhar uma conversa para produzir prova de uma ameaça e publicá-la para humilhar ou expor alguém.',
            'Também pode haver crime, dependendo do caso. O artigo 153 do Código Penal trata da divulgação, sem justa causa, de conteúdo de documento particular ou correspondência confidencial de que a pessoa é destinatária ou detentora, quando a divulgação pode causar dano. Se o print foi obtido por invasão de celular, computador ou conta, pode haver o crime do artigo 154-A, cuja pena básica atual é de um a quatro anos de reclusão e multa.',
            'O conteúdo divulgado ainda pode envolver outros delitos, como calúnia, difamação ou injúria. Nenhuma dessas hipóteses deve ser presumida apenas porque houve um print: é preciso examinar os fatos e os requisitos previstos em lei.',
            'Antes de compartilhar, pergunte se há autorização, necessidade legítima e risco de exposição. Quando a conversa for importante como prova, preserve o material original e busque orientação sobre a forma adequada de apresentá-lo, evitando divulgação pública desnecessária.'
        ],
        dataPublicacao: '2026-08-30',
        dataAtualizacao: '',
        autor: 'Júlia Gabriele Schiremberck Oliveira',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Privacidade', 'Direito Digital', 'Responsabilidade civil'],
        fontes: [
            {
                titulo: 'STJ — Divulgação de mensagens do WhatsApp sem autorização pode gerar indenização',
                link: 'https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/02092021-Divulgacao-de-mensagens-do-WhatsApp-sem-autorizacao-pode-gerar-obrigacao-de-indenizar-.aspx'
            },
            {
                titulo: 'Constituição Federal — art. 5º, incisos X e XII',
                link: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'
            },
            {
                titulo: 'Código Civil — arts. 186 e 927',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
            },
            {
                titulo: 'Código Penal — arts. 153 e 154-A',
                link: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm'
            }
        ],
        imagem: '../imagens/publicacoes/normal-nao-e-legal-print-conversa.webp',
        textoAlternativo: 'Celular sobre mesa clara ao lado de livros jurídicos, com detalhes em vinho e dourado.',
        status: 'publicado'
    }
];

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
