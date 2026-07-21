# Vozes do Direito

Site desenvolvido para o projeto de extensão **Vozes do Direito**, da Universidade Estadual de Mato Grosso do Sul — UEMS.

O projeto tem como objetivo aproximar o Direito da sociedade por meio de conteúdos jurídicos em linguagem simples, acessível e educativa.

## Sobre o projeto

O **Vozes do Direito** surgiu com a proposta de traduzir o juridiquês e facilitar o acesso à informação jurídica.

A iniciativa busca apresentar conceitos, termos e situações do cotidiano de forma clara, contribuindo para que a população compreenda melhor seus direitos e deveres.

O site reúne páginas informativas, um dicionário jurídico interativo e conteúdos voltados à cidadania, comunicação jurídica e educação em direitos.

## Objetivos

- Democratizar o acesso à informação jurídica.
- Explicar termos e conceitos do Direito em linguagem simples.
- Relacionar situações do cotidiano com direitos e deveres.
- Divulgar conteúdos educativos produzidos pelo projeto.
- Utilizar a tecnologia como ferramenta de extensão universitária.

## Páginas do site

- **Início:** apresentação geral do projeto.
- **Conteúdos:** explicação dos quadros desenvolvidos pela equipe.
- **Dicionário Jurídico:** termos jurídicos com busca interativa e explicações acessíveis.
- **Direito no Cotidiano:** exemplos práticos de situações comuns que envolvem o Direito.
- **Quem Somos:** apresentação da equipe e da professora orientadora.
- **Contato:** canais de comunicação e formulário que prepara a sugestão no aplicativo de e-mail.

## Funcionalidades

- Layout responsivo para computador, tablet e celular.
- Navbar com navegação entre páginas.
- Dicionário jurídico gerado dinamicamente a partir de uma fonte de dados centralizada.
- Filtro de busca que reconhece palavras com ou sem acentos.
- Sugestões automáticas durante a digitação.
- Modal com explicação ampliada dos termos jurídicos.
- Publicações organizadas em uma base central, com autoria, revisão, datas e fontes.
- Página dinâmica para leitura do conteúdo completo.
- Cards informativos organizados por tema.
- Design visual com identidade institucional.

## Tecnologias utilizadas

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- JavaScript
- Git
- GitHub Pages

## Estrutura de pastas

```text
vozes-do-direito/
│
├── index.html
├── 404.html
├── MODELO-DE-CONTEUDO.md
├── README.md
├── robots.txt
├── sitemap.xml
│
├── css/
│   ├── style.css
│   ├── home.css
│   ├── conteudos.css
│   ├── dicionario.css
│   ├── cotidiano.css
│   ├── quem-somos.css
│   ├── contato.css
│   ├── publicacao.css
│   ├── quadros.css
│   └── responsive.css
│
├── js/
│   ├── contato.js
│   ├── conteudos.js
│   ├── dados.js
│   ├── dicionario.js
│   ├── main.js
│   ├── publicacao.js
│   └── quadros.js
│
└── paginas/
    ├── contato.html
    ├── conteudos.html
    ├── cotidiano.html
    ├── dicionario.html
    ├── fala-direito.html
    ├── jurinews.html
    ├── mito-ou-verdade.html
    ├── normal-nao-e-legal.html
    ├── pergunta-da-semana.html
    ├── publicacao.html
    ├── quem-somos.html
    └── vale-a-pena-ver-direito.html
```

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE).

## Como adicionar uma publicação

1. Preencha o arquivo [MODELO-DE-CONTEUDO.md](MODELO-DE-CONTEUDO.md).
2. Após a revisão, copie o modelo de objeto disponível em `js/conteudos.js`.
3. Use um `slug` único, indique o quadro correto e mantenha `status: 'rascunho'` durante a preparação.
4. Troque o status para `publicado`, teste a página do quadro e abra a publicação completa.
5. Publique a alteração por branch e pull request.

Os valores aceitos no campo `quadro` estão documentados no objeto `quadros`, dentro de `js/conteudos.js`.
