export default class Keyboard {
    domElement = document.createElement('div');
    calculator = null;

    numberInput = null;
    sendBtn = null;
    runBtn = null;

    constructor(calculator) {
        this.calculator = calculator;

        this.domElement.id = 'calculatorkeyboard';
        calculator.domElement.appendChild(this.domElement);

        this.render();
    }

    render() {
        this.numberInput = document.createElement('input');
        this.numberInput.type = 'text';

        this.sendBtn = document.createElement('button');
        this.sendBtn.innerText = 'Send';
        
        this.sendBtn.addEventListener('click', this.clickSend);

        this.runBtn = document.createElement('button');
        this.runBtn.innerText = 'Run';

        this.runBtn.addEventListener('click', this.clickRun);

        this.domElement.appendChild(this.numberInput);
        this.domElement.appendChild(this.sendBtn);
        this.domElement.appendChild(this.runBtn);
    }

    clickSend = () => {
        if (this.numberInput.value.length > 0) {
            this.calculator.addNumber(+this.numberInput.value);
            this.numberInput.value = '';
        }
    }

    clickRun = () => this.calculator.execute();
}