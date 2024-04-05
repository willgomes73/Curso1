function Calculadora() {


    //return {
       this.display = document.querySelector('.display');
        //btnClear: document.querySelector('.btn-clear'),



        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        } 

        this.pressionaEnter =() => {
            this.display.addEventListener('keypress', e =>{
                if(e.keyCody === 13) {
                    this.realizaConta();
                }                 
            });
        };

        this.cliqueBotoes= () => {
            // this = calculadora
            document.addEventListener('click', event => {
            // this mudou document se eu não usar as errow function que é (e =>) em vez de funtction(e)
                const el = event.target;

                if(el.classList.contains('btn-num')) this.btnParaDisplay(el);
                
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                
                if(el.classList.contains('btn-del'))this.apagaUm();
                
                if(el.classList.contains('btn-eq')) this.realizaConta()
                
            });
        };

        this.btnParaDisplay = valor =>  this.display.value += valor;

        this.clearDisplay = () => this.display.value = '';
        
        this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

        this.realizaConta =() => {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta invalida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('conta invalida');
                return;
            }
        }

    //};
}

const calculadora = new Calculadora();
calculadora.inicia();