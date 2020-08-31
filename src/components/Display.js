export default class Display {
    domElement = document.createElement('div');
    
    constructor(displayContainer) {
        this.domElement.id = 'calculatorDisplay';
        displayContainer.appendChild(this.domElement);
    }

    render(value) {
        this.domElement.innerText = value;
    }
}