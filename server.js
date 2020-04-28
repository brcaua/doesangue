// chamando o pacote express que está instalao na máquina e criando um servidor com "server"
const express = require('express');
const server = express();

// configurando o servidor para apresentar arquivos estáticos
server.use(express.static('src'));

//habilitar propriedade "body" do form
server.use(express.urlencoded({ extended: true}))

// configurando a template engine (motor de temas)
const nunjucks = require('nunjucks');

nunjucks.configure('./src/', {
  express: server,
  noCache: true,
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
server.get('/', (req, res) =>
res.render("./src/index.html", { donors })
);

server.post('/', (req, res) => {
  const name = req.body.name
  const blood = req.body.blood
  //add valores ao array
  donors.push({
    name: name,
    blood: blood,
  })
  return res.redirect('/')
})

// Iniciando o servidor..
server.listen(3000, () => {
  console.log('Servidor iniciado');
});
