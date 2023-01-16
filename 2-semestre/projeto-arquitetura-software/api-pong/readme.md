### API PING/PONG

Antes de iniciar o usuário deve clonar o repositorio e utilizar npm ou yarn install para instalar as dependências

Para iniciar o servidor basta executar ts-node server.ts

Caso apareça comando inválido o ts-node deve estar instalado de forma global, assim como o typescript

npm i -g typescript ts-node

Ao iniciar o servidor o usuário poderá passar um parâmetro msg na rota "/"

exemplo: GET na rota http://localhost:3000/ping

o servidor deverá responder pong

caso a resposta seja diferente de ping ou pong o servidor retornará uma mensagem.
