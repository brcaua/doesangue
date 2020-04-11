// chamando o pacote express que está instalao na máquina e criando um servidor com "server"
const express = require('express');

const server = express();

// configurando o servidor para apresentar arquivos estáticos
server.use(express.static('/src/'));

// configurando a template engine (motor de temas)
const nunjucks = require('nunjucks');

nunjucks.configure('./', {
  express: server,
});

// Lista de doadores
const donors = [
  {
    name: 'Breno Cauã',
    blood: 'O-',
  },
  {
    name: 'Danilo',
    blood: 'O+',
  },
  {
    name: 'Lukas',
    blood: 'A-',
  },
  {
    name: 'Diego',
    blood: 'AB-',
  },
];

// configurando a apresentação da página 💻
// o método "get" serve para pegar e mandar requisições, como no exemplo abaixo, no qual eu passo um parâmetro "/" e retorno um "res(resposta)" para o servidor
server.get('/', (req, res) => res.render('/src/index.html', { donors }));

// Iniciando o servidor..
server.listen(3000, () => {
  console.log('Servidor iniciado');
});
