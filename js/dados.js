const termosJuridicos = [
    {
        termo: 'Ação judicial',
        area: 'Processo',
        resumo: 'Meio usado para levar ao Poder Judiciário um pedido de proteção ou reconhecimento de um direito.',
        detalhes: 'A ação judicial dá início à atuação do Judiciário sobre um conflito ou pedido. Ela é apresentada por meio de uma petição inicial e precisa atender aos requisitos legais. O tipo de ação, o juízo competente e os documentos necessários dependem do caso.',
        exemplo: 'Uma pessoa pode propor uma ação para cobrar uma dívida, pedir uma indenização ou obter um medicamento.',
        baseLegal: 'Constituição Federal, art. 5º, XXXV; Código de Processo Civil, arts. 2º e 319.'
    },
    {
        termo: 'Acórdão',
        area: 'Processo',
        resumo: 'Decisão tomada de forma colegiada por integrantes de um tribunal.',
        detalhes: 'O acórdão registra o resultado e os fundamentos de um julgamento realizado por um órgão colegiado, como uma turma ou câmara de tribunal. Ele é diferente da sentença, que normalmente é proferida por um juiz de primeiro grau.',
        exemplo: 'Quando uma turma do Tribunal de Justiça julga uma apelação, sua decisão é formalizada em um acórdão.',
        baseLegal: 'Código de Processo Civil, arts. 204 e 941.'
    },
    {
        termo: 'Alvará',
        area: 'Direito Administrativo e Processo',
        resumo: 'Documento oficial que autoriza uma atividade ou a prática de determinado ato.',
        detalhes: 'O alvará pode ser administrativo, como o de funcionamento ou construção, ou judicial, quando expedido por ordem de um juiz. As exigências e os efeitos variam conforme a finalidade e a legislação aplicável.',
        exemplo: 'Um alvará judicial pode autorizar o levantamento de dinheiro depositado em juízo.',
        baseLegal: 'A disciplina depende do tipo de alvará. Um exemplo é a Lei nº 6.858/1980, sobre levantamento de valores por dependentes ou sucessores.'
    },
    {
        termo: 'Autor',
        area: 'Processo',
        resumo: 'Pessoa que apresenta uma demanda ao Poder Judiciário.',
        detalhes: 'Autor é quem inicia o processo e formula um pedido contra outra pessoa ou entidade. Em algumas ações, podem existir vários autores; nesse caso, há litisconsórcio ativo. Em recursos e execuções, as partes podem receber outras denominações.',
        exemplo: 'Em uma ação de indenização, quem afirma ter sofrido o dano e apresenta o pedido é o autor.',
        baseLegal: 'Código de Processo Civil, especialmente arts. 17, 18 e 319.'
    },
    {
        termo: 'Boa-fé objetiva',
        area: 'Direito Civil',
        resumo: 'Dever de agir com lealdade, honestidade e cooperação nas relações jurídicas.',
        detalhes: 'A boa-fé objetiva estabelece um padrão de comportamento. Ela exige que as pessoas ajam de modo coerente e leal antes, durante e depois de um contrato, evitando criar falsas expectativas, esconder informações relevantes ou frustrar injustamente a confiança da outra parte.',
        exemplo: 'Uma empresa viola a boa-fé quando omite intencionalmente uma condição importante da contratação.',
        baseLegal: 'Código Civil, arts. 113, 187 e 422; Código de Defesa do Consumidor, art. 4º, III.'
    },
    {
        termo: 'Citação',
        area: 'Processo',
        resumo: 'Ato que chama formalmente o réu, executado ou interessado para participar do processo.',
        detalhes: 'A citação informa a existência do processo e permite que a pessoa exerça sua defesa. Em regra, a validade do processo depende de citação regular, salvo hipóteses previstas em lei. Ela não deve ser confundida com intimação.',
        exemplo: 'Ao receber a citação de uma ação de cobrança, o réu passa a ter prazo para apresentar defesa.',
        baseLegal: 'Código de Processo Civil, arts. 238 a 259.'
    },
    {
        termo: 'Consumidor',
        area: 'Direito do Consumidor',
        resumo: 'Pessoa ou entidade que adquire ou utiliza produto ou serviço como destinatária final.',
        detalhes: 'Consumidor é quem retira o produto ou serviço do mercado para atender uma necessidade própria, sem integrá-lo diretamente a outra atividade econômica. A lei também protege coletividades e pessoas expostas a determinadas práticas de consumo.',
        exemplo: 'Quem compra um celular para uso pessoal é consumidor na relação com a loja e com os fornecedores envolvidos.',
        baseLegal: 'Código de Defesa do Consumidor, arts. 2º, 17 e 29.'
    },
    {
        termo: 'Contestação',
        area: 'Processo Civil',
        resumo: 'Principal instrumento de defesa do réu no procedimento civil comum.',
        detalhes: 'Na contestação, o réu apresenta seus argumentos, contesta os fatos alegados pelo autor, indica provas e levanta as matérias de defesa pertinentes. O prazo e a forma de apresentação dependem do procedimento e das circunstâncias do processo.',
        exemplo: 'Em uma ação de cobrança, o réu pode alegar na contestação que a dívida já foi paga e apresentar o comprovante.',
        baseLegal: 'Código de Processo Civil, arts. 335 a 342.'
    },
    {
        termo: 'Contrato',
        area: 'Direito Civil',
        resumo: 'Acordo que cria, modifica ou extingue direitos e obrigações entre os envolvidos.',
        detalhes: 'O contrato estabelece condições, valores, prazos e responsabilidades. Muitos contratos podem ser verbais, embora a forma escrita facilite a prova. Seu conteúdo deve respeitar a lei, a função social, a boa-fé e, quando houver relação de consumo, as normas de proteção do consumidor.',
        exemplo: 'Locação, prestação de serviço, compra e venda e assinatura de plataforma digital são relações contratuais.',
        baseLegal: 'Código Civil, arts. 104, 421 e 422; Código de Defesa do Consumidor, arts. 46 a 54.'
    },
    {
        termo: 'Contraditório e ampla defesa',
        area: 'Direito Constitucional',
        resumo: 'Garantias de conhecer o processo, participar dele e apresentar argumentos e provas.',
        detalhes: 'O contraditório assegura ciência e possibilidade real de manifestação sobre atos e provas do processo. A ampla defesa permite usar os meios de defesa admitidos pelo Direito. As garantias se aplicam aos processos judiciais e administrativos.',
        exemplo: 'Antes de uma sanção administrativa, a pessoa deve ter oportunidade de conhecer a acusação e se defender.',
        baseLegal: 'Constituição Federal, art. 5º, LV; Código de Processo Civil, arts. 7º, 9º e 10.'
    },
    {
        termo: 'Crime',
        area: 'Direito Penal',
        resumo: 'Conduta definida em lei como infração penal e sujeita às penas nela previstas.',
        detalhes: 'Para uma conduta ser tratada como crime, precisa existir lei anterior que a defina. A responsabilização penal também exige a análise dos elementos do fato, da ilicitude e da culpabilidade, além das circunstâncias específicas do caso.',
        exemplo: 'Uma atitude socialmente reprovável não pode gerar condenação criminal se não estiver prevista em lei como crime.',
        baseLegal: 'Constituição Federal, art. 5º, XXXIX; Código Penal, art. 1º.'
    },
    {
        termo: 'Dano material',
        area: 'Responsabilidade Civil',
        resumo: 'Prejuízo econômico que pode ser demonstrado e avaliado financeiramente.',
        detalhes: 'O dano material pode incluir o que a pessoa efetivamente perdeu e, quando comprovado, o que razoavelmente deixou de ganhar. A indenização busca recompor o prejuízo, e normalmente exige prova dos valores e do vínculo com a conduta que causou o dano.',
        exemplo: 'Despesas médicas e o custo de conserto de um bem danificado podem constituir dano material.',
        baseLegal: 'Código Civil, arts. 402, 403, 927 e 944.'
    },
    {
        termo: 'Dano moral',
        area: 'Responsabilidade Civil',
        resumo: 'Lesão relevante a direitos da personalidade, como honra, imagem, intimidade ou dignidade.',
        detalhes: 'O dano moral não corresponde a qualquer aborrecimento cotidiano. Sua caracterização depende da gravidade da situação, do direito atingido e das circunstâncias concretas. Quando reconhecida, a indenização busca compensar a vítima e desestimular a repetição da conduta.',
        exemplo: 'Uma exposição pública ilícita que atinja gravemente a honra de alguém pode gerar indenização por dano moral.',
        baseLegal: 'Constituição Federal, art. 5º, V e X; Código Civil, arts. 186, 187 e 927.'
    },
    {
        termo: 'Decadência',
        area: 'Direito Civil',
        resumo: 'Perda de um direito pelo fim do prazo previsto para exercê-lo.',
        detalhes: 'A decadência atinge o próprio direito potestativo que não foi exercido no prazo. Ela não se confunde com prescrição, que normalmente impede a cobrança judicial de uma pretensão. A diferença e as regras de contagem dependem da natureza do prazo.',
        exemplo: 'O prazo para anular determinado negócio jurídico por vício de vontade pode ser decadencial.',
        baseLegal: 'Código Civil, arts. 178 e 207 a 211.'
    },
    {
        termo: 'Defensoria Pública',
        area: 'Acesso à Justiça',
        resumo: 'Instituição que presta orientação e defesa jurídica integral e gratuita a quem necessita.',
        detalhes: 'A Defensoria Pública atua judicial e extrajudicialmente na defesa de direitos individuais e coletivos. Os critérios de atendimento podem variar conforme a unidade e a natureza do caso, por isso é importante consultar a Defensoria responsável pela região.',
        exemplo: 'Uma pessoa sem condições de contratar advogado pode procurar a Defensoria para receber orientação e verificar se atende aos critérios do serviço.',
        baseLegal: 'Constituição Federal, arts. 5º, LXXIV, e 134; Lei Complementar nº 80/1994.'
    },
    {
        termo: 'Direitos fundamentais',
        area: 'Direito Constitucional',
        resumo: 'Direitos e garantias essenciais à dignidade, liberdade, igualdade e participação social.',
        detalhes: 'Os direitos fundamentais protegem pessoas e coletividades e também orientam a atuação do Estado. Incluem direitos individuais, sociais, políticos e coletivos. Eles não são necessariamente absolutos e podem exigir harmonização quando entram em conflito.',
        exemplo: 'Liberdade de expressão, privacidade, saúde, educação e acesso à Justiça são direitos protegidos constitucionalmente.',
        baseLegal: 'Constituição Federal, especialmente arts. 5º a 17.'
    },
    {
        termo: 'Dolo',
        area: 'Direito Penal',
        resumo: 'Vontade consciente de realizar a conduta criminosa ou aceitação do risco de produzir o resultado.',
        detalhes: 'Há dolo direto quando a pessoa quer o resultado e dolo eventual quando, mesmo sem desejá-lo diretamente, assume o risco de produzi-lo. A identificação do dolo depende das provas e das circunstâncias do fato.',
        exemplo: 'Não basta um resultado ruim para afirmar que houve dolo; é necessário analisar a vontade e a consciência do agente.',
        baseLegal: 'Código Penal, art. 18, I.'
    },
    {
        termo: 'Espólio',
        area: 'Direito das Sucessões',
        resumo: 'Conjunto de bens, direitos e obrigações deixados por uma pessoa falecida.',
        detalhes: 'O espólio existe enquanto a herança ainda não foi definitivamente partilhada e é representado pelo inventariante. É com esse patrimônio que, em regra, são pagas as dívidas do falecido, antes da divisão do saldo entre os herdeiros.',
        exemplo: 'Um imóvel, valores em conta e dívidas deixados pela pessoa falecida integram o espólio.',
        baseLegal: 'Código Civil, arts. 1.784, 1.792 e 1.997; Código de Processo Civil, arts. 75, VII, e 796.'
    },
    {
        termo: 'Fornecedor',
        area: 'Direito do Consumidor',
        resumo: 'Pessoa, empresa ou entidade que produz, distribui, comercializa produtos ou presta serviços.',
        detalhes: 'O conceito de fornecedor é amplo e pode incluir fabricante, loja, banco, plataforma e prestador de serviço. Na relação de consumo, o fornecedor deve informar com clareza, cumprir a oferta e responder por defeitos ou falhas nos termos da lei.',
        exemplo: 'A loja que vende o produto e a fabricante podem integrar a cadeia de fornecimento.',
        baseLegal: 'Código de Defesa do Consumidor, art. 3º.'
    },
    {
        termo: 'Habeas corpus',
        area: 'Direito Constitucional e Penal',
        resumo: 'Medida destinada a proteger a liberdade de locomoção contra ilegalidade ou abuso de poder.',
        detalhes: 'O habeas corpus pode ser preventivo, quando existe ameaça concreta de restrição ilegal, ou liberatório, quando a restrição já ocorreu. Ele pode ser apresentado sem advogado, embora situações complexas possam exigir orientação técnica.',
        exemplo: 'Pode ser usado para questionar uma prisão sem fundamento legal ou mantida além do prazo permitido.',
        baseLegal: 'Constituição Federal, art. 5º, LXVIII; Código de Processo Penal, arts. 647 a 667.'
    },
    {
        termo: 'Intimação',
        area: 'Processo',
        resumo: 'Comunicação formal de um ato ou decisão para que alguém tome ciência ou faça algo.',
        detalhes: 'A intimação informa decisões, audiências, prazos e outros atos do processo. Ela pode ocorrer por meio eletrônico, publicação oficial, correio ou outras formas autorizadas. Ignorar uma intimação pode causar perda de prazo ou outras consequências.',
        exemplo: 'O advogado pode ser intimado da sentença pelo diário eletrônico para decidir se apresentará recurso.',
        baseLegal: 'Código de Processo Civil, arts. 269 a 275.'
    },
    {
        termo: 'Jurisprudência',
        area: 'Teoria do Direito',
        resumo: 'Conjunto de decisões judiciais que revela como os tribunais interpretam determinado tema.',
        detalhes: 'A jurisprudência ajuda a compreender a aplicação das leis e pode orientar julgamentos futuros. Nem toda decisão isolada representa um entendimento consolidado, e nem toda jurisprudência é obrigatória. Alguns precedentes, porém, devem ser observados nos termos da lei.',
        exemplo: 'Diversos julgamentos semelhantes de um tribunal podem formar uma orientação sobre indenização em certo tipo de caso.',
        baseLegal: 'Código de Processo Civil, arts. 926 e 927.'
    },
    {
        termo: 'Legítima defesa',
        area: 'Direito Penal',
        resumo: 'Reação necessária e moderada contra agressão injusta, atual ou prestes a acontecer.',
        detalhes: 'A legítima defesa exclui a ilicitude quando estão presentes os requisitos legais. A reação deve usar moderadamente os meios necessários para proteger direito próprio ou de outra pessoa. O excesso doloso ou culposo pode gerar responsabilização.',
        exemplo: 'A análise considera o perigo enfrentado, os meios disponíveis e se a reação continuou depois que a agressão terminou.',
        baseLegal: 'Código Penal, arts. 23, II e parágrafo único, e 25.'
    },
    {
        termo: 'Liminar',
        area: 'Processo',
        resumo: 'Decisão provisória tomada antes do julgamento final, quando a situação exige resposta imediata.',
        detalhes: 'Liminar é uma forma de identificar decisões concedidas no início ou durante o processo, antes da análise definitiva. Ela pode antecipar uma proteção ou preservar o resultado útil do processo e pode ser modificada ou revogada.',
        exemplo: 'Uma liminar pode determinar o fornecimento urgente de medicamento enquanto o processo continua.',
        baseLegal: 'A base depende do procedimento. No Código de Processo Civil, as tutelas provisórias estão nos arts. 294 a 311.'
    },
    {
        termo: 'Litisconsórcio',
        area: 'Processo Civil',
        resumo: 'Participação de duas ou mais pessoas no mesmo polo de um processo.',
        detalhes: 'O litisconsórcio é ativo quando há vários autores, passivo quando há vários réus e misto quando existe pluralidade nos dois polos. Ele pode ser facultativo ou obrigatório, conforme a relação jurídica e a previsão legal.',
        exemplo: 'Dois consumidores prejudicados pelo mesmo fato podem, em certas situações, propor juntos uma ação.',
        baseLegal: 'Código de Processo Civil, arts. 113 a 118.'
    },
    {
        termo: 'Ônus da prova',
        area: 'Processo',
        resumo: 'Responsabilidade de demonstrar os fatos relevantes alegados no processo.',
        detalhes: 'Em regra, o autor prova o fato que fundamenta seu direito e o réu prova fatos que impedem, modificam ou extinguem esse direito. A lei ou o juiz, nas hipóteses permitidas, pode distribuir esse encargo de forma diferente. No consumo, pode ocorrer inversão em favor do consumidor quando preenchidos os requisitos.',
        exemplo: 'Quem afirma ter efetuado um pagamento normalmente deve guardar e apresentar o comprovante.',
        baseLegal: 'Código de Processo Civil, art. 373; Código de Defesa do Consumidor, art. 6º, VIII.'
    },
    {
        termo: 'Petição inicial',
        area: 'Processo Civil',
        resumo: 'Documento que apresenta ao Judiciário os fatos, fundamentos e pedidos que iniciam o processo.',
        detalhes: 'A petição inicial identifica as partes, explica o conflito, apresenta os fundamentos jurídicos, formula os pedidos, indica provas e informa o valor da causa, entre outros requisitos. Se houver defeitos corrigíveis, o juiz pode determinar que ela seja emendada.',
        exemplo: 'Em uma ação de indenização, a petição inicial descreve o dano, indica provas e informa o que se pretende obter.',
        baseLegal: 'Código de Processo Civil, arts. 319 a 321.'
    },
    {
        termo: 'Prescrição',
        area: 'Direito Civil',
        resumo: 'Perda da possibilidade de exigir judicialmente uma pretensão pelo fim do prazo legal.',
        detalhes: 'A prescrição busca dar segurança às relações jurídicas e ocorre quando a pretensão não é exercida dentro do prazo. Os prazos variam conforme a situação e podem sofrer impedimento, suspensão ou interrupção nas hipóteses previstas em lei.',
        exemplo: 'Uma dívida pode continuar existindo, mas sua cobrança judicial pode ficar impedida depois de reconhecida a prescrição.',
        baseLegal: 'Código Civil, arts. 189 a 206.'
    },
    {
        termo: 'Recurso',
        area: 'Processo',
        resumo: 'Instrumento usado para pedir a revisão, integração ou invalidação de uma decisão judicial.',
        detalhes: 'Cada recurso possui finalidade, prazo e requisitos próprios. Ele pode ser julgado pelo mesmo órgão ou por um tribunal, conforme o tipo. Recorrer não significa que toda a causa será automaticamente analisada novamente nem que a decisão ficará sem efeito.',
        exemplo: 'A apelação é o recurso normalmente utilizado contra uma sentença no processo civil.',
        baseLegal: 'Código de Processo Civil, arts. 994 a 1.044.'
    },
    {
        termo: 'Réu',
        area: 'Processo',
        resumo: 'Pessoa contra quem o pedido é apresentado em um processo.',
        detalhes: 'O réu deve ser regularmente citado para conhecer a demanda e exercer sua defesa. Ser réu não significa estar automaticamente errado ou condenado. No processo penal, a pessoa acusada também possui presunção de inocência e direito de defesa.',
        exemplo: 'Em uma ação de cobrança, a pessoa apontada como devedora ocupa o polo de réu e pode contestar o pedido.',
        baseLegal: 'Constituição Federal, art. 5º, LIV, LV e LVII; Código de Processo Civil, arts. 238 e 335.'
    },
    {
        termo: 'Responsabilidade civil',
        area: 'Direito Civil',
        resumo: 'Dever de reparar o dano causado a outra pessoa quando estão presentes os requisitos legais.',
        detalhes: 'Em geral, a responsabilidade civil exige conduta, dano e nexo entre os dois, além de culpa ou dolo quando a lei não prevê responsabilidade objetiva. A reparação pode abranger danos materiais, morais e outras consequências comprovadas.',
        exemplo: 'Quem danifica injustamente o bem de outra pessoa pode ter de pagar o conserto ou a reposição.',
        baseLegal: 'Código Civil, arts. 186, 187, 927 e 944.'
    },
    {
        termo: 'Sentença',
        area: 'Processo',
        resumo: 'Decisão do juiz que encerra uma fase do processo de conhecimento ou extingue a execução.',
        detalhes: 'A sentença pode resolver o mérito, decidindo o pedido, ou encerrar o processo sem analisá-lo em determinadas situações. Ela deve apresentar relatório, fundamentos e conclusão, respeitadas as exceções legais. Em regra, pode ser questionada por apelação.',
        exemplo: 'Ao final de uma ação de indenização, o juiz profere sentença acolhendo ou rejeitando o pedido.',
        baseLegal: 'Código de Processo Civil, arts. 203, § 1º, 485, 487 e 489.'
    },
    {
        termo: 'Súmula',
        area: 'Jurisprudência',
        resumo: 'Enunciado que resume um entendimento consolidado de um tribunal sobre determinado tema.',
        detalhes: 'A súmula facilita a identificação da orientação adotada pelo tribunal. A maioria possui caráter persuasivo. A súmula vinculante, aprovada pelo Supremo Tribunal Federal nos requisitos constitucionais, deve ser observada pelo Judiciário e pela administração pública.',
        exemplo: 'A Súmula 309 do STJ indica quais parcelas de pensão alimentícia autorizam o rito da prisão civil.',
        baseLegal: 'Constituição Federal, art. 103-A; Código de Processo Civil, arts. 926 e 927.'
    },
    {
        termo: 'Tutela de urgência',
        area: 'Processo Civil',
        resumo: 'Proteção provisória concedida quando há probabilidade do direito e perigo na demora.',
        detalhes: 'A tutela de urgência pode antecipar os efeitos pretendidos ou proteger o resultado do processo. O juiz avalia se existem elementos que indiquem a probabilidade do direito e risco de dano ou de prejuízo ao resultado útil. A medida pode ser alterada ou revogada.',
        exemplo: 'Pode ser pedida para suspender uma cobrança que ameaça causar dano grave antes do julgamento final.',
        baseLegal: 'Código de Processo Civil, arts. 294, 296 e 300.'
    }
];
