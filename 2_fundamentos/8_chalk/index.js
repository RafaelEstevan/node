const chalk = require('chalk')

const nota = 6

if (nota >= 7){
    console.log(`Parabéns você está aprovado! Sua nota é ${chalk.green(nota)}`)
} else {
    console.log(`Lamento, você foi reprovado, sua nota é ${chalk.red(nota)}`)
}