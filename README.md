# JSExpertMax Gesture Controller - Semana JS Expert 7.0

Olá. Este projeto foi desenvolvido durante a Semana Javascript Expert 7.0 ministrada pelo [Erick Wendel](https://github.com/ErickWendel).

O template inicial e código das aulas está disponível [neste repositório](https://github.com/ErickWendel/semana-javascript-expert07).

## Preview
<img width=100% src="./assets/demo-template-lg.gif">

## Pre-reqs

- Este projeto foi criado usando Node.js v19.6

## Running

- Execute `npm ci` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

## Checklist Features
- Titles List
  - [x] - Campo para pesquisa não deve travar ao digitar termo de pesquisa
  - [x] - Deve desenhar mãos na tela e fazer com que elementos em segundo plano  continuem sendo clicáveis  🙌
  - [x] - Deve disparar scroll up quando usar a palma das mãos abertas 🖐
  - [x] - Deve disparar scroll down quando usar a palma das mãos fechadas ✊
  - [x] - Deve disparar click no elemento mais próximo quando usar  gesto de pinça 🤏🏻
  - [x] - Ao mover elementos na tela, deve disparar evento **:hover** em elementos em contexto

- Video Player
  - [x] - Deve ser possivel de reproduzir ou pausar videos com o piscar de olhos 😁
  - [x] - Todo processamento de Machine Learning deve ser feito via Web worker

### Desafios / extra features
- Utilizando o gesto "" é possível focar no campo de busca
- Usar as mãos virtuais também no Video Player
- Diferenciar piscada de olhos entre olho direito e esquerdo
  - Piscando com o olho direito o video avança 5s
  - Piscando com o olho esquerdo o vídeo retrocede 5s


### Créditos ao Layout
- Interface baseada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)
