class Calculator{
    constructor(prevoperandTextElement, currentoperandTextElement) {
        this.prevoperandTextElement = prevoperandTextElement
        this.currentoperandTextElement = currentoperandTextElement
        this.clear()
    }

clear() {
    this.currentoperand=''
    this.prevoperand=''
    this.operation=undefined
}
delete() {
     this.currentoperand=this.currentoperand.slice(0,-1)
}
appendNumber(number) {
    if (number==='.' && this.currentoperand.includes('.')) return 
    this.currentoperand=this.currentoperand.toString() + number.toString()
}
chooseoperations(operation){
    if(this.currentoperand==='') return
    if(this.prevoperand!==''){
        this.compute()
    }
     this.operation=operation
     this.prevoperand=this.currentoperand
     this.currentoperand=''
}
compute(){
  let computation
  const prev=parseFloat(this.prevoperand)
  const current=parseFloat(this.currentoperand)
  if(isNaN(prev) || isNaN(current)) return
  switch(this.operation){
    case '+':
        computation=prev+current
        break
    case '-':
        computation=prev-current
        break
    case '*':
        computation=prev*current
        break
    case '÷':
        computation=prev/current
        break
    case '%':
        computation=(prev/current)*100
        break
    default:
        return

  }
    this.currentoperand=computation
    this.operation=undefined
    this.prevoperand=''
}
updateDisplay(){
   this.currentoperandTextElement.innerText = this.currentoperand
   this.prevoperandTextElement.innerText = this.prevoperand
}
}

const numberButton = document.querySelectorAll('[data-number]')
const operatorButton = document.querySelectorAll('[data-oper]')
const equalButton = document.querySelector('[data-equal]')
const allclearButton = document.querySelector('[data-ac]')
const deleteButton = document.querySelector('[data-delete]')
const prevoperandTextElement = document.querySelector('[data-prev-operand]')
const currentoperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(prevoperandTextElement, currentoperandTextElement)

numberButton.forEach(button =>{
     button.addEventListener('click',()=>{
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
     })
})
operatorButton.forEach(button =>{
    button.addEventListener('click',()=>{
           calculator.chooseoperations(button.innerText)
           calculator.updateDisplay()
    })
})
equalButton.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})
allclearButton.addEventListener('click',()=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',()=>{
    calculator.delete()
    calculator.updateDisplay()
})










