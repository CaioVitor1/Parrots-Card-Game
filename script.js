let quantidade = prompt("Com quantas cartas você quer jogar?")
while((quantidade < 4) || (quantidade > 14)  || ( (quantidade%2) !== 0) ) {
    quantidade = prompt("Quantidade inválida. Escolha um número par entre 4 e 14 cartas")
}
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
        <div class="carta-background front-face">
            <img class="tamanho-papagaio " src="imagens/front.png" alt=""> 
        </div>
        <div class="carta-background back-face">
            <img class="tamanho-gif" src="imagens/unicornparrot.gif" alt=""> 
        </div>
    </div>
    `
}

/*<div class="card">
      <div class="front-face face">
        Frente
      </div>
      <div class="back-face face">
        Verso
      </div>
    </div> */
console.log