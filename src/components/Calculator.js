import Display from "./Display";
import Keyboard from "./Keyboard";

export default class Calculator {
    domElement = document.createElement('div');
    
    display = null;
    keyboard = null;
    
    numbers = [];
    operation = 'sum';
    result = 0;

    constructor(appContainer) {
        this.domElement.id = 'calculator';
        appContainer.appendChild(this.domElement);
        
        this.display = new Display(this.domElement);
        this.keyboard = new Keyboard(this);
    }

    addNumber(number) {
        this.numbers.push(number);
        this.display.render(number);

        return this;
    }

    setOperation(operation) {
        this.operation = operation;
    }

    execute() {
        if (this.operation === 'sum') {
            this.result = this.numbers.reduce((prev, current) => prev + current, 0)
            this.display.render(this.result);
        }
    }
}