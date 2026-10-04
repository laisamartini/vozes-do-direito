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
        slug: 'patrimonio-dos-socios-e-uniao-estavel-mito-ou-verdade',
        quadro: 'mito-ou-verdade',
        titulo: 'Patrimônio dos sócios e união estável: mito ou verdade?',
        resumo: 'Entenda a autonomia patrimonial da empresa e em que medida os direitos da união estável se aproximam dos direitos do casamento.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'Nesta edição do Mito ou Verdade, analisamos duas afirmações frequentes: se o patrimônio dos sócios é igual ao patrimônio da empresa e se a união estável garante os mesmos direitos que o casamento.' },
            { tipo: 'titulo', texto: '“O patrimônio dos sócios é igual ao patrimônio da empresa.”' },
            { tipo: 'subtitulo', texto: 'MITO' },
            { tipo: 'paragrafo', texto: 'A pessoa jurídica possui personalidade própria e, em regra, não se confunde com as pessoas que a integram. Por isso, os bens, direitos e obrigações da empresa são separados do patrimônio particular de seus sócios.' },
            { tipo: 'paragrafo', texto: 'O artigo 49-A do Código Civil chama essa separação de autonomia patrimonial da pessoa jurídica. A regra protege a organização da atividade econômica e permite que os riscos assumidos pela empresa não sejam automaticamente transferidos ao patrimônio pessoal dos sócios.' },
            { tipo: 'titulo', texto: 'Quando os bens pessoais podem ser atingidos?' },
            { tipo: 'paragrafo', texto: 'A separação patrimonial não pode ser utilizada para praticar abusos. O artigo 50 do Código Civil permite a desconsideração da personalidade jurídica quando houver abuso caracterizado por desvio de finalidade ou confusão patrimonial.' },
            { tipo: 'subtitulo', texto: 'Desvio de finalidade' },
            { tipo: 'paragrafo', texto: 'Ocorre quando a pessoa jurídica é utilizada com o propósito de lesar credores ou praticar atos ilícitos. Não basta que a empresa tenha dívidas ou enfrente dificuldades financeiras: é necessário demonstrar os requisitos previstos em lei.' },
            { tipo: 'subtitulo', texto: 'Confusão patrimonial' },
            { tipo: 'paragrafo', texto: 'Acontece quando, na prática, não existe separação entre o patrimônio da empresa e o de seus sócios, como no pagamento repetido de obrigações pessoais com recursos empresariais ou na transferência de bens sem contraprestação efetiva, conforme as hipóteses legais.' },
            { tipo: 'paragrafo', texto: 'Nessas situações, o juiz pode estender determinadas obrigações aos bens particulares dos administradores ou sócios beneficiados direta ou indiretamente pelo abuso. A medida é excepcional e não significa que a empresa deixe de existir nem que todos os patrimônios sejam permanentemente unidos.' },
            { tipo: 'titulo', texto: '“A união estável garante os mesmos direitos que o casamento.”' },
            { tipo: 'subtitulo', texto: 'VERDADE, COM RESSALVAS' },
            { tipo: 'paragrafo', texto: 'A união estável é reconhecida como entidade familiar quando existe convivência pública, contínua e duradoura, estabelecida com o objetivo de constituição de família. Diferentemente do casamento, ela pode existir sem cerimônia ou registro em cartório, desde que seus requisitos estejam presentes.' },
            { tipo: 'paragrafo', texto: 'Casamento e união estável recebem proteção jurídica e produzem importantes direitos e deveres familiares. Entretanto, não são institutos formalmente idênticos: o casamento depende de habilitação e celebração, gera certidão e altera o estado civil; a união estável pode precisar ser comprovada quando não foi formalizada e não altera o estado civil dos conviventes.' },
            { tipo: 'titulo', texto: 'Direitos e deveres na união estável' },
            { tipo: 'paragrafo', texto: 'O Código Civil estabelece para os companheiros deveres de lealdade, respeito e assistência, além da guarda, do sustento e da educação dos filhos. Se o casal não fizer contrato escrito escolhendo outro regime, aplica-se, em regra, a comunhão parcial de bens.' },
            { tipo: 'paragrafo', texto: 'No campo sucessório, o Supremo Tribunal Federal considerou inconstitucional diferenciar o regime de sucessão do cônjuge e do companheiro. Assim, deve ser aplicado à união estável o regime sucessório previsto para o casamento, observadas as circunstâncias do caso concreto.' },
            { tipo: 'paragrafo', texto: 'Por isso, dizer que a união estável não gera direitos é mito. Ao mesmo tempo, afirmar que ela é igual ao casamento em todos os aspectos também seria impreciso. Há proteção jurídica semelhante em diversos temas, mas permanecem diferenças de forma, prova e constituição do vínculo.' },
            { tipo: 'titulo', texto: 'Em resumo' },
            { tipo: 'lista', itens: ['O patrimônio da pessoa jurídica é, em regra, separado do patrimônio dos sócios.', 'A desconsideração pode alcançar bens particulares quando estiverem presentes os requisitos legais de abuso.', 'A união estável é uma entidade familiar protegida pelo Direito e produz direitos e deveres.', 'Casamento e união estável possuem efeitos semelhantes em diferentes áreas, mas não são formalmente idênticos.'] },
            { tipo: 'paragrafo', texto: 'Este conteúdo tem finalidade educativa. Questões patrimoniais, empresariais, familiares e sucessórias dependem dos documentos e das circunstâncias de cada caso.' }
        ],
        dataPublicacao: '2026-09-28',
        dataAtualizacao: '',
        autor: 'Maria Clara Matos Recalcatti',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Mito ou Verdade', 'Direito Empresarial', 'Direito de Família'],
        fontes: [
            {
                titulo: 'Código Civil — arts. 49-A, 50 e 1.723 a 1.727',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
            },
            {
                titulo: 'Constituição Federal — art. 226',
                link: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'
            },
            {
                titulo: 'STF — Tema 809 da repercussão geral',
                link: 'https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=809'
            },
            {
                titulo: 'Defensoria Pública de Mato Grosso — diferenças entre casamento e união estável',
                link: 'https://www.defensoria.mt.def.br/dpmt/noticias/casamento-ou-uniao-estavel-defensora-explica-a-diferenca-entre-as-duas-formas-de-constituicao-familiar'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'foto-na-rua-pode-ser-publicada-sem-permissao',
        quadro: 'pergunta-da-semana',
        titulo: 'Se alguém tirar uma foto minha na rua, pode publicar sem a minha permissão?',
        resumo: 'Estar em um local público não elimina o direito à imagem: finalidade, destaque, contexto e possíveis danos influenciam a análise.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'A resposta não é simplesmente “sim” ou “não”. Estar em uma rua, praça, show ou manifestação não elimina automaticamente o direito à imagem. Ao mesmo tempo, nem toda fotografia feita em local público depende de autorização individual de todas as pessoas que aparecem no enquadramento.' },
            { tipo: 'titulo', texto: 'O que a legislação protege?' },
            { tipo: 'paragrafo', texto: 'A Constituição Federal protege a intimidade, a vida privada, a honra e a imagem das pessoas e assegura indenização quando esses direitos são violados. O Código Civil também permite impedir a exposição ou utilização da imagem e buscar reparação nas situações previstas em lei.' },
            { tipo: 'paragrafo', texto: 'Publicar a própria fotografia em uma rede social não concede uma autorização geral para que qualquer pessoa a copie e reutilize. A possibilidade de republicação depende do contexto, da finalidade, da autorização concedida e dos limites aplicáveis ao caso.' },
            { tipo: 'titulo', texto: 'Quando a publicação pode violar direitos?' },
            { tipo: 'lista', itens: ['quando a pessoa é o foco principal da fotografia e sua imagem é divulgada sem consentimento em contexto privado, vexatório ou depreciativo;', 'quando a fotografia é utilizada em anúncio, campanha, perfil comercial ou outra finalidade econômica sem autorização;', 'quando são feitas montagens, memes ofensivos ou associações falsas capazes de atingir a honra e a reputação;', 'quando a publicação expõe momentos de vulnerabilidade, dados pessoais, rotina ou informações íntimas;', 'quando a imagem é usada para criar perfil falso, praticar fraude ou se passar pela pessoa retratada.'] },
            { tipo: 'titulo', texto: 'Uso comercial sem autorização' },
            { tipo: 'paragrafo', texto: 'O uso econômico ou publicitário é uma das hipóteses mais claras de proteção. A Súmula 403 do Superior Tribunal de Justiça estabelece que a indenização pela publicação não autorizada da imagem de uma pessoa com fins econômicos ou comerciais independe da prova do prejuízo.' },
            { tipo: 'paragrafo', texto: 'Assim, uma empresa, marca ou influenciador não deve usar a fotografia de alguém para promover produtos, serviços ou a própria atividade comercial sem a autorização necessária.' },
            { tipo: 'titulo', texto: 'E as fotografias feitas em locais públicos?' },
            { tipo: 'paragrafo', texto: 'O fato de a fotografia ter sido feita na rua não autoriza qualquer uso. Contudo, o contexto pode afastar a necessidade de consentimento, especialmente quando a pessoa aparece apenas como elemento acessório de uma imagem ampla de evento ou espaço público, sem exploração comercial individual e sem exposição ofensiva.' },
            { tipo: 'paragrafo', texto: 'Também podem existir situações de interesse jornalístico, histórico ou público. Nesses casos, é necessário equilibrar liberdade de informação e direitos da personalidade. A finalidade informativa não permite sensacionalismo, descontextualização ou exposição desnecessária da intimidade.' },
            { tipo: 'titulo', texto: 'Pessoas públicas também possuem direito à imagem' },
            { tipo: 'paragrafo', texto: 'Políticos, artistas e outras pessoas conhecidas podem estar sujeitas a maior exposição em fatos relacionados à atividade pública ou de interesse coletivo. Isso não significa que perderam o direito à imagem, à honra e à vida privada. O uso exclusivamente econômico e publicitário sem autorização continua podendo gerar responsabilidade.' },
            { tipo: 'titulo', texto: 'Proteção de crianças e adolescentes' },
            { tipo: 'paragrafo', texto: 'Crianças e adolescentes recebem proteção especial. O Estatuto da Criança e do Adolescente determina que o direito ao respeito abrange a preservação da imagem, da identidade e da integridade moral. Pais, responsáveis, instituições, empresas e usuários das redes devem considerar o melhor interesse da criança antes de publicar ou compartilhar imagens.' },
            { tipo: 'titulo', texto: 'O que fazer diante de uma publicação indevida?' },
            { tipo: 'lista', itens: ['Registre a publicação com capturas de tela que mostrem perfil, data, endereço eletrônico e contexto.', 'Solicite ao responsável a remoção da imagem e guarde a conversa ou o protocolo.', 'Utilize o canal de denúncia da plataforma quando a publicação violar suas regras.', 'Se houver dano, exposição grave, fraude ou uso comercial, procure orientação jurídica para avaliar as medidas cabíveis.'] },
            { tipo: 'titulo', texto: 'Resposta curta' },
            { tipo: 'paragrafo', texto: 'Uma pessoa pode fotografar e publicar determinadas cenas ocorridas em locais públicos, especialmente quando há interesse informativo ou quando alguém aparece apenas de forma acessória. Porém, estar na rua não significa renunciar ao direito à imagem. Destaque individual, finalidade comercial, contexto ofensivo, exposição da intimidade e prejuízo à pessoa retratada podem tornar a publicação ilícita.' },
            { tipo: 'paragrafo', texto: 'Este conteúdo tem finalidade educativa. A existência de violação e o cabimento de indenização dependem da finalidade, do contexto e das provas de cada situação.' }
        ],
        dataPublicacao: '2026-09-24',
        dataAtualizacao: '',
        autor: 'Júlia Gabriele Schiremberck Oliveira',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Direito à imagem', 'Privacidade', 'Redes sociais'],
        fontes: [
            {
                titulo: 'Constituição Federal — art. 5º, incisos V, IX, X e XIV',
                link: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'
            },
            {
                titulo: 'Código Civil — arts. 11, 12, 20, 21, 186 e 927',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
            },
            {
                titulo: 'STJ — Súmula 403',
                link: 'https://scon.stj.jus.br/SCON/sumstj/doc.jsp?b=SUMU&i=1&l=10&livre=%22403%22+INPATH%28NUM%29&operador=AND&ordenacao=-%40NUM&p=false'
            },
            {
                titulo: 'Estatuto da Criança e do Adolescente — arts. 17 e 18',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/l8069.htm'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'empregador-pode-exigir-respostas-no-whatsapp-durante-o-descanso',
        quadro: 'normal-nao-e-legal',
        titulo: 'O empregador pode exigir respostas no WhatsApp durante o período de descanso?',
        resumo: 'Entenda os limites do contato profissional fora do expediente e como o direito à desconexão protege o descanso do trabalhador.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'A tecnologia tornou a comunicação no trabalho mais rápida, mas também aproximou o expediente dos momentos que deveriam ser destinados ao descanso. Mensagens, ligações e solicitações por aplicativos como o WhatsApp podem fazer com que o empregado permaneça conectado às atividades profissionais mesmo depois de encerrar sua jornada.' },
            { tipo: 'titulo', texto: 'O direito ao descanso' },
            { tipo: 'paragrafo', texto: 'A Consolidação das Leis do Trabalho assegura períodos mínimos de descanso. O artigo 66 prevê, em regra, pelo menos 11 horas consecutivas entre duas jornadas. O artigo 71 disciplina o intervalo para repouso e alimentação durante a jornada, enquanto a Constituição Federal garante, entre outros direitos, o repouso semanal remunerado e as férias anuais remuneradas.' },
            { tipo: 'paragrafo', texto: 'Esses intervalos não são simples pausas sem importância. Eles ajudam a preservar a saúde, a segurança, o convívio familiar, o lazer e a dignidade do trabalhador.' },
            { tipo: 'titulo', texto: 'O que é o direito à desconexão?' },
            { tipo: 'paragrafo', texto: 'O direito à desconexão é compreendido como o direito de se afastar efetivamente do trabalho durante os períodos de descanso. Não significa um direito de nunca trabalhar, mas a possibilidade de interromper as obrigações profissionais ao final da jornada e usufruir o tempo livre sem permanecer à disposição do empregador.' },
            { tipo: 'paragrafo', texto: 'Embora a legislação brasileira não reúna esse direito em um único artigo com essa denominação, ele é relacionado pela doutrina aos direitos fundamentais à intimidade, à vida privada, ao lazer, ao repouso, às férias, à saúde e à dignidade da pessoa humana.' },
            { tipo: 'titulo', texto: 'Hiperconectividade e relações de trabalho' },
            { tipo: 'paragrafo', texto: 'A facilidade de contato proporcionada pelos celulares pode produzir uma expectativa de disponibilidade permanente. Quando o trabalhador precisa conferir mensagens, atender ligações ou resolver demandas durante o descanso, a fronteira entre tempo de trabalho e vida pessoal se enfraquece.' },
            { tipo: 'paragrafo', texto: 'A conexão excessiva pode prejudicar o sono, o lazer, as relações familiares e a recuperação física e mental. Estudos sobre o tema associam a hiperconectividade profissional a riscos de esgotamento, ansiedade e adoecimento ocupacional.' },
            { tipo: 'titulo', texto: 'O empregador pode mandar mensagens fora do horário?' },
            { tipo: 'paragrafo', texto: 'O simples envio eventual de uma mensagem fora do expediente não permite concluir, sozinho, que houve uma infração trabalhista. A análise depende do contexto: frequência dos contatos, urgência real, exigência de resposta imediata, existência de punição ou cobrança, tempo gasto na tarefa e grau de controle exercido pelo empregador.' },
            { tipo: 'paragrafo', texto: 'Quando as mensagens se transformam em trabalho efetivamente realizado fora da jornada, o período pode repercutir no cálculo do tempo de serviço e das horas extraordinárias, conforme as circunstâncias e as provas disponíveis. Se o empregado permanece submetido a controle e precisa aguardar, a qualquer momento, um chamado durante o descanso, também pode haver discussão sobre regime de sobreaviso.' },
            { tipo: 'titulo', texto: 'Celular ligado não significa sobreaviso automaticamente' },
            { tipo: 'paragrafo', texto: 'A Súmula 428 do Tribunal Superior do Trabalho esclarece que o simples uso de instrumentos telemáticos ou informatizados fornecidos pela empresa não caracteriza, por si só, o regime de sobreaviso.' },
            { tipo: 'paragrafo', texto: 'Segundo o mesmo entendimento, há sobreaviso quando o empregado, à distância e submetido ao controle do empregador por meios informatizados ou telemáticos, permanece em plantão ou situação equivalente, aguardando ser chamado a qualquer momento durante o período de descanso.' },
            { tipo: 'titulo', texto: 'O cenário internacional' },
            { tipo: 'paragrafo', texto: 'A discussão não ocorre apenas no Brasil. Países como França e Itália adotaram regras relacionadas à desconexão e à organização do contato profissional fora do expediente. Essas experiências procuram enfrentar os impactos da tecnologia sobre a duração do trabalho e a proteção do tempo de descanso.' },
            { tipo: 'titulo', texto: 'Normal não é legal' },
            { tipo: 'paragrafo', texto: 'A disponibilidade permanente não deve ser tratada como consequência normal do uso do celular. O contato fora do horário precisa respeitar os períodos de descanso e as regras aplicáveis à jornada. Empresas podem contribuir com políticas claras sobre horários, canais de urgência e expectativas de resposta.' },
            { tipo: 'paragrafo', texto: 'Para o trabalhador, é importante preservar mensagens, registros de chamadas, orientações e comprovantes das tarefas realizadas fora do expediente. A existência de horas extras, sobreaviso ou outra violação depende da análise do caso concreto.' },
            { tipo: 'paragrafo', texto: 'Este conteúdo tem finalidade educativa e não substitui orientação jurídica individualizada.' }
        ],
        dataPublicacao: '2026-09-19',
        dataAtualizacao: '',
        autor: 'Júlia Gabriele Schiremberck Oliveira',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Direito do Trabalho', 'Direito à desconexão', 'Jornada de trabalho'],
        fontes: [
            { titulo: 'Consolidação das Leis do Trabalho — arts. 4º, 6º, 66 e 71', link: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm' },
            { titulo: 'Constituição Federal — art. 7º', link: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
            { titulo: 'Tribunal Superior do Trabalho — Súmula 428 e regime de sobreaviso', link: 'https://www.tst.jus.br/-/nova-redacao-da-sumula-428-reconhece-sobreaviso-em-escala-com-celular' },
            { titulo: 'Revista do TST — O direito à desconexão na era digital e os novos desafios para a saúde do trabalhador', link: 'https://revista.tst.jus.br/rtst/article/view/181' },
            { titulo: 'Revista Direito e Práxis — Direito fundamental ao trabalho digno e direito à desconexão', link: 'https://www.scielo.br/j/rdp/a/vTD5ZcbfDK8Z73whxrfK7kG/?format=html&lang=pt' }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
    {
        slug: 'leis-estranhas-que-ja-existiram-no-brasil',
        quadro: 'vale-a-pena-ver-direito',
        titulo: 'Leis estranhas que já existiram no Brasil',
        resumo: 'Conheça normas e propostas curiosas que chamaram atenção em diferentes cidades brasileiras.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'O Direito está presente em situações muito sérias, mas sua história também registra normas curiosas. Algumas surgiram para responder a problemas locais; outras parecem estranhas quando observadas fora do contexto em que foram criadas.' },
            { tipo: 'paragrafo', texto: 'Nesta edição do Vale a Pena Ver Direito, reunimos exemplos que ganharam destaque justamente por seu conteúdo incomum.' },
            { tipo: 'titulo', texto: 'Lei de extinção de formigueiros' },
            { tipo: 'paragrafo', texto: 'Em 1965, o município de Rio Claro, em São Paulo, ganhou uma norma que tratava da extinção de formigueiros existentes em propriedades particulares. A medida ficou conhecida por prever multa para o proprietário que não eliminasse os formigueiros encontrados no imóvel.' },
            { tipo: 'paragrafo', texto: 'A regra costuma aparecer em listas de leis curiosas, mas também revela uma preocupação da época com pragas e seus possíveis impactos na cidade e nas atividades agrícolas.' },
            { tipo: 'titulo', texto: 'Lei contra erros de português' },
            { tipo: 'paragrafo', texto: 'Em 1997, uma lei municipal de Pouso Alegre, em Minas Gerais, passou a tratar de erros de português em materiais publicitários expostos na cidade, como cartazes, faixas, placas, outdoors e panfletos.' },
            { tipo: 'paragrafo', texto: 'A norma previa multas diferentes conforme o tipo de publicidade. A proposta era incentivar o uso correto da língua portuguesa no espaço público.' },
            { tipo: 'titulo', texto: 'Lei das mochilas' },
            { tipo: 'paragrafo', texto: 'Em 2011, no município do Rio de Janeiro, uma norma determinou a colocação de cartazes com orientações sobre a forma de transportar mochilas em elevadores, no metrô, em ônibus e em prédios comerciais.' },
            { tipo: 'paragrafo', texto: 'A orientação era carregar a mochila na parte da frente do corpo para evitar esbarrões, desconforto e acidentes em espaços lotados.' },
            { tipo: 'titulo', texto: 'Lei das melancias' },
            { tipo: 'paragrafo', texto: 'Em 1894, Rio Claro proibiu a venda e o consumo de melancias. Naquele período, acreditava-se que a fruta poderia estar relacionada à febre amarela.' },
            { tipo: 'paragrafo', texto: 'Depois que a ciência identificou o mosquito como vetor da doença, a justificativa sanitária perdeu o sentido. A norma caiu em desuso e se tornou um exemplo de como o conhecimento disponível em cada época influencia a produção de regras.' },
            { tipo: 'titulo', texto: 'Dia de Reconhecimento dos Ouvidores de Vozes' },
            { tipo: 'paragrafo', texto: 'Em 2021, uma lei de Ribeirão Preto incluiu no calendário oficial do município o Dia de Reconhecimento dos Ouvidores de Vozes, celebrado em 14 de setembro.' },
            { tipo: 'paragrafo', texto: 'A data procura ampliar o debate sobre a experiência de ouvir vozes, combater estigmas e incentivar atividades de informação e acolhimento.' },
            { tipo: 'titulo', texto: 'Uma proposta para “proibir” enchentes' },
            { tipo: 'paragrafo', texto: 'Em 2007, uma proposta de decreto em Aparecida, São Paulo, chamou atenção nacional ao declarar proibida a ocorrência de enchentes provocadas por chuvas no município.' },
            { tipo: 'paragrafo', texto: 'O texto ganhou repercussão por tentar enfrentar, por meio de uma proibição formal, um fenômeno que exige planejamento urbano, drenagem, prevenção e outras políticas públicas concretas.' },
            { tipo: 'titulo', texto: 'O que esses exemplos ensinam?' },
            { tipo: 'paragrafo', texto: 'Uma norma não pode ser compreendida apenas por seu título. É preciso observar quando foi criada, qual problema pretendia enfrentar, se chegou a produzir efeitos e se continuou válida ao longo do tempo.' },
            { tipo: 'paragrafo', texto: 'Também é importante diferenciar lei aprovada, projeto apresentado, decreto e regra que caiu em desuso. Mesmo quando os exemplos parecem engraçados, eles ajudam a perceber como o Direito acompanha os costumes, o conhecimento científico e as necessidades de cada sociedade.' }
        ],
        dataPublicacao: '2026-09-19',
        dataAtualizacao: '',
        autor: 'Maria Clara Matos Recalcatti',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Curiosidades jurídicas', 'História do Direito', 'Legislação municipal'],
        fontes: [
            { titulo: 'Jusbrasil — As 12 leis mais bizarras do Brasil', link: 'https://www.jusbrasil.com.br/artigos/as-12-leis-mais-bizarras-do-brasil/2366994760' },
            { titulo: 'g1 — Prefeito de Aparecida tenta proibir enchentes por decreto', link: 'https://g1.globo.com/Noticias/SaoPaulo/0,,MUL93848-5605,00-PREFEITO+DE+APARECIDA+SP+TENTA+PROIBIR+ENCHENTES+POR+DECRETO.html' },
            { titulo: 'g1 — Lei proibiu consumo de melancia em Rio Claro no século XIX', link: 'https://g1.globo.com/sp/sao-carlos-regiao/noticia/2024/06/01/lei-proibiu-consumo-de-melancia-em-rio-claro-no-seculo-19-por-acreditar-que-fruta-causava-febre-amarela.ghtml' },
            { titulo: 'Prefeitura de Ribeirão Preto — Legislação municipal', link: 'https://www.ribeiraopreto.sp.gov.br/legislacao-municipal' }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },

    {
        slug: 'comprei-na-internet-e-me-arrependi-posso-devolver',
        quadro: 'pergunta-da-semana',
        titulo: 'Comprei na internet e me arrependi: em quantos dias posso devolver?',
        resumo: 'Entenda o prazo de sete dias, como exercer o direito de arrependimento e por que a regra é diferente nas compras feitas em loja física.',
        conteudo: [
            { tipo: 'paragrafo', texto: 'Você comprou alguma coisa pela internet e, quando o produto chegou, percebeu que não era bem o que esperava? Talvez a cor fosse diferente, o tamanho não servisse ou você simplesmente tenha mudado de ideia. Nessas situações, o Código de Defesa do Consumidor prevê uma proteção específica para as contratações realizadas fora do estabelecimento comercial.' },
            { tipo: 'titulo', texto: 'Resposta curta' },
            { tipo: 'paragrafo', texto: 'Em regra, quem compra um produto ou contrata um serviço fora do estabelecimento comercial — como pela internet, telefone, catálogo ou venda em domicílio — pode desistir do contrato no prazo de sete dias, contados da assinatura ou do recebimento do produto ou serviço, conforme o caso.' },
            { tipo: 'titulo', texto: 'O que é o direito de arrependimento?' },
            { tipo: 'paragrafo', texto: 'O direito de arrependimento está previsto no artigo 49 do Código de Defesa do Consumidor. Ele permite que o consumidor desista de uma contratação feita fora do estabelecimento comercial sem precisar apresentar uma justificativa.' },
            { tipo: 'paragrafo', texto: 'Quando o direito é exercido dentro do prazo, os valores eventualmente pagos devem ser devolvidos de imediato e monetariamente atualizados. Nas compras pela internet, o Decreto nº 7.962/2013 também determina que o fornecedor informe, de forma clara, os meios adequados para o exercício do arrependimento e confirme imediatamente o recebimento da solicitação.' },
            { tipo: 'subtitulo', texto: 'A regra pode alcançar contratações feitas:' },
            { tipo: 'lista', itens: ['pela internet;', 'por telefone;', 'por catálogo ou outro meio de venda a distância;', 'em domicílio ou em outro local fora do estabelecimento comercial.'] },
            { tipo: 'titulo', texto: 'Quando começa a contar o prazo?' },
            { tipo: 'paragrafo', texto: 'O CDC estabelece que os sete dias são contados da assinatura do contrato ou do recebimento do produto ou serviço. Na compra de um produto pela internet, a referência prática costuma ser a data em que ele foi recebido. Em uma contratação de serviço, a data da assinatura pode ser a referência, de acordo com as circunstâncias do contrato.' },
            { tipo: 'paragrafo', texto: 'A contagem é feita em dias corridos. Por segurança, é importante comunicar a desistência ao fornecedor dentro do prazo e guardar a confirmação, o número de protocolo, a mensagem ou outro comprovante do pedido.' },
            { tipo: 'titulo', texto: 'Preciso explicar por que desisti?' },
            { tipo: 'paragrafo', texto: 'Não. Dentro do prazo legal e nas situações abrangidas pelo artigo 49, o consumidor não precisa demonstrar defeito no produto nem justificar a mudança de decisão. O direito existe justamente porque, na contratação a distância, não há o mesmo contato direto com o produto, o serviço e o ambiente de venda.' },
            { tipo: 'titulo', texto: 'Como exercer o direito de arrependimento?' },
            { tipo: 'lista', itens: ['Comunique ao fornecedor, dentro do prazo de sete dias, que deseja desistir da contratação.', 'Use um canal que permita guardar prova do pedido, como e-mail, chat, formulário eletrônico ou protocolo de atendimento.', 'Siga as orientações de devolução fornecidas pela empresa e conserve o produto, os acessórios e os documentos recebidos na medida do possível.', 'Guarde a confirmação do cancelamento, o comprovante de envio e os registros relacionados ao estorno ou à restituição.'] },
            { tipo: 'paragrafo', texto: 'O Decreto nº 7.962/2013 estabelece que o consumidor pode exercer o arrependimento pela mesma ferramenta utilizada para contratar, sem prejuízo de outros meios oferecidos pelo fornecedor. Também prevê que o cancelamento alcance os contratos acessórios, sem ônus para o consumidor.' },
            { tipo: 'titulo', texto: 'E se a compra foi feita em loja física?' },
            { tipo: 'paragrafo', texto: 'Quando a compra é realizada dentro de uma loja física e o produto não apresenta vício, a simples mudança de ideia não gera, por si só, um direito legal de troca ou devolução. A loja pode oferecer essa possibilidade como política comercial; se fizer uma oferta de troca ou devolução, deverá cumprir as condições informadas ao consumidor.' },
            { tipo: 'paragrafo', texto: 'A situação é diferente quando o produto apresenta vício de qualidade ou quantidade. Pelo artigo 18 do CDC, o fornecedor tem, em regra, até 30 dias para sanar o problema. Se o vício não for resolvido nesse prazo, o consumidor poderá escolher entre a substituição do produto, a restituição da quantia paga ou o abatimento proporcional do preço.' },
            { tipo: 'paragrafo', texto: 'O próprio CDC prevê exceções em que essas alternativas podem ser exigidas imediatamente, como quando o conserto puder comprometer a qualidade ou as características do produto, diminuir seu valor ou quando se tratar de produto essencial. Por isso, o direito de arrependimento e os direitos relacionados a um produto com vício não devem ser confundidos.' },
            { tipo: 'titulo', texto: 'Proteção da liberdade de escolha' },
            { tipo: 'paragrafo', texto: 'A doutrina de Direito do Consumidor relaciona o prazo de reflexão à proteção da liberdade de escolha. Nas vendas a distância, o consumidor pode decidir com base em fotografias, descrições, publicidade e outras informações fornecidas pelo vendedor, sem examinar pessoalmente o produto antes da contratação.' },
            { tipo: 'paragrafo', texto: 'Essa proteção busca reduzir a diferença de informação e permitir que o consumidor reavalie a decisão depois de ter contato efetivo com o produto ou de compreender melhor o serviço contratado.' },
            { tipo: 'titulo', texto: 'Boa-fé e possíveis abusos' },
            { tipo: 'paragrafo', texto: 'O direito de arrependimento deve ser exercido de acordo com a boa-fé. Abrir a embalagem ou examinar o produto não elimina automaticamente o direito, pois esse contato pode ser necessário para avaliar a compra. Porém, situações de uso prolongado, dano intencional ou tentativa de obter vantagem indevida podem gerar discussão sobre abuso no caso concreto.' },
            { tipo: 'paragrafo', texto: 'Isso não autoriza o fornecedor a recusar automaticamente todo pedido quando a embalagem foi aberta. A análise deve considerar a natureza do produto, a forma de utilização e as circunstâncias da devolução.' },
            { tipo: 'titulo', texto: 'Em resumo' },
            { tipo: 'lista', itens: ['Compra ou contratação feita fora do estabelecimento comercial: o consumidor pode exercer o direito de arrependimento em até sete dias, nos termos do artigo 49 do CDC.', 'Compra em loja física sem vício: a troca por simples mudança de ideia depende da política oferecida pelo estabelecimento.', 'Produto com vício: aplicam-se as regras dos artigos 18 e seguintes do CDC, com possibilidade de reparo e outras soluções previstas em lei.'] },
            { tipo: 'paragrafo', texto: 'Este conteúdo tem finalidade educativa. Situações específicas podem exigir a análise do contrato, do produto, do serviço e das circunstâncias do caso.' }
        ],
        dataPublicacao: '2026-09-04',
        dataAtualizacao: '',
        autor: 'Júlia Gabriele Schiremberck Oliveira',
        revisadoPor: 'Equipe Vozes do Direito',
        tags: ['Direito do Consumidor', 'Compras on-line', 'Direito de arrependimento'],
        fontes: [
            {
                titulo: 'Código de Defesa do Consumidor — arts. 18 e 49',
                link: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
            },
            {
                titulo: 'Decreto nº 7.962/2013 — comércio eletrônico e direito de arrependimento',
                link: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm'
            },
            {
                titulo: 'Revista REASE — estudo sobre o direito de arrependimento nas relações de consumo',
                link: 'https://periodicorease.pro.br/rease/article/view/6126/2366'
            },
            {
                titulo: 'Revista do UBM — proteção do consumidor no comércio eletrônico',
                link: 'https://revista.ubm.br/index.php/ensinoextensao29/article/view/2700/899'
            }
        ],
        imagem: '',
        textoAlternativo: '',
        status: 'publicado'
    },
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
