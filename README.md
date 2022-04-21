# Projeto 02 - Módulo 03 - Back-end

## _Blue Ed Tech Projeto Extra, Turma 12 - 2022_

Autor: Marcelo A Santos - GH: _DJMarshallSantos_,
Tutores Turma 12 - 2022:
Leo Ruiz - GH: _Leoruiz197_
Maria Eduarda de Araújo Cardoso - GH: _dudahcardoso_

## Objetivo

Back-end CRUD em banco de dados MongoDB (Read All e Read By Id).

## Características do Projeto

### _O projeto deve ter:_

### Endpoints (2 pontos)

- [GET] Leitura de todas os personagens (0,4 pontos);
- [GET] Leitura de personagens individuais (por ID) (0,4 pontos).
- [POST] Criação de personagens (0,4 pontos);
- [PUT] Edição de personagens por ID (0,4 pontos);
- [DELETE] Exclusão de personagens por ID (0,4 pontos).

### Requisitos (6 pontos)

- Requisitos (8 pontos)
- Padrão MVC aplicado corretamente (2 pontos);
- Persistência de dados no MongoDB (2 pontos);
- Formatação do código utilizando o Prettier (2 pontos);
- CORS - Liberado (2 pontos).

## Tech

Tecnologia usada no código:

- [express] = Um framework Node.js mínima e flexível que fornece um conjunto robusto de recursos para desenvolver aplicativos da Web e móveis.
- [nodemon] = Uma ferramenta que ajuda a desenvolver em node. js, reiniciando automaticamente o aplicativo do nó quando as alterações de arquivo no diretório são detectadas.
- [mongoose] = Uma biblioteca de modelagem de dados de objeto (ODM) para MongoDB e Node.js.
- [cors] = Um mecanismo para permitir ou restringir recursos solicitados em um servidor web dependendo de onde a solicitação HTTP foi iniciada.
- [node.js] - E/S com eventos para back-end

## Instalação

Instalação do node.js
1- Via navegador visite https://nodejs.dev/download/ e baixe o instalador do node.js
2- Sequindo os passos do instalador instale o software
3- Verifique a instalação usando command-prompt ou powershell

```sh
node -v
```

4- Faça o mesmo para NPM

```sh
npm -v
```

Instalação das dependências.

```sh
npm i express
npm i nodemon
npm i mongoose
npm i cors
```

## Arquivos

```
proj01_mod03
    .vscode
        settings.json
    node_modules
        ...
    src
        controllers
            characters.controller.js
        database
            database.js
        models
            Character.js
        routes
            characters.routes.js
        services
            characters.service.js
    .gitignore
    .prettierrc.json
    characters.json
    index.js
    LICENSE
    package-lock.json
    package.json
    README.md
```

## Agradecimentos

Agradeço meus tutores, Leo Ruiz e Maria Eduarda, no módulo 1.
Muito obrigado pelo profissionalismo e domínio do conteúdo e métodologia Blue.

Um obrigado especial a minha esposa, Lindamara Dias, que com sua parceria, paciência
e amor fornece apoio veemente. Luv' ya!

## License

**Público**
