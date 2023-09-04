const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");


//class
class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";

    }
    //add digit da calculadora
    addDigit(digit) {
        //check if current operation already has a dot
        if (digit === "." && this.currentOperationText.innerText.includes(".")){
            return
        }

       this.currentOperation = digit;
       this.updateScreen();
       
    }

    //process all calculator operations
    processOperation(operation) {
        // get current and previuos value
        let operationValue
        let previous = +this.previousOperationText.innerText;
        let current = +this.currentOperation.innerText;

        switch(operation){
            case "+":
                break
            default:
                return;
        }
    }

    //calculadora screen
    updateScreen
        (operationValue = null,
        operation = null,
        current = null,
        previous)
         {
        this.currentOperationText.innerText += this.currentOperation;
        
        
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

//evento de pegar os buttons 
buttons.forEach ((btn) => {

    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if(+value >=0 || value === " . "){
            calc.addDigit(value);
        }else {
            calc.processOperation(value)
        }
  
    });
});


 

