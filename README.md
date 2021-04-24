
## <div align="center">Agilizei Bootcamp - Challenge 04 - Último Desafio</div>  
  

### Nesse último módulo aprendemos a testar APIs com Cypress

- Testes de HealthCheck
- Validações de contrato
- Filtrar a execução dos testes utilizando tags  
  
### Esse projeto foi estruturado da seguinte forma

- Na pasta integration estão as nossas specs
  - Na spec pin.spec.js  está o nosso teste de healthcheck(teste que valida que a aplicação está no ar)
  - Na outra spec booking.spec.js estão os demais testes da nossa API
- Na pasta api, dividimos as responsabilidades em assertions, requests e schemas

![estrutura_pastas](https://user-images.githubusercontent.com/6169190/115972896-952d1780-a527-11eb-890b-355a4076aeda.png)

### Execução dos testes 🚀

![tests_api_cypress](https://user-images.githubusercontent.com/6169190/115972927-c7d71000-a527-11eb-8ca2-a00688af348f.gif)


## Começando 💻

### Pré-requisitos ⚙️ ###
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Cypress](https://cypress.io/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


```ruby
# Clone este repositório
$ git clone <https://github.com/elvercioneto/cypress-challenge04>

# Instale as dependências
$ npm install

# Execute a aplicação em modo headless
$ npm run test

# Execute somente os testes com a tag @healthcheck
$ npm run test:healtcheck

# Execute somente os testes com a tag @contract
$ npm run test:contract

# Execute somente os testes com a tag @functional
$ npm run test:functional

```

  
<br/>  

<div align="center">
<a href="https://github.com/elvercioneto" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://twitter.com/elvercioneto" target="_blank">
<img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
</a>
<a href="https://linkedin.com/in/elvercioneto" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>  
</div>  

<br />


