// Variáveis globais
let quantidade;
const imagensCartas = ["imagens/bobrossparrot.gif","imagens/bobrossparrot.gif",
                        "imagens/explodyparrot.gif","imagens/explodyparrot.gif",
                        "imagens/fiestaparrot.gif","imagens/fiestaparrot.gif",
                        "imagens/metalparrot.gif","imagens/metalparrot.gif",
                        "imagens/revertitparrot.gif","imagens/revertitparrot.gif",
                        "imagens/tripletsparrot.gif","imagens/tripletsparrot.gif",
                        "imagens/unicornparrot.gif","imagens/unicornparrot.gif"]

function jogar() {

function selecionandoQuantidade() {
    quantidade = parseInt(prompt("Com quantas cartas você quer jogar?"))      
}
selecionandoQuantidade()

while((quantidade < 4) || (quantidade > 14)  || ( (quantidade%2) !== 0) ) {
    quantidade = prompt("Quantidade inválida. Escolha um número par entre 4 e 14 cartas");
    selecionandoQuantidade()
}

// embaralhando as cartas
function comparador() {
    return Math.random() - 0.5;    //função dada na descrição do projeto
}

let imagensEmbaralhadas = imagensCartas.slice(0,(quantidade));
imagensEmbaralhadas.sort(comparador)

// Montando o baralho de cartas no browser

for (let i=0; i < quantidade; i++) {
    let main = document.querySelector('main')
    main.innerHTML += `<div class="card" data-identifier="card">
    <div class="back-face face" data-identifier="back-face">
        <img src="imagens/front.png" alt="back_card">
    </div>
    <div class="front-face face" data-identifier="front-face">
    <img src=${imagensEmbaralhadas[i]} alt="front_card">
    </div>
    </div>
    `


}



} // fim da função jogar



jogar()



//...............................................................................

/*
let cartas = []
let carta = "carta"
for(let i=0; i< quantidade;i++) {
   carta = carta + i
   cartas.push(carta)
}
console.log(cartas)  // Aqui eu já tenho a quantidade de cartas que o baralho terá

// Montando o baralho de cartas no browser
let conjuntoCartas = document.querySelector(".baralho")

for (let i=0; i < quantidade; i++) {
    conjuntoCartas.innerHTML += ` 
        <div class="front-face carta-background ">
            <img class="tamanho-papagaio " src="imagens/front.png" alt=""> 
        </div>
        <div class="back-face carta-background">
            <img class="tamanho-gif" src="imagens/unicornparrot.gif" alt=""> 
        </div>
    `
}

} // fim da função jogar
*/