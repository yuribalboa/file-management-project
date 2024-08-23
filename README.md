# Gerenciador de Arquivos em Node.js

Este projeto é uma aplicação em Node.js para administração de arquivos no sistema de arquivos local. A aplicação permite criar, listar, ler, escrever e deletar arquivos, tudo isso utilizando o módulo CommonJS do Node.js.

## O que é CommonJS?

CommonJS é um padrão de módulo para JavaScript que define como módulos devem ser estruturados, incluindo a forma como são importados e exportados. No Node.js, o CommonJS é o sistema de módulos padrão, o que significa que os arquivos utilizam `require` para importar módulos e `module.exports` para exportá-los.

### Exemplo de uso do CommonJS no projeto:

```javascript
const fileManager = require('./fileManager');
```

## Funcionalidades da Aplicação

O Gerenciador de Arquivos permite as seguintes operações:

- **Criar Arquivo:** Permite criar um novo arquivo no diretório especificado e adicionar conteúdo a ele.
- **Listar Arquivos:** Lista todos os arquivos presentes no diretório.
- **Ler Arquivo:** Exibe o conteúdo de um arquivo especificado.
- **Escrever em Arquivo:** Permite adicionar ou substituir o conteúdo de um arquivo existente.
- **Deletar Arquivo:** Remove um arquivo específico do diretório.
- **Sair:** Finaliza a execução da aplicação.

## Explicação do Código

- `**fileManager´:** Importa o módulo fileManager, que contém as funções de gerenciamento de arquivos.
- `**readLineSync´:** Utilizado para capturar a entrada do usuário no terminal.
- `**path´:** Módulo nativo do Node.js utilizado para manipular caminhos de arquivos e diretórios.
- `**main()´:** Função principal que executa o loop do menu e chama as funções apropriadas com base na escolha do usuário.

## Fluxo da Aplicação

1. **Configuração Inicial:** A aplicação cria um diretório chamado my_files na raiz do projeto.
2. **Menu Interativo:** O usuário interage com o menu no terminal para realizar as operações de gerenciamento de arquivos.
3. **Manipulação de Arquivos:** Dependendo da escolha, a aplicação executa a operação desejada (criar, listar, ler, escrever ou deletar arquivos).

