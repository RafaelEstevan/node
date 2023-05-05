const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem de programação favorita? ', (language)=>{
    console.log(`A minha linguagem de programação favorita é: ${language}`)
    readline.close()
})