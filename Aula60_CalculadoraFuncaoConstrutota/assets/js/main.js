function Calculadora() {
    this.display = document.querySelector('.display');
  
    this.inicia = () => {
      this.capturaCliques();
      this.capturaEnter();
    };
  
    this.capturaEnter = () => {
      document.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };
  
    this.capturaCliques = () => {
      document.addEventListener('click', event => {
        //Qual botão foi clicado
        const el = event.target;
        //Quando um novo elemento ao Display
        if (el.classList.contains('btn-num')) this.addNumDisplay(el);
        //Quando for limpar todos os elementos do Display
        if (el.classList.contains('btn-clear')) this.clear();
        //Quando deletar um elemento do Display
        if (el.classList.contains('btn-del')) this.del();
        //Quando for realizado um calculo no Display
        if (el.classList.contains('btn-eq')) this.realizaConta();
      });
    };
  
    this.realizaConta = () => {
      try {
        const conta = eval(this.display.value);
  
        if(!conta) {
          alert('Conta inválida');
          return;
        }
  
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    };
  
    this.addNumDisplay = el => {
      //clicar no botão e vai add o valor 
      this.display.value += el.innerText;
      // focar a pós clicar no botão 
      this.display.focus();
    };
  
    //Limpar minha calculadora zerando seu valor
    this.clear = () => this.display.value = '';
    //Deletar um elemento para esquerda 
    this.del = () => this.display.value = this.display.value.slice(0, -1);
  }
  
  const calculadora = new Calculadora();
  //Tudo começa pelo inicia
  calculadora.inicia();
  