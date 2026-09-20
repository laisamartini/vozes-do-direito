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
        slug: 'o-que-esta-acontecendo-com-o-stf-caso-master',
        quadro: 'jurinews',
        titulo: 'O que está acontecendo com o STF no caso Banco Master?',
        resumo: 'Entenda a crise institucional, o relatório da Polícia Federal e o que ocorreu na sessão do STF de 15 de setembro.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'Uma tensão institucional se formou no Supremo Tribunal Federal (STF) em torno das investigações relacionadas ao Banco Master. O caso envolve mensagens atribuídas ao ministro Alexandre de Moraes e ao ex-banqueiro Daniel Vorcaro, antigo controlador do banco, além de questionamentos sobre a condução e a divulgação de documentos da investigação.' },
            { tipo: 'titulo', texto: 'O que significa quebrar o sigilo?' },
            { tipo: 'paragrafo', texto: 'Quebrar ou afastar o sigilo significa permitir, por decisão da autoridade competente e nos limites nela definidos, o acesso a um conteúdo que estava protegido por restrição legal ou judicial. Isso não significa necessariamente que todo o material se torne público: o alcance depende da decisão tomada no processo.' },
            { tipo: 'titulo', texto: 'Como a crise se intensificou' },
            { tipo: 'paragrafo', texto: 'A crise ganhou força em 1º de setembro, quando o ministro André Mendonça retirou o sigilo de um relatório da Polícia Federal que reunia mensagens obtidas no celular de Daniel Vorcaro. O aparelho havia sido apreendido na Operação Compliance Zero.' },
            { tipo: 'paragrafo', texto: 'Segundo o relatório e as notícias publicadas sobre o caso, as mensagens indicariam proximidade entre Vorcaro e Moraes. Também apareceram referências ao procurador-geral da República, Paulo Gonet, e ao diretor-geral da Polícia Federal, Andrei Rodrigues. A presença dos nomes no material não equivale, por si só, à comprovação de prática ilícita: os fatos, o contexto e a regularidade da obtenção das provas precisam ser apurados.' },
            { tipo: 'paragrafo', texto: 'Em 3 de setembro, Moraes questionou a atuação de Mendonça na condução do caso. O presidente do STF, Edson Fachin, pediu manifestações dos envolvidos e afirmou que a resposta institucional deveria seguir a Constituição e a legislação, sem precipitação nem omissão.' },
            { tipo: 'paragrafo', texto: 'Fachin também defendeu a discussão de um código de ética para o Supremo e do encerramento do inquérito das fake news. As declarações ocorreram em meio ao debate público sobre transparência, imparcialidade e os limites regimentais da atuação dos ministros.' },
            { tipo: 'titulo', texto: 'O que mostra o relatório da Polícia Federal' },
            { tipo: 'paragrafo', texto: 'O documento foi elaborado a partir de dados extraídos do celular de Vorcaro. Conforme as reportagens consultadas, o relatório reúne mensagens e registros de encontros ocorridos entre fevereiro de 2024 e agosto de 2025.' },
            { tipo: 'paragrafo', texto: 'Em uma das conversas atribuídas aos envolvidos, Vorcaro teria perguntado a Moraes sobre a possibilidade de deixar o país e manifestado gratidão ao ministro. O relatório também registrou conversas em que os nomes de Paulo Gonet e Andrei Rodrigues foram mencionados.' },
            { tipo: 'paragrafo', texto: 'Esses registros precisam ser analisados dentro do procedimento judicial. Uma mensagem isolada pode não esclarecer seu contexto, sua autenticidade, a finalidade da conversa nem a existência de uma conduta juridicamente relevante.' },
            { tipo: 'titulo', texto: 'O que o STF precisava decidir?' },
            { tipo: 'paragrafo', texto: 'Antes de avaliar possíveis responsabilidades, o STF precisava examinar a regularidade do procedimento utilizado para produzir o relatório e obter as informações. A Constituição Federal determina, no artigo 5º, inciso LVI, que provas obtidas por meios ilícitos são inadmissíveis no processo.' },
            { tipo: 'paragrafo', texto: 'A análise jurídica envolve duas questões diferentes: as regras para introduzir uma prova no processo e a licitude do modo como a informação foi obtida antes de ser apresentada. O respeito ao devido processo legal é indispensável nas duas etapas.' },
            { tipo: 'paragrafo', texto: 'Entre os pontos submetidos à discussão estavam:' },
            { tipo: 'lista', itens: ['se o procedimento usado para obter as informações foi regular;', 'se o material poderia ser utilizado no processo;', 'se havia elementos que justificassem a abertura de investigação ou se o material deveria ser arquivado.'] },
            { tipo: 'titulo', texto: 'O que aconteceu na sessão de 15 de setembro?' },
            { tipo: 'paragrafo', texto: 'A sessão extraordinária foi realizada de forma pública e transmitida pelos canais oficiais do STF. Durante o julgamento, um pedido de vista do ministro Flávio Dino suspendeu a discussão sobre o julgamento conjunto das petições relacionadas ao caso Master.' },
            { tipo: 'paragrafo', texto: 'Com o pedido de vista, o mérito não foi concluído naquela sessão. Portanto, a notícia inicial sobre o que o STF “iria decidir” precisa ser lida com essa atualização: a análise ficou suspensa e deverá continuar após a devolução do processo para julgamento.' },
            { tipo: 'titulo', texto: 'Por que isso importa?' },
            { tipo: 'paragrafo', texto: 'O caso envolve a validade da prova, o devido processo legal, a transparência das instituições e a confiança pública no funcionamento do Supremo. No processo, não basta que uma informação exista ou pareça relevante: é necessário verificar se ela foi obtida e incorporada de forma juridicamente válida.' }
        ],
        dataPublicacao: '2026-09-13',
        dataAtualizacao: '2026-09-15',
        autor: 'Júlia Gabriele Schiremberck Oliveira',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['JuriNews', 'STF', 'Devido processo legal'],
        fontes: [
            {
                titulo: 'STF — Pedido de vista suspende discussão sobre petições do caso Master',
                link: 'https://noticias.stf.jus.br/postsnoticias/pedido-de-vista-suspende-discussao-sobre-julgamento-conjunto-de-duas-peticoes-do-caso-master/'
            },
            {
                titulo: 'STF — Sessão Extraordinária de 15 de setembro de 2026',
                link: 'https://www.youtube.com/watch?v=f_DVZoQLvZI'
            },
            {
                titulo: 'CNN Brasil — Entenda a crise no STF e o que pode acontecer',
                link: 'https://www.cnnbrasil.com.br/politica/entenda-a-crise-no-stf-e-o-que-pode-acontecer-a-partir-de-agora/'
            },
            {
                titulo: 'CNN Brasil — STF transmitirá sessão sobre mensagens de Moraes e Vorcaro',
                link: 'https://www.cnnbrasil.com.br/politica/stf-ira-transmitir-ao-vivo-sessao-sobre-mensagens-de-moraes-e-vorcaro/'
            },
            {
                titulo: 'Constituição Federal — art. 5º, inciso LVI',
                link: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'alvara-partes-e-peticao-o-que-significam',
        quadro: 'fala-direito',
        titulo: 'Alvará, partes e petição: o que significam?',
        resumo: 'Conheça três termos muito usados no Direito e entenda como eles aparecem em atividades administrativas e processos judiciais.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'No Fala Direito desta semana, os termos escolhidos são alvará, partes e petição. Eles aparecem com frequência em notícias, documentos e processos, mas podem ter sentidos diferentes conforme o contexto.' },
            { tipo: 'titulo', texto: 'Alvará' },
            { tipo: 'paragrafo', texto: 'Alvará é um documento oficial que autoriza a prática de determinado ato ou o exercício de uma atividade. Ele pode ser expedido por uma autoridade administrativa ou judicial. As exigências, a validade e os efeitos variam conforme o tipo de alvará e a legislação municipal, estadual ou federal aplicável.' },
            { tipo: 'paragrafo', texto: 'A solicitação pode ser feita por pessoa física, pessoa jurídica ou representante legal que demonstre interesse e cumpra os requisitos previstos para cada situação.' },
            { tipo: 'subtitulo', texto: 'Tipos comuns de alvará' },
            { tipo: 'lista', itens: ['Alvará de funcionamento ou localização: autoriza o funcionamento de determinada atividade em um local, conforme as regras do município e as características do estabelecimento.', 'Alvará judicial: é expedido por ordem judicial para autorizar a prática de um ato, como levantar valores depositados em juízo ou cumprir uma ordem de soltura.', 'Alvará ou licença sanitária: autoriza atividades que podem afetar a saúde coletiva, conforme as normas da vigilância sanitária.', 'Alvará de construção: autoriza a execução de obra, reforma ou ampliação de acordo com as regras urbanísticas locais.', 'Licença ambiental: autoriza a localização, instalação, ampliação ou operação de atividades que utilizem recursos ambientais ou possam causar impacto, conforme a legislação aplicável. Embora seja frequentemente chamada de “alvará ambiental”, a denominação técnica usual é licença ambiental.'] },
            { tipo: 'titulo', texto: 'Partes' },
            { tipo: 'paragrafo', texto: 'No processo judicial, as partes são as pessoas físicas, pessoas jurídicas ou, em determinadas hipóteses, entes sem personalidade jurídica própria que ocupam os polos da relação processual.' },
            { tipo: 'paragrafo', texto: 'Em um processo de conhecimento, o autor é quem apresenta a demanda ao Poder Judiciário, buscando o reconhecimento ou a proteção de um direito. O réu é chamado para responder à pretensão formulada. A denominação pode mudar conforme o tipo e a fase do processo, como recorrente e recorrido em um recurso, ou exequente e executado em uma execução.' },
            { tipo: 'paragrafo', texto: 'Quando duas ou mais pessoas participam conjuntamente do mesmo polo do processo, há litisconsórcio. Ele pode ser ativo, quando existe mais de um autor; passivo, quando existe mais de um réu; ou misto, quando há pluralidade nos dois polos.' },
            { tipo: 'titulo', texto: 'Petição' },
            { tipo: 'paragrafo', texto: 'Petição é o instrumento escrito pelo qual uma parte formula pedido, apresenta argumentos, fornece informações ou se manifesta perante o Poder Judiciário. Ela pode iniciar um processo ou ser apresentada durante seu andamento.' },
            { tipo: 'subtitulo', texto: 'Petição inicial' },
            { tipo: 'paragrafo', texto: 'É o documento que dá início ao processo civil e apresenta, entre outros elementos, as partes, os fatos, os fundamentos jurídicos e os pedidos. Seus requisitos gerais estão previstos no artigo 319 do Código de Processo Civil.' },
            { tipo: 'subtitulo', texto: 'Contestação' },
            { tipo: 'paragrafo', texto: 'É a principal forma de defesa do réu no procedimento comum. Nela, o réu responde aos fatos e aos pedidos apresentados pelo autor e reúne os argumentos de defesa, observando as regras e os prazos processuais.' },
            { tipo: 'subtitulo', texto: 'Petição intermediária' },
            { tipo: 'paragrafo', texto: 'Também chamada de petição incidental, é apresentada durante o andamento do processo para fazer um pedido, juntar documentos, prestar informações ou tratar de uma questão surgida depois da petição inicial.' },
            { tipo: 'subtitulo', texto: 'Petição de recurso' },
            { tipo: 'paragrafo', texto: 'É utilizada para impugnar uma decisão judicial nas hipóteses previstas em lei. O recurso adequado, os requisitos, o prazo e o órgão competente dependem da decisão e do procedimento aplicável.' },
            { tipo: 'paragrafo', texto: 'Conhecer esses termos ajuda a acompanhar documentos e notícias jurídicas com mais clareza, mas o significado e os efeitos de cada ato sempre dependem do caso concreto e da legislação aplicável.' }
        ],
        dataPublicacao: '2026-09-12',
        dataAtualizacao: '',
        autor: 'Maria Clara Matos Recalcatti',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Linguagem jurídica', 'Processo Civil', 'Acesso à Justiça'],
        fontes: [
            {
                titulo: 'Código de Processo Civil — arts. 70, 75, 113, 319, 335 e 994',
                link: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm'
            },
            {
                titulo: 'Lei nº 6.858/1980 — levantamento de valores por alvará judicial',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/l6858.htm'
            },
            {
                titulo: 'Lei Complementar nº 140/2011 — licenciamento ambiental',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp140.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'filhos-herdam-dividas-e-prisao-por-pensao',
        quadro: 'mito-ou-verdade',
        titulo: 'Filhos herdam dívidas? Quem não paga pensão pode ser preso?',
        resumo: 'Duas crenças jurídicas comuns: entenda os limites da herança de dívidas e a prisão civil por pensão alimentícia.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'No Mito ou Verdade desta semana, analisamos duas afirmações populares: se os filhos herdam as dívidas dos pais e se o não pagamento de pensão alimentícia pode levar à prisão.' },
            { tipo: 'titulo', texto: '“Filhos herdam as dívidas dos pais.”' },
            { tipo: 'subtitulo', texto: 'MITO' },
            { tipo: 'paragrafo', texto: 'No Direito brasileiro, as dívidas deixadas pela pessoa falecida são pagas pelo espólio, isto é, pelo conjunto de bens, direitos e obrigações que integra a herança. O patrimônio pessoal dos herdeiros não responde automaticamente por essas dívidas.' },
            { tipo: 'paragrafo', texto: 'Depois da partilha, cada herdeiro responde pelas dívidas do falecido dentro das forças da herança e na proporção da parte que recebeu. É o que estabelecem os artigos 1.792 e 1.997 do Código Civil e o artigo 796 do Código de Processo Civil.' },
            { tipo: 'subtitulo', texto: 'Três situações possíveis' },
            { tipo: 'lista', itens: ['Quando o valor dos bens é maior que o das dívidas: as obrigações são pagas e o que restar é dividido entre os herdeiros.', 'Quando o valor dos bens é igual ao das dívidas: o patrimônio deixado é usado para o pagamento, sem saldo de herança e sem transferência automática da dívida restante aos herdeiros.', 'Quando o valor das dívidas é maior que o dos bens: o patrimônio do espólio é usado até seu limite; em regra, o saldo não é cobrado do patrimônio pessoal dos herdeiros.'] },
            { tipo: 'subtitulo', texto: 'Quando pode existir responsabilidade pessoal?' },
            { tipo: 'paragrafo', texto: 'Há situações em que um filho ou outro herdeiro pode ter obrigação própria, mas isso não acontece simplesmente por causa do parentesco ou da herança.' },
            { tipo: 'lista', itens: ['Se o herdeiro assinou a obrigação como fiador, avalista, coobrigado ou devedor, ele pode responder nos limites do compromisso que assumiu.', 'Fraude, ocultação ou desvio de bens do espólio podem gerar responsabilização pela conduta praticada.', 'A existência de conta conjunta não transfere automaticamente todas as dívidas do falecido ao cotitular. É necessário analisar o contrato, a origem dos valores, a movimentação e a obrigação discutida.'] },
            { tipo: 'paragrafo', texto: 'A Constituição ainda afirma que nenhuma pena passa da pessoa do condenado, embora a obrigação de reparar o dano e a perda de bens possam alcançar os sucessores até o limite do patrimônio transferido.' },
            { tipo: 'titulo', texto: '“Pai ou mãe que não paga pensão pode ser preso.”' },
            { tipo: 'subtitulo', texto: 'VERDADE' },
            { tipo: 'paragrafo', texto: 'O não pagamento injustificado de pensão alimentícia pode levar à prisão civil do devedor. Trata-se de medida coercitiva destinada a pressionar o cumprimento da obrigação alimentar, e não de pena criminal.' },
            { tipo: 'paragrafo', texto: 'Pelo artigo 528 do Código de Processo Civil, o juiz pode decretar prisão de um a três meses, em regime fechado e com separação dos presos comuns, quando o devedor não paga, não prova que pagou nem apresenta justificativa aceita pelo juízo.' },
            { tipo: 'paragrafo', texto: 'Segundo a Súmula 309 do Superior Tribunal de Justiça, a prisão civil pode ser usada para cobrar as três prestações anteriores ao ajuizamento da execução e as que vencerem durante o processo. Parcelas mais antigas podem continuar sendo cobradas por outros meios patrimoniais.' },
            { tipo: 'paragrafo', texto: 'Cumprir o período de prisão não apaga a dívida. O valor continua devido e pode ser cobrado. Além disso, a prisão não é automática: depende de processo judicial, intimação do devedor e análise da justificativa apresentada.' },
            { tipo: 'paragrafo', texto: 'Na prática brasileira, a dívida alimentar é a hipótese admitida de prisão civil por dívida, conforme a Constituição, o Código de Processo Civil e a interpretação consolidada pelos tribunais.' }
        ],
        dataPublicacao: '2026-09-03',
        dataAtualizacao: '',
        autor: 'Maria Clara Matos Recalcatti',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Mito ou Verdade', 'Direito das Sucessões', 'Pensão alimentícia'],
        fontes: [
            {
                titulo: 'Constituição Federal — art. 5º, incisos XLV e LXVII',
                link: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'
            },
            {
                titulo: 'Código Civil — arts. 1.792 e 1.997',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
            },
            {
                titulo: 'Código de Processo Civil — arts. 528 e 796',
                link: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm'
            },
            {
                titulo: 'STJ — Súmula 309',
                link: 'https://scon.stj.jus.br/SCON/sumstj/doc.jsp?b=SUMU&i=1&l=10&livre=%40num%3D%27309%27&operador=E&ordenacao=-%40NUM&p=false'
            },
            {
                titulo: 'Ministério Público do Paraná — Prisões civis',
                link: 'https://mppr.mp.br/Noticia/Prisoes-civis'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'primeiras-vezes-do-direito-marcos-historicos',
        quadro: 'vale-a-pena-ver-direito',
        titulo: 'As primeiras vezes do Direito: quatro marcos históricos',
        resumo: 'Da Universidade de Bolonha às primeiras Constituições: conheça marcos da formação jurídica no Brasil e no mundo.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'A história do Direito é marcada por instituições e documentos que transformaram o ensino jurídico e a organização dos Estados. Reunimos quatro dessas “primeiras vezes” para entender como ideias antigas ainda influenciam o presente.' },
            { tipo: 'titulo', texto: 'A tradição jurídica da Universidade de Bolonha' },
            { tipo: 'paragrafo', texto: 'A Universidade de Bolonha, no centro-norte da Itália, é tradicionalmente datada de 1088 e reconhecida como a universidade mais antiga do mundo ocidental em funcionamento contínuo. Seu Studium surgiu de associações de estudantes e ganhou destaque pelo ensino do Direito.' },
            { tipo: 'paragrafo', texto: 'Entre os primeiros mestres ligados à instituição estava Irnério, que estudou e difundiu de forma sistemática o Corpus Iuris Civilis, compilação do Direito romano que se tornou uma das bases da tradição jurídica europeia. O trabalho desenvolvido em Bolonha fortaleceu o estudo do Direito escrito, a argumentação jurídica e a interpretação organizada dos textos.' },
            { tipo: 'paragrafo', texto: 'Por isso, embora não se tratasse de um “curso” estruturado exatamente como os atuais, Bolonha ocupa um lugar central na história do ensino jurídico.' },
            { tipo: 'titulo', texto: 'Os primeiros cursos de Direito no Brasil' },
            { tipo: 'paragrafo', texto: 'Os primeiros cursos jurídicos brasileiros foram criados pela Lei de 11 de agosto de 1827, sancionada por Dom Pedro I. Foram instalados um em São Paulo e outro em Olinda, Pernambuco.' },
            { tipo: 'paragrafo', texto: 'O curso de São Paulo deu origem à atual Faculdade de Direito da Universidade de São Paulo. O de Olinda foi transferido posteriormente para Recife e está ligado à atual Faculdade de Direito da Universidade Federal de Pernambuco.' },
            { tipo: 'paragrafo', texto: 'A data de 11 de agosto é lembrada no Brasil como Dia do Advogado e também se relaciona às comemorações do Dia do Estudante.' },
            { tipo: 'titulo', texto: 'A Constituição dos Estados Unidos de 1787' },
            { tipo: 'paragrafo', texto: 'Assinada em 17 de setembro de 1787, a Constituição dos Estados Unidos é a mais antiga Constituição nacional escrita ainda em vigor. O documento organizou o governo federal, distribuiu competências e estruturou os poderes Legislativo, Executivo e Judiciário.' },
            { tipo: 'paragrafo', texto: 'Ela também consolidou o federalismo norte-americano, repartindo poderes entre a União e os estados. O texto original recebeu emendas ao longo do tempo, incluindo as dez primeiras, conhecidas como Bill of Rights.' },
            { tipo: 'paragrafo', texto: 'É mais preciso chamá-la de Constituição nacional escrita mais antiga ainda vigente do que simplesmente de “primeira Constituição escrita do mundo”, pois existiram documentos constitucionais anteriores com características e contextos diferentes.' },
            { tipo: 'titulo', texto: 'A primeira Constituição do Brasil' },
            { tipo: 'paragrafo', texto: 'A primeira Constituição brasileira foi outorgada por Dom Pedro I em 25 de março de 1824, depois da dissolução da Assembleia Constituinte de 1823. Ela permaneceu em vigor durante todo o Império.' },
            { tipo: 'paragrafo', texto: 'Entre suas características estavam o governo monárquico hereditário, o voto censitário e indireto em parte do processo eleitoral, a nomeação dos presidentes das províncias pelo imperador e a existência de quatro poderes: Legislativo, Executivo, Judiciário e Moderador.' },
            { tipo: 'subtitulo', texto: 'O que era o Poder Moderador?' },
            { tipo: 'paragrafo', texto: 'O Poder Moderador era exercido pelo imperador e apresentado pela Constituição como a chave da organização política. Ele permitia ao monarca intervir no funcionamento dos demais poderes por meio das atribuições previstas no texto constitucional.' },
            { tipo: 'subtitulo', texto: 'O que era o voto censitário?' },
            { tipo: 'paragrafo', texto: 'Era um sistema que condicionava a participação eleitoral a critérios econômicos, especialmente renda. Isso restringia o direito de votar e de ser eleito a uma parcela da população.' },
            { tipo: 'paragrafo', texto: 'Esses marcos mostram que o Direito não surgiu pronto. Suas instituições e conceitos foram construídos em contextos históricos específicos e continuam sendo reinterpretados ao longo do tempo.' }
        ],
        dataPublicacao: '2026-08-31',
        dataAtualizacao: '',
        autor: 'Maria Clara Matos Recalcatti',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['História do Direito', 'Ensino jurídico', 'Constituição'],
        fontes: [
            {
                titulo: 'Universidade de Bolonha — The birth of the Studium and the Commune',
                link: 'https://www.unibo.it/en/university/who-we-are/our-history/nine-centuries-of-history/the-birth-of-the-studium-and-the-commune'
            },
            {
                titulo: 'Câmara dos Deputados — Lei de 11 de agosto de 1827',
                link: 'https://www2.camara.leg.br/legin/fed/lei_sn/1824-1899/lei-38401-11-agosto-1827-566698-publicacaooriginal-90225-pl.html'
            },
            {
                titulo: 'National Archives — Constitution of the United States (1787)',
                link: 'https://www.archives.gov/milestone-documents/constitution'
            },
            {
                titulo: 'Senado Federal — Constituição Política do Império do Brasil de 1824',
                link: 'https://www2.senado.leg.br/bdsf/handle/id/137569'
            },
            {
                titulo: 'Senado Federal — História das Constituições brasileiras',
                link: 'https://www.senado.gov.br/noticias/especiais/constituicao25anos/historia-das-constituicoes.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
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
