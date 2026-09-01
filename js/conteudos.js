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
        dataPublicacao: '2026-09-01',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: '',
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
        dataPublicacao: '2026-09-01',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: '',
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
        dataPublicacao: '2026-09-01',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: '',
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
    },
    {
        slug: 'o-que-e-uma-liminar',
        quadro: 'fala-direito',
        titulo: 'O que é uma liminar?',
        resumo: 'Entenda o que é essa decisão judicial e por que ela pode ser concedida antes do julgamento definitivo.',
        conteudo: [
            'A liminar é uma decisão judicial concedida no início do processo ou antes do julgamento definitivo, quando a situação exige uma resposta mais rápida da Justiça.',
            'Nos casos de urgência, o juiz analisa se existem elementos que indiquem a probabilidade do direito e o perigo de dano ou de prejuízo ao resultado do processo. Dependendo do caso, a decisão pode ser tomada antes mesmo de a outra parte ser ouvida.',
            'A medida é provisória e continua produzindo efeitos enquanto estiver válida. Entretanto, pode ser modificada ou revogada pelo juiz a qualquer momento durante o processo.',
            'Um exemplo comum ocorre quando uma pessoa pede judicialmente o fornecimento urgente de um medicamento essencial. Se a espera pelo julgamento puder causar um dano grave, o juiz poderá analisar a concessão de uma liminar.',
            'A concessão não significa que a pessoa já venceu definitivamente o processo. A questão ainda será analisada de maneira mais completa antes da decisão final.'
        ],
        dataPublicacao: '2026-08-03',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Processo Civil', 'Tutela provisória', 'Acesso à Justiça'],
        fontes: [
            {
                titulo: 'Código de Processo Civil — arts. 294, 296 e 300',
                link: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'contrato-verbal-nao-tem-validade',
        quadro: 'mito-ou-verdade',
        titulo: 'Contrato verbal não tem validade: mito ou verdade?',
        resumo: 'Descubra quando um acordo feito apenas de forma verbal pode produzir efeitos jurídicos.',
        conteudo: [
            'Mito. Em muitas situações, um contrato verbal pode ser válido. O Código Civil estabelece que a declaração de vontade não depende de uma forma especial, a menos que a lei exija expressamente determinada formalidade.',
            'Isso significa que duas pessoas podem assumir obrigações por meio de uma conversa e, mesmo sem documento assinado, o acordo pode produzir efeitos jurídicos.',
            'Existem exceções. A lei exige forma específica para determinados negócios. Um exemplo é a escritura pública, em regra necessária para negócios que envolvam direitos reais sobre imóveis com valor superior a trinta salários mínimos.',
            'O principal problema do contrato verbal costuma ser a prova. Se surgir uma discussão, mensagens, comprovantes, testemunhas e outros registros podem ser importantes para demonstrar o que foi combinado.',
            'Por isso, sempre que possível, registrar o acordo por escrito ajuda a deixar claros os direitos, os deveres, os prazos e as condições de cada parte.'
        ],
        dataPublicacao: '2026-08-03',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Direito Civil', 'Contratos'],
        fontes: [
            {
                titulo: 'Código Civil — arts. 107 e 108',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'cobranca-nao-pode-constranger-consumidor',
        quadro: 'normal-nao-e-legal',
        titulo: 'Cobrar uma dívida pode. Constranger o consumidor, não.',
        resumo: 'Estar devendo não autoriza ameaças, humilhações nem exposição pública durante a cobrança.',
        conteudo: [
            'A cobrança de uma dívida é permitida, mas precisa respeitar limites. O Código de Defesa do Consumidor proíbe que a pessoa inadimplente seja exposta ao ridículo ou submetida a constrangimento ou ameaça.',
            'Por isso, divulgar a dívida para colegas, familiares ou vizinhos, usar linguagem ofensiva ou fazer ameaças não são formas normais de cobrança e podem violar os direitos do consumidor.',
            'O fornecedor pode entrar em contato para informar o débito e buscar uma negociação. O que muda a situação é a maneira utilizada: a comunicação deve ser respeitosa, identificada e dirigida à própria pessoa responsável pela dívida.',
            'Guardar mensagens, e-mails, números de protocolo e outros registros pode ajudar a demonstrar como a cobrança aconteceu.',
            'Cada caso precisa ser analisado de acordo com suas circunstâncias. Este conteúdo é educativo e não substitui orientação jurídica individual.'
        ],
        dataPublicacao: '2026-08-03',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Direito do Consumidor', 'Cobrança'],
        fontes: [
            {
                titulo: 'Código de Defesa do Consumidor — art. 42',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'stj-assedio-consumo-idosos-consignado',
        quadro: 'jurinews',
        titulo: 'STJ considera abusiva visita não solicitada a idosos para oferecer consignado',
        resumo: 'Tribunal entendeu que a oferta de empréstimo na casa de idosos, sem pedido prévio, configura assédio de consumo.',
        conteudo: [
            'Em decisão divulgada em 24 de julho de 2026, a Terceira Turma do Superior Tribunal de Justiça manteve a condenação de instituições financeiras por visitas domiciliares não solicitadas a idosos para oferecer empréstimos consignados.',
            'Segundo o tribunal, essa prática configura assédio de consumo porque explora a vulnerabilidade especial da pessoa idosa e contraria as regras de proteção do Código de Defesa do Consumidor.',
            'O STJ também afirmou que os bancos respondem pela atuação dos correspondentes bancários que os representam. Assim, a instituição financeira não pode simplesmente afastar sua responsabilidade pelo modo como a oferta foi realizada.',
            'A decisão não significa que toda visita domiciliar seja automaticamente proibida. O ponto central do caso foi a abordagem comercial não solicitada, dirigida a idosos, para a oferta de crédito consignado.',
            'O julgamento ocorreu no Recurso Especial 2.226.633. A notícia apresenta o entendimento adotado nesse caso e não substitui a análise de outras situações concretas.'
        ],
        dataPublicacao: '2026-08-03',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Jurisprudência', 'Direito do Consumidor', 'Pessoa idosa'],
        fontes: [
            {
                titulo: 'STJ — Visita não solicitada a idosos para oferecer empréstimo consignado é assédio de consumo',
                link: 'https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/24072026-Visita-nao-solicitada-a-idosos-para-oferecer-emprestimo-consignado-e-assedio-de-consumo.aspx'
            },
            {
                titulo: 'Código de Defesa do Consumidor — arts. 39 e 54-C',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'posso-desistir-de-compra-pela-internet',
        quadro: 'pergunta-da-semana',
        titulo: 'Posso desistir de uma compra feita pela internet?',
        resumo: 'Entenda o direito de arrependimento e o prazo previsto para compras realizadas fora do estabelecimento comercial.',
        conteudo: [
            'Em regra, sim. O Código de Defesa do Consumidor permite desistir de uma contratação feita fora do estabelecimento comercial, como ocorre normalmente em compras pela internet ou por telefone.',
            'O prazo é de sete dias, contado da assinatura do contrato ou do recebimento do produto ou serviço. Esse direito é conhecido como direito de arrependimento.',
            'Quando o direito é exercido dentro do prazo, os valores pagos devem ser devolvidos de imediato, com atualização monetária. O Decreto do Comércio Eletrônico também determina que o fornecedor informe meios claros para o consumidor comunicar a desistência.',
            'A regra dos sete dias não se aplica automaticamente às compras feitas dentro de uma loja física apenas porque a pessoa mudou de ideia. Nessa situação, a possibilidade de troca ou devolução depende da política oferecida pelo estabelecimento, salvo quando existe defeito ou outra irregularidade.',
            'É recomendável guardar a confirmação do pedido de cancelamento e os comprovantes da compra. Situações específicas podem depender do produto, do serviço e das condições da contratação.'
        ],
        dataPublicacao: '2026-08-03',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Direito do Consumidor', 'Compras online'],
        fontes: [
            {
                titulo: 'Código de Defesa do Consumidor — art. 49',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
            },
            {
                titulo: 'Decreto do Comércio Eletrônico — art. 5º',
                link: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'vale-a-pena-ver-amicus-curiae',
        quadro: 'vale-a-pena-ver-direito',
        titulo: 'Vale a pena ver: o que é amicus curiae?',
        resumo: 'Um conteúdo curto do STF explica como o “amigo da corte” pode contribuir em julgamentos relevantes.',
        conteudo: [
            'A expressão latina amicus curiae significa “amigo da corte”. Ela identifica a pessoa, o órgão ou a entidade admitida em um processo para oferecer informações e argumentos que ajudem o tribunal a compreender melhor uma questão relevante.',
            'O amicus curiae não ocupa exatamente a mesma posição das partes do processo. Sua participação busca ampliar e qualificar o debate, especialmente quando a decisão pode afetar grupos sociais ou produzir efeitos que ultrapassam o caso individual.',
            'O episódio do projeto Direito sem Juridiquês, produzido pelo Supremo Tribunal Federal, apresenta esse conceito em linguagem acessível e mostra por que diferentes perspectivas podem ser importantes em julgamentos de grande repercussão.',
            'Vale a pena assistir porque o tema aproxima processo, participação social e democracia. É também um bom exemplo de como expressões jurídicas podem ser explicadas sem perder a precisão.',
            'Depois de assistir, observe uma pergunta central: de que maneira a participação de especialistas e entidades pode melhorar a qualidade de uma decisão judicial?'
        ],
        dataPublicacao: '2026-08-03',
        dataAtualizacao: '',
        autor: 'Equipe Vozes do Direito',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Processo', 'Participação social', 'STF'],
        fontes: [
            {
                titulo: 'STF — Direito sem Juridiquês: novo episódio explica o que é amicus curiae',
                link: 'https://noticias.stf.jus.br/postsnoticias/direito-sem-juridiques-novo-episodio-explica-o-que-e-amicus-curiae/'
            },
            {
                titulo: 'Código de Processo Civil — art. 138',
                link: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
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
