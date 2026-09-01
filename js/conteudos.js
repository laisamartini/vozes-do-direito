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
 *         { tipo: 'titulo', texto: 'Título da seção' },
 *         { tipo: 'paragrafo', texto: 'Primeiro parágrafo.' },
 *         { tipo: 'lista', itens: ['Primeiro item', 'Segundo item'] }
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
            { tipo: 'titulo', texto: 'Introdução' },
            { tipo: 'paragrafo', texto: 'A linguagem jurídica e sua complexidade muitas vezes se tornam um obstáculo na comunicação entre profissionais do Direito e cidadãos que buscam auxílio jurídico. Leis, contratos e decisões judiciais costumam apresentar termos técnicos e expressões de difícil compreensão para quem não faz parte da área.' },
            { tipo: 'paragrafo', texto: 'Por isso, reunimos algumas palavras e expressões muito presentes no cotidiano e relacionadas ao Direito e ao seu estudo.' },
            { tipo: 'titulo', texto: 'Jurisprudência' },
            { tipo: 'paragrafo', texto: 'Jurisprudência é o conjunto de decisões dos tribunais sobre determinado tema jurídico. Quando diversos julgamentos seguem uma orientação semelhante, forma-se um entendimento jurisprudencial que pode servir de referência para a análise de casos futuros.' },
            { tipo: 'paragrafo', texto: 'Ela funciona como um guia para juízes, advogados e demais profissionais, contribuindo para a previsibilidade e a segurança jurídica. Isso não significa, porém, que todas as decisões sejam idênticas ou que o entendimento nunca possa mudar.' },
            { tipo: 'paragrafo', texto: 'Um exemplo é o Tema 821 da repercussão geral. O Supremo Tribunal Federal fixou o entendimento de que a utilização do salário mínimo como base de cálculo do valor da pensão alimentícia não viola a Constituição Federal. Esse precedente orienta a solução de casos semelhantes, sem dispensar a análise das particularidades de cada processo.' },
            { tipo: 'titulo', texto: 'Súmula' },
            { tipo: 'paragrafo', texto: 'Súmula é um enunciado curto que resume um entendimento consolidado de determinado tribunal. Em regra, a súmula serve como orientação para o julgamento de situações semelhantes, mas não possui caráter obrigatório em todos os casos.' },
            { tipo: 'paragrafo', texto: 'A súmula vinculante, por sua vez, somente pode ser aprovada pelo Supremo Tribunal Federal, nos requisitos previstos pela Constituição, e deve ser observada pelos demais órgãos do Poder Judiciário e pela administração pública.' },
            { tipo: 'paragrafo', texto: 'Como exemplo de súmula, a Súmula 301 do Superior Tribunal de Justiça estabelece que, em ação de investigação de paternidade, a recusa do suposto pai a realizar o exame de DNA gera presunção relativa de paternidade. Isso significa que a recusa deve ser considerada com as demais provas do processo.' },
            { tipo: 'paragrafo', texto: 'Já a Súmula Vinculante 13 do STF trata da proibição do nepotismo na administração pública, alcançando, nos termos do enunciado, a nomeação de cônjuge, companheiro ou parente até o terceiro grau para determinados cargos e funções.' },
            { tipo: 'titulo', texto: 'Doutrina' },
            { tipo: 'paragrafo', texto: 'Doutrina é o conjunto de estudos, interpretações e análises teóricas produzidos por juristas, pesquisadores e professores sobre o Direito, suas normas e seus princípios.' },
            { tipo: 'paragrafo', texto: 'Presente em livros, artigos e outras obras acadêmicas, a doutrina ajuda a compreender o contexto e a aplicação das leis, exerce uma função crítica e pode influenciar debates, decisões judiciais e a formação de novos profissionais. Ela não substitui a lei nem obriga o juiz a seguir uma opinião específica.' },
            { tipo: 'paragrafo', texto: 'São exemplos as obras de Carlos Roberto Gonçalves no Direito Civil, Cezar Roberto Bitencourt no Direito Penal e Flávio Martins no Direito Constitucional.' },
            { tipo: 'titulo', texto: 'Instância' },
            { tipo: 'paragrafo', texto: 'Instância, ou grau de jurisdição, indica o nível em que um processo é analisado e ajuda a identificar o órgão competente para julgá-lo.' },
            { tipo: 'subtitulo', texto: 'Primeira instância' },
            { tipo: 'paragrafo', texto: 'É onde, em regra, a ação judicial começa. Nela atuam juízes de primeiro grau em varas e juizados. As comarcas correspondem ao território em que esses juízes exercem sua jurisdição e podem abranger um ou mais municípios. Conforme a organização local, existem varas especializadas em matérias como Família, Cível e Criminal.' },
            { tipo: 'subtitulo', texto: 'Segunda instância' },
            { tipo: 'paragrafo', texto: 'É o grau em que normalmente são julgados os recursos contra decisões da primeira instância. Nele atuam tribunais como os Tribunais de Justiça e os Tribunais Regionais Federais, do Trabalho e Eleitorais. Em geral, os julgamentos são realizados por órgãos colegiados, como turmas ou câmaras.' },
            { tipo: 'subtitulo', texto: 'Tribunais superiores' },
            { tipo: 'paragrafo', texto: 'STJ, TST, TSE e STM são tribunais superiores, e o STF é o órgão máximo do Poder Judiciário brasileiro. Embora sejam chamados popularmente de “terceira instância”, eles não formam uma terceira instância comum destinada a reexaminar livremente todos os fatos e provas.' },
            { tipo: 'paragrafo', texto: 'Cada tribunal possui competências definidas pela Constituição. O STJ, por exemplo, busca uniformizar a interpretação da legislação federal, enquanto o STF julga principalmente questões constitucionais. Mesmo nesses tribunais, podem existir recursos internos nas hipóteses previstas em lei.' },
            { tipo: 'paragrafo', texto: 'Conhecer esses termos torna a linguagem do Direito menos distante e ajuda o cidadão a compreender notícias, documentos e decisões jurídicas com mais segurança.' }
        ],
        dataPublicacao: '2026-08-23',
        dataAtualizacao: '2026-09-01',
        autor: 'Maria Clara Matos Recalcatti',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Linguagem jurídica', 'Acesso à Justiça', 'Jurisprudência'],
        fontes: [
            {
                titulo: 'CNJ — Panorama e estrutura do Poder Judiciário brasileiro',
                link: 'https://www.cnj.jus.br/poder-judiciario/panorama-e-estrutura-do-poder-judiciario-brasileiro/'
            },
            {
                titulo: 'STF — Tema 821 da repercussão geral',
                link: 'https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=ARE&incidente=4648052&numeroProcesso=842157&numeroTema=821'
            },
            {
                titulo: 'STJ — Súmula 301',
                link: 'https://scon.stj.jus.br/SCON/sumstj/doc.jsp?b=SUMU&i=376&l=100&operador=AND&ordenacao=-%40NUM&p=false&tipo=SUMULA'
            },
            {
                titulo: 'STF — Súmula Vinculante 13',
                link: 'https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1227'
            },
            {
                titulo: 'CNJ — Diferença entre primeira e segunda instâncias',
                link: 'https://www.cnj.jus.br/primeira-instancia-segunda-instancia-quem-e-quem-na-justica-brasileira/'
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
            { tipo: 'titulo', texto: 'O caso investigado' },
            { tipo: 'paragrafo', texto: 'Uma mulher de 70 anos perdeu R$ 37 milhões em um esquema de falsos investimentos no Rio Grande do Sul. Segundo a Polícia Civil, ela utilizou recursos recebidos por herança e, ao longo de aproximadamente seis meses, transferiu seu patrimônio de uma corretora regular para uma plataforma fraudulenta, apesar dos alertas de seu corretor.' },
            { tipo: 'paragrafo', texto: 'A vítima também perdeu parte da rentabilidade que havia acumulado em investimentos anteriores realizados por meio de uma corretora que operava regularmente no mercado financeiro.' },
            { tipo: 'paragrafo', texto: 'O caso é investigado pelo Departamento Estadual de Repressão aos Crimes Cibernéticos (DERCC) na Operação Criptoabate. Na fase divulgada em agosto de 2026, três pessoas haviam sido presas, outras sete eram procuradas e um dos suspeitos de comandar o esquema foi preso no Rio de Janeiro em 14 de agosto.' },
            { tipo: 'paragrafo', texto: 'A polícia identificou 140 possíveis vítimas espalhadas pelo Brasil e informou o cumprimento de 90 ordens judiciais em três estados. Entre os investigados estariam três proprietários de instituições financeiras que realizavam conversão para criptomoedas.' },
            { tipo: 'paragrafo', texto: 'De acordo com o DERCC, uma das instituições investigadas movimentou R$ 295 milhões em um único dia. Também foi identificada uma empresa em São Paulo com movimentação atípica de R$ 500 milhões no período analisado. Segundo a investigação, as transações suspeitas relacionadas aos investigados somariam R$ 30 bilhões.' },
            { tipo: 'titulo', texto: 'Como funcionava o golpe' },
            { tipo: 'paragrafo', texto: 'A fraude é conhecida internacionalmente como “pig butchering”, expressão traduzida como “golpe do abate de porcos”. Nesse tipo de esquema, os criminosos constroem gradualmente uma relação de confiança e convencem a vítima a realizar investimentos cada vez maiores em uma plataforma falsa.' },
            { tipo: 'paragrafo', texto: 'Segundo a polícia, os investigados se apresentavam como funcionários de uma empresa identificada como TDASX, que encerrou suas atividades depois do início das investigações. As reportagens consultadas informaram que os responsáveis pela empresa ainda não haviam sido localizados para comentar o caso até suas últimas atualizações.' },
            { tipo: 'paragrafo', texto: 'Promessas de rentabilidade muito acima do mercado, plataformas sem credenciais verificáveis e pedidos de novos depósitos para liberar valores supostamente investidos são sinais de alerta. Antes de investir, é importante verificar se a instituição e os profissionais estão autorizados pelos órgãos reguladores.' },
            { tipo: 'titulo', texto: 'Quem pode responder pelo prejuízo?' },
            { tipo: 'paragrafo', texto: 'O artigo 14 do Código de Defesa do Consumidor estabelece que o fornecedor de serviços responde por danos causados por defeitos na prestação do serviço. Essa regra pode alcançar bancos e instituições de pagamento quando a fraude estiver relacionada a uma falha de segurança ou a outro defeito do serviço.' },
            { tipo: 'paragrafo', texto: 'A Súmula 479 do Superior Tribunal de Justiça afirma que as instituições financeiras respondem objetivamente pelos danos decorrentes de fraudes e delitos praticados por terceiros quando se trata de fortuito interno, isto é, de risco relacionado à própria atividade bancária.' },
            { tipo: 'paragrafo', texto: 'Essa responsabilização não é automática em todo golpe. Em decisão divulgada em janeiro de 2025, o STJ destacou que, no caso analisado, era necessário demonstrar falta de diligência da instituição na abertura da conta usada pelos criminosos. A análise pode envolver a verificação dos documentos, dos procedimentos biométricos, do perfil das movimentações e de outros sinais objetivos de irregularidade.' },
            { tipo: 'paragrafo', texto: 'Dependendo das circunstâncias e das falhas comprovadas, também podem ser discutidas as responsabilidades de:' },
            { tipo: 'lista', itens: ['intermediadores de pagamento;', 'instituições que receberam os valores;', 'plataformas envolvidas na operação.'] },
            { tipo: 'titulo', texto: 'Quais medidas podem ser adotadas?' },
            { tipo: 'paragrafo', texto: 'Cada situação exige análise individual, mas entre as medidas juridicamente possíveis estão:' },
            { tipo: 'lista', itens: ['comunicação imediata às instituições financeiras envolvidas;', 'reunião de comprovantes, conversas, endereços eletrônicos, dados das transferências e protocolos;', 'registro de ocorrência e comunicação aos órgãos competentes;', 'pedido de bloqueio de valores em contas relacionadas ao golpe;', 'responsabilização dos participantes e dos prestadores de serviço quando houver fundamento jurídico;', 'pedido de indenização por danos materiais e, conforme o caso concreto, danos morais.'] },
            { tipo: 'paragrafo', texto: 'A recuperação do dinheiro não é garantida e depende de fatores como a rapidez das providências, a identificação das contas de destino, a existência de valores disponíveis e a comprovação das responsabilidades de cada envolvido.' }
        ],
        dataPublicacao: '2026-08-22',
        dataAtualizacao: '2026-09-01',
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
                titulo: 'Journal of Economic Criminology — Estudo sobre “pig butchering”',
                link: 'https://www.sciencedirect.com/science/article/pii/S2949791424000186'
            },
            {
                titulo: 'Código de Defesa do Consumidor — art. 14',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
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
            { tipo: 'paragrafo', texto: 'Pode mandar aquele print da conversa no grupo? Juridicamente, não é tão simples assim.' },
            { tipo: 'paragrafo', texto: 'Mandar um print de conversa privada sem autorização não é automaticamente crime em todo caso, mas a divulgação pode ser ilícita e gerar consequências civis ou penais. A resposta depende do conteúdo, da finalidade, da forma como a mensagem foi obtida, do alcance da divulgação, da existência de justa causa e dos danos produzidos.' },
            { tipo: 'titulo', texto: 'Comunicação digital' },
            { tipo: 'paragrafo', texto: 'Com o avanço das tecnologias digitais, os meios de comunicação passaram por grandes transformações. Interações que antes dependiam principalmente de cartas, telegramas ou telefonemas hoje acontecem por aplicativos como WhatsApp, Telegram, Facebook e Instagram, de maneira rápida e sem barreiras geográficas.' },
            { tipo: 'paragrafo', texto: 'O fato de a conversa ocorrer em ambiente digital, porém, não elimina seu caráter privado. Quem recebe uma mensagem pode ter acesso legítimo ao conteúdo, mas isso não significa que possua autorização irrestrita para divulgá-lo a terceiros ou publicá-lo nas redes sociais.' },
            { tipo: 'titulo', texto: 'Direito à privacidade versus liberdade de expressão' },
            { tipo: 'paragrafo', texto: 'A Constituição Federal protege a liberdade de expressão e o direito à informação, mas também assegura a intimidade, a vida privada, a honra, a imagem e o sigilo das comunicações. Nenhum desses direitos é absoluto.' },
            { tipo: 'paragrafo', texto: 'A doutrina constitucional destaca a importância da liberdade de expressão para a democracia e o pluralismo, mas reconhece que ela pode encontrar limites quando entra em conflito com outros direitos fundamentais. A proteção das informações digitais deve ser compatibilizada com a intimidade, a honra e a dignidade das pessoas.' },
            { tipo: 'paragrafo', texto: 'Assim, pode existir um conflito entre o interesse de divulgar determinada informação e a necessidade de preservar a privacidade dos participantes da conversa. A solução depende de uma ponderação das circunstâncias concretas: finalidade da exposição, relevância para terceiros, expectativa de confidencialidade, alcance da publicação e eventual dano.' },
            { tipo: 'titulo', texto: 'E se a divulgação causar danos?' },
            { tipo: 'paragrafo', texto: 'A Constituição de 1988 assegura o direito à indenização pelo dano material ou moral decorrente da violação da intimidade, da vida privada, da honra e da imagem. A Súmula 37 do Superior Tribunal de Justiça reconhece que as indenizações por danos material e moral provenientes do mesmo fato podem ser acumuladas quando os respectivos requisitos estiverem presentes.' },
            { tipo: 'paragrafo', texto: 'Os artigos 186 e 927 do Código Civil também estabelecem o dever de reparar o dano causado por ato ilícito. No caso de mensagens privadas, é necessário analisar a conduta, o dano e o vínculo entre ambos.' },
            { tipo: 'paragrafo', texto: 'A Súmula 403 do STJ dispensa a prova do prejuízo na publicação não autorizada da imagem de uma pessoa com fins econômicos ou comerciais. Esse enunciado trata especificamente do uso de imagem nessas condições e não torna toda divulgação de print automaticamente indenizável.' },
            { tipo: 'paragrafo', texto: 'Em 2021, a Terceira Turma do STJ decidiu, no Recurso Especial 1.903.273/PR, que a divulgação pública de conversas do WhatsApp sem autorização de todos os interlocutores pode ser ato ilícito e gerar responsabilidade civil por eventuais danos. O tribunal ressalvou a hipótese em que a exposição tenha a finalidade de resguardar direito próprio do destinatário.' },
            { tipo: 'paragrafo', texto: 'Para o STJ, o remetente possui uma expectativa legítima de que a mensagem ficará restrita aos interlocutores. Quando o conteúdo puder interessar a terceiros, o julgador deverá ponderar a liberdade de informação e os direitos à privacidade e à intimidade.' },
            { tipo: 'paragrafo', texto: 'O contexto é fundamental: apresentar uma conversa de modo restrito para provar uma ameaça ou defender um direito não é igual a publicá-la em uma rede social para expor ou humilhar alguém.' },
            { tipo: 'titulo', texto: 'Quais são as possíveis responsabilizações criminais?' },
            { tipo: 'subtitulo', texto: 'Divulgação de segredo — artigo 153 do Código Penal' },
            { tipo: 'paragrafo', texto: 'O artigo 153, em seu caput, pune a divulgação, sem justa causa, do conteúdo de documento particular ou correspondência confidencial de que a pessoa seja destinatária ou detentora, quando a divulgação possa causar dano a alguém. A pena prevista é de detenção de um a seis meses ou multa.' },
            { tipo: 'paragrafo', texto: 'O § 1º-A do artigo 153 não trata de uma conversa privada comum: ele se refere a informações sigilosas ou reservadas, definidas em lei, existentes em sistemas ou bancos de dados da administração pública. Por isso, não deve ser usado como fundamento automático para qualquer compartilhamento de print.' },
            { tipo: 'subtitulo', texto: 'Invasão de dispositivo informático — artigo 154-A' },
            { tipo: 'paragrafo', texto: 'Se a mensagem foi obtida mediante invasão de celular, computador, conta ou outro dispositivo de uso alheio, pode existir o crime do artigo 154-A. A pena básica atualmente prevista é de reclusão de um a quatro anos e multa.' },
            { tipo: 'paragrafo', texto: 'Quando a invasão resulta na obtenção de conteúdo de comunicações eletrônicas privadas, a pena prevista no § 3º é de reclusão de dois a cinco anos e multa. A divulgação ou transmissão a terceiros do conteúdo obtido pode aumentar essa pena, conforme o § 4º.' },
            { tipo: 'subtitulo', texto: 'Crimes contra a honra' },
            { tipo: 'paragrafo', texto: 'Dependendo do conteúdo divulgado e da forma de exposição, a conduta também pode envolver calúnia, difamação ou injúria, previstas nos artigos 138 a 140 do Código Penal. A ocorrência de cada crime exige a presença de seus elementos específicos e não pode ser presumida apenas porque houve um print.' },
            { tipo: 'subtitulo', texto: 'Dados pessoais e LGPD' },
            { tipo: 'paragrafo', texto: 'A exposição de dados pessoais ou sensíveis pode gerar consequências jurídicas, mas a aplicação da Lei Geral de Proteção de Dados depende do contexto. A LGPD exclui de sua incidência o tratamento realizado por pessoa natural para fins exclusivamente particulares e não econômicos.' },
            { tipo: 'paragrafo', texto: 'Quando aplicável, a LGPD prevê obrigações, responsabilidade civil e sanções administrativas; ela não cria, por si só, um crime específico de “vazamento de dados”. Uma mesma conduta, entretanto, pode se enquadrar em crimes previstos em outras leis.' },
            { tipo: 'titulo', texto: 'Antes de compartilhar' },
            { tipo: 'paragrafo', texto: 'É importante verificar se existe autorização, necessidade legítima e risco de exposição. Quando a conversa for relevante como prova, preserve o material original e busque orientação sobre a forma adequada e restrita de apresentá-lo, evitando divulgação pública desnecessária.' }
        ],
        dataPublicacao: '2026-08-30',
        dataAtualizacao: '2026-09-01',
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
            },
            {
                titulo: 'Lei Geral de Proteção de Dados — arts. 4º, 42 e 52',
                link: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'
            },
            {
                titulo: 'STJ — Súmulas 37 e 403',
                link: 'https://scon.stj.jus.br/SCON/sumstj/'
            },
            {
                titulo: 'Revista do Direito do UBM — Publicização de mensagens enviadas via WhatsApp',
                link: 'https://revista.ubm.br/index.php/revistadodireito/article/view/2147'
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
