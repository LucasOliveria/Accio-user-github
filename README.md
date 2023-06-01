<h1>Accio Users GitHub</h1>

<h2 style="font-family: sans-serif;">Sobre o projeto:</h2>

<p style="text-align: justify;">
    O objetivo desse projeto foi desenvolver uma maneira mais <strong style="color: blue;">fácil</strong> de <strong style="color: blue;">pesquisar usuários no GitHub</strong>. Um localizador de usuários com perfis que melhor correspondam a localidade e tipo ou tipos de linguagem de programação escolhidos nos parâmetro de busca. Tornando a experiência de quem busca usuários no GitHub mais <strong style="color: blue;">rápida</strong> e <strong style="color: blue;">prática.</strong>
</p>

<h2 style="font-family: sans-serif;">Sobre o Accio Users GitHub:</h2>

<p style="text-align: justify;">
  A aplicação é bem simples e intuitiva de usar. Com apenas alguns cliques é possível escolhe a <strong style="color: blue;">localidade</strong> (UF e cidade) e uma ou mais <strong style="color: blue;">linguagens de programação</strong> desejadas.
</p>

<p style="text-align: justify;">
  Para tal funcionamento foram utilizadas duas API's. A <strong style="color: blue;">API do IBGE</strong> com dados de estados e cidades correspondentes e a <strong style="color: blue;">API do GitHub</strong>  com informações sobre seus usuários.
</p>

<p style="text-align: justify;">
    Visite a aplicação: <a href="https://accio-user-github.netlify.app/">Accio User GitHub</a>

<h2 style="font-family: sans-serif;">Sobre a ordem dos resultados:</h2>

<p style="text-align: justify;">
  Ao informar-mos qual localidade e linguagem de programação queremos e clicarmos no botão <strong style="color: blue;">Accio</strong>, uma requisição será enviada para a API do GitHub que por padrão devolverá os resultados em ordem decrescente começando pela melhores correspondências de acordo com os parâmetros de busca selecionados. Em outras palavras 
  <strong style="color: blue;">do Maior Match para o Menor Match</strong>.
</p>

<h2 style="font-family: sans-serif;">Como utilizar os códigos desse repositório:</h2>

<p style="text-align: justify;">
    Caso queira utilizar o código presente nesse repositório basta cloná-lo para sua máquina e utilizar o comando npm install no terminal do seu Editor de código para instalar node_modules e suas dependências. Após isso você poderá rodar a aplicação utilizando o comando npm run dev.
</p>

<h2 style="font-family: sans-serif;">Linguagens e bibliotecas utilizadas:</h2>

<ul>
    <li>React</li>
    <li>HTML(JSX)</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React Router Dom</li>
    <li>React Toastify</li>
    <li>API IBGE</li>
    <li>API GitHub</li>
</ul>

<h2 style="font-family: sans-serif;">Layout (não responsívo para mobile):</h2>

<h4>Tela inicial</h4>
<img src="./src/images/home-screen.png" alt="Escolhendo Palpites">

<h4>Escolhendo Localidade</h4>
<img src="./src/images/choosing-locale-toast.png" alt="Escolhendo Palpites">

<img src="./src/images/choosing-locale.png" alt="Escolhendo Palpites">

<h4>Escolhendo Linguagem</h4>
<img src="./src/images/choosing-languages.png" alt="Escolhendo Palpites">

<h4>Usuários</h4>
<img src="./src/images/users.png" alt="Escolhendo Palpites">

<h4>Sem resultados</h4>
<img src="./src/images/no-results.png" alt="Escolhendo Palpites">

<p style="text-align: justify;">
 <b><strong style="color: blue;">OBS</strong>.: Ainda não está responsívo em versões mobiles! Novas atualizações em breve</b>
</p>

<h2 style="font-family: sans-serif;">Autor</h2>

<p>Lucas Oliveira</p>

<h2 style="font-family: sans-serif;">Links</h2>

<a href="http://www.linkedin.com/in/lucas-de-oliveira-5b8a5532" target="_blank">LinkedIn</a>
<br>
<a href="https://accio-user-github.netlify.app/" target="_blank">Accio User GitHub</a>
<br>
