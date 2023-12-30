
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear() {
        this.currentOperand = '';
        this.previourOperand = '';
        this.operation = undefined;
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previourOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previourOperand = this.currentOperand
        this.currentOperand = ''
    }

    // computing numbers with operators
    compute() {
        let computation
        const prev = parseFloat(this.previourOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break;
            case '*':
                computation = prev * curr
                break;
            case '/':
                computation = prev / curr
                break;
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined;
        this.previourOperand = '';


    }


    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }


    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previourOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

// Add event listener for key presses
document.addEventListener('keydown', event => {
    const { key } = event;

    // Check if the pressed key is a number key (0-9) or a decimal point (.)
    if (!isNaN(key) || key === '.') {
        calculator.appendNumber(key);
        calculator.updateDisplay();
    }

    // Check if the pressed key is an operator key (+, -, *, /)
    if (['+', '-', '*', '/'].includes(key)) {
        calculator.chooseOperation(key);
        calculator.updateDisplay();
    }

    // Check if the pressed key is the Enter key (=)
    if (key === 'Enter') {
        calculator.compute();
        calculator.updateDisplay();
    }

    // Check if the pressed key is the Delete or Backspace key
    if (['Delete', 'Backspace'].includes(key)) {
        calculator.delete();
        calculator.updateDisplay();
    }

    // Check if the pressed key is the Escape key (clear all)
    if (key === 'Escape') {
        calculator.clear();
        calculator.updateDisplay();
    }
});

// to equal all
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

// to clear all
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

// to delete digits
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

