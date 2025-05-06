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
      <a href="/"><img src="/images/LOGO.png" alt=""></img></a>
      <h3>Pak Bet</h3>
       </div>
      <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>

      </div>

      <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Contato</a></li>
        <li><a href="/">Serviços</a></li>
      </ul>
    </nav>
  </header>
  
      `;
  }
}

customElements.define('header-component', Header);

