console.log('header.js carregado com sucesso!');

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

<header>
    <nav>
      <div  class="logo-header">
      <a href="./pages/login.html"><img src="/images/LOGO.png" alt=""></img></a>
      <h3>Pak Bet</h3>
       </div>
      <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>

      </div>

      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/">Jogos</a></li>
        <li><a href="/">Ao-vivo</a></li>
        <li><a href="/">Perfil</a></li>
        <li><a href="/">Notificações</a></li>
      </ul>
    </nav>
  </header>
  
      `;
  }
}


customElements.define('header-component', Header);

