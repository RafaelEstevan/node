// mais de um valor
const x = 10
const y = 'Rafael'
const z = [1, 2]

console.log(x, y, z)

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// Varivel entre string
console.log(`O nome dele é ${y} e ele é programador`)

// Limpar console
setTimeout(()=>{
    console.clear()
}, 2000)