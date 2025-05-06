console.log('footer.js carregado com sucesso!');

class footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

 <footer>
        <div class="footer-container">
          <div class="footer-logo">
            <a href="/"><img src="/images/LOGO.png" alt=""></img></a>
            <h2>Pak Bet</h2>
          </div>
          <div class="footer-social">
            
            <a href="#" target="_blank">Facebook</a>

            <a href="#" target="_blank">Twitter</a>

            <a href="#" target="_blank">Instagram</a>
          </div>
        </div>
      </footer>
  
      `;
  }
}

customElements.define('footer-component', footer);

