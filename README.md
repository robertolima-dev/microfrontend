<h1>🔗 MICROFRONTEND</h1>

<h3>🚀 Projeto com Webpack, React e Module Federation</h3>

<p>
Temos 3 projetos separados. Um App pai, uma home e um contato. Cada um desses projetos com seu servidor distinto, iniciarão em portas diferentes.
</p>

<p>
O plugin Module Federation dos componentes Home e Contato, expõe para que o App pai possa consumi-los. Veja a configuração em webpack.config.js que se encontra dentro de cada um dos projetos.
</p>

<p>
Faça o clone do projeto, entre no componente home, instale as dependecias e inicie o projeto. Verifique se ele iniciou na porta 9002. Faça o mesmo em contact e verifique na porta 9003 e por fim, no componente app. Ao iniciar o componente app ele vai consumir os dois componentes e assim, renderiza-los na porta 9001.
</p>

### 🛠 Tecnologias

- [x] React
- [x] Webpack
- [x] Webpack-cli
- [x] Babel
- [x] Module Federation


<!--ts-->
   * [Como iniciar o projeto]
      * [git clone https://github.com/robertolima-dev/microfrontend.git]
<!--te-->

<!--ts-->
   * [Componente Home]
      * [cd home]
      * [npm i]
      * [npm run dev - http://localhost:9002]
<!--te-->

<!--ts-->
   * [Componente Contact]
      * [cd contact]
      * [npm i]
      * [npm run dev - http://localhost:9003]
<!--te-->

<!--ts-->
   * [Componente pai]
      * [cd app]
      * [npm i]
      * [npm run dev - http://localhost:9001]
<!--te-->

