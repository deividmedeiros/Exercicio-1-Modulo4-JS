let firstNumber = prompt('Digite o primeiro numero:')
let secondNumber = prompt('Digite o segundo numero:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber




alert('A soma dos dois números é : ' + sum)
alert('A subtração dos dois números é : ' + sub)
alert('A multiplicação dos dois números é : ' + multi)
alert('A divisão dos dois números é : ' + div.toFixed())
alert('Resto da divisão dos dois números é : ' + restDiv)

if(Number(sum % 2 == 0)) {
 alert('A soma dos dois números é Par: ' + sum)
} else {
 alert('A soma dos dois números é Impar: ' + sum)
}

if(Number(firstNumber == secondNumber)) {
 alert('Os números inseridos são iguais: ')
} else {
 alert('Os números inseridos são diferentes')
}
