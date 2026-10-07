let nome = prompt("qual é o seu nome?")

let nota1 = Number(prompt("Me fale a Nota 1"))
let nota2 = Number(prompt("Me fale a Nota 2"))

let media = (nota1 + nota2) / 2

if (media >= 6) {
    window.alert(`Parabens ${nome} VOCÊ fez o Minimo com a media: ${media}`)
    
} else {
    window.alert("Reprovou ")
    
}