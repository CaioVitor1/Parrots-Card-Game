// Variáveis globais
let quantidade;
let jogadas=0;
let cartasViradas=0;
let paresDescobertos=0;  // o Jogo acaba quando paresDescobertos*2 = quantidade de cartas

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
    main.innerHTML += `<div class="card" data-identifier="card" onclick="cartasIguais(this.querySelector('.back-face'),this.querySelector('.front-face'),this)">
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
// Agora que já montei o baralho preciso fazer duas funções: Uma que saiba quando selecionei cartas iguais e outra que saiba que selecionei cartas diferentes

//função usada quando selecionamos cartas iguais:

function cartasIguais(back, front, cartaSelecionada) {
    if (cartaSelecionada.classList.contains("selecionada") || cartaSelecionada.classList.contains("match")) {
        return;
    }  // esse if está impedindo que a gente selecione uma carta que já foi selecionada

    jogadas = jogadas + 1;
    cartasViradas = cartasViradas + 1;

    cartaSelecionada.classList.add("selecionada")

    back.classList.remove("back-face");
    back.classList.add("front-face")

    front.classList.remove("front-face");
    front.classList.add("back-face")

   if (cartasViradas == 2) {
    let clique = document.querySelector(".screen_click_on")
    clique.classList.remove("screen_click_on")
    clique.classList.add("screen_click_off")

    let selecao = document.querySelectorAll(".selecionada")
    let carta1 = selecao[0];
    let carta2 = selecao[1];

    if (carta1.innerHTML == carta2.innerHTML) {
        carta1.classList.add("match");
        carta2.classList.add("match");

        cartasViradas = 0;

        clique.classList.toggle("screen_click_on")
        clique.classList.toggle("screen_click_off")

        carta1.classList.remove("selecionada");
        carta2.classList.remove("selecionada")

        paresDescobertos = paresDescobertos + 1;  

        setTimeout(checarVitoria,2000);  // Falta escrever a função checar Vitória

        return;
    }

        cartasViradas = 0;

        cartasDesiguais();      // Falta escrever a função para a seleção de cartas desiguais
        cartasDesiguais();
   }

    

}





jogar()




