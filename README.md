# Challenge ONE - Alura Geek (AluraGuitar)

## Projeto de certificação do Programa ONE (Oracle/Alura)

- O presente projeto tem a finalidade de aplicar conceitos de APIs REST;
- Simulamos uma aplicação back-end com a utilização do JSON SERVER, criando um "falso" banco de dados;
- O enfoque aqui apresentado é utilizar alguns verbos HTTP (GET, DELETE), muito comuns no emprego dos conceitos de APIs.

- Para rodar o projeto:
* É preciso instalar o JSON-SERVER. Instale globalmente para poder utilizá-lo em outras aplicações;
* Clone o repositório e rode o comando *npm install* para instalar as dependências na pasta do projeto;
* Rode o comando *npx json-server db/db.json* para o deploy.


Para facilitar o uso da aplicação, deixarei uma cópia do arquivo *db.json*. Ao fazer testes e deletar os produtos, os endereços dos produtos no suposto banco de dados também serão deletados.


{
  "products": [
    {
      "id": 1,
      "name": "Fender Stratocaster",
      "price": 1000.00,
      "img": "../img/fender.png"
    },
    {
      "id": 2,
      "name": "Gibson LesPaul",
      "price": 1600.00,
      "img": "../img/gibson.png"
    },
    {
      "id": 3,
      "name": "Fender Telecaster",
      "price": 1200.00,
      "img": "../img/telecaster.png"
    },

    {
      "id": 4,
      "name": "Ibanez Iceman",
      "price": 800.00,
      "img": "../img/ibanez-iceman.png"



    },

    {
      "id": 5,
      "name": "Jackson Dinky",
      "price": 900.00,
      "img": "../img/jackson-dinky.png"



    },

    {
      "id": 6,
      "name": "ESP Guitar",
      "price": 1100.00,
      "img": "../img/esp-guitar.png"



    }
  ]
}



