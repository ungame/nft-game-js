# NFT GAME com NODE JS

### Pré-requisitos

- [Download Ganache](https://www.trufflesuite.com/ganache)
- [Download Metamask](https://metamask.io/)


### Configurações

- Criar um Workspace no Ganache
- Copiar o RPC Server
- Copiar a chave privada de uma carteira
- Criar uma carteira na Metasmak
- Copiar e salvar a Senha da Metamask
- Copiar e salvar as frases de recuperação da Metamask
- Adicionar uma rede personalizada na Metamask
- Preencher no campo "Nome da Rede": `Ganache`
- Preencher no campo "Novo URL da RPC": URL copiada do RPC Server do Ganache
- Preencher no campo "ID da chain": `1337`
- Salvar
- Importar conta
- Preencher o campo com a chave privada copiada do Ganache
- Abrir um terminal como __admin__ e instalar a ferramenta de linha de comando `truffle`:

```cmd
npm install -g truffle
```


### Iniciar Projeto

```cmd
mkdir nft-game-js

cd nft-game-js

mkdir memory-game

cd memory-game

npm init -y

npm install @openzeppelin/contracts

npm install chai chai-as-promised

truffle init
```

- [Open Zeppeling](https://openzeppelin.com/)

### Configurar network

- Abrir o arquivo `truffle-config.js`
- Adicionar os parâmetros da rede do Ganache em network, exemplo:

```js
development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 7545,            // Default Ganache Network Port
    network_id: "*",       // Any network (default: none)
},
```

### Compilar o Contrato

```cmd
truffle compile
```

### Executar Testes


```cmd
truffle test
```

### Deploy do Contrato

```cmd
truffle migrate --reset --dry-run
```

> __dry-run__ é uma flag que faz um deploy fake do contrato na rede principal sem custos, com o objetivo apenas de testar o comportamento do contrato no deploy. Remova o --dry-run caso queira fazer o deploy de verdade.

### Linkar Contrato com o Ganache

- Clicar na aba Contracts do Ganache
- Clicar em Add Project
- Selecionar o arquivo truffle-config.js
- Salvar e Reiniciar


### Bibliotecas Usadas Memory Game Client

```cmd
npm install redux react-redux reduxsauce seamless-immutable bootstrap react-bootstrap
```

### Configurar Web3

- Criar um diretório `blockchain` dentro do `memory-game-client/src`
- Copiar o diretório `contracts` dentro de `memory-game/build` para o diretório `blockchain`
- Criar um arquivo `index.js` dentro do diretório `blockchain`
- Criar um provider que irá fazer a conexão com a metamask e fazer a chamadas para a blockchain
- [Instalar web3](https://web3js.readthedocs.io/en/v1.2.1/getting-started.html)

```cmd
npm install web3
```

