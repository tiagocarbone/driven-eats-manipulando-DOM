let prato1Container = document.querySelector('.prato-1')
let bebida2Container = document.querySelector('.bebida-2')
let sobremesa3Container = document.querySelector('.sobremesa-3')
let divFecharPedido = document.querySelector(".button")
let body = document.querySelector("body")
let fixedBar = document.querySelector(".fixed-bar")
let instrucao = document.querySelector(".instrucao")
let fixedEnd = document.querySelector(".fixed-end")

let layout = document.querySelector(".layout")
let layoutComida = document.querySelector(".layout .comida")
let layoutBebida = document.querySelector(".layout .bebida")
let layoutSobremesa = document.querySelector(".layout .sobremesa")
let layoutFinal = document.querySelector(".layout .final")




let botaoSelecionadoAntesComida
let svgAntesComida
let svgComida


let botaoSelecionadoAntesBebida
let svgAntesBebida
let svgBebida

let botaoSelecionadoAntesSobremesa
let svgAntesSobremesa
let svgSobremesa


let valorComida 
let valorBebida
let valorSobremesa

let nomeComida 
let nomeBebida
let nomeSobremesa



function selecionaPrato(botao) {
   
    let valorPratoComida = Number(botao.querySelector(".prato-preco").innerHTML.split("R$")[1].replace(",", "."));
    let nomePratoComida = botao.querySelector(".prato-nome").innerHTML
    

    let botaoSelecionadoAntesComida = document.querySelector(".prato-1 .selected");
    let svgAntesComida = prato1Container.querySelector(".selected svg");

    
    if (botaoSelecionadoAntesComida && svgAntesComida) {
        botaoSelecionadoAntesComida.classList.remove("selected");
        svgAntesComida.style.display = "none";
    }

   
    botao.classList.add("selected");
    const svgComida = botao.querySelector("svg");
    svgComida.style.display = "block";

    
    valorComida = valorPratoComida;  
    nomeComida = nomePratoComida;  

    
    console.log("Valor do prato atual:", valorPratoComida);
    console.log(nomePratoComida)

    
    checagem();
}


function selecionaBebida(botao){
    
    let botaoSelecionadoAntesBebida = document.querySelector(".bebida-2 .selected")
    let svgAntesBebida = bebida2Container.querySelector(".selected svg")

    let nomeBebidaTeste = botao.querySelector(".bebida-2 .prato-nome").innerHTML
    let precoBebidaTeste = Number(botao.querySelector(".bebida-2 .prato-preco").innerHTML.split("R$")[1].replace(",", "."))

    


    if(botaoSelecionadoAntesBebida && svgAntesBebida){
        botaoSelecionadoAntesBebida.classList.remove("selected")
        svgAntesBebida.style.display = "none"
    }
    botao.classList.add("selected")
    svgBebida = botao.querySelector("svg")
    svgBebida.style.display = "block"
    valorBebida = precoBebidaTeste
    nomeBebida = nomeBebidaTeste
    checagem()
}

function selecionaSobremesa(botao){
    
    let botaoSelecionadoAntesSobremesa = document.querySelector(".sobremesa-3 .selected")
    let svgAntesSobremesa = sobremesa3Container.querySelector(".selected svg")



    let nomeSobremesaTeste = botao.querySelector(".sobremesa-3 .prato-nome").innerHTML
    let valorSobremesaTeste = Number(botao.querySelector(".sobremesa-3 .prato-preco").innerHTML.split("R$")[1].replace("," , "."))

    if(botaoSelecionadoAntesSobremesa ){
        botaoSelecionadoAntesSobremesa.classList.remove("selected")
        svgAntesSobremesa.style.display = "none"
    }
    botao.classList.add("selected")
    svgSobremesa = botao.querySelector("svg")
    svgSobremesa.style.display = "block"
    valorSobremesa = valorSobremesaTeste
    nomeSobremesa = nomeSobremesaTeste 
    checagem()
    
    
}

function checagem(){
    if(prato1Container.querySelector(".selected") 
     && bebida2Container.querySelector(".selected")
     && sobremesa3Container.querySelector(".selected")  )
     {
        divFecharPedido.innerHTML = "<p>Fechar pedido</p>"
        divFecharPedido.style.backgroundColor = "#32B72F"
        let paragrafo = divFecharPedido.querySelector("p")
        paragrafo.style.fontWeight = "700"
    }
}




function fecharPedido() {
    
    if(prato1Container.querySelector(".selected") 
        && bebida2Container.querySelector(".selected")
        && sobremesa3Container.querySelector(".selected")  )
        {
            fixedBar.style.opacity = 0.3
    prato1Container.style.opacity = 0.3
    bebida2Container.style.opacity = 0.3
    sobremesa3Container.style.opacity = 0.3
    instrucao.style.opacity = 0.3
    fixedEnd.style.opacity = 0.3
    layout.style.display = "flex"
    layout.innerHTML = `<h1>Confirme seu pedido</h1>
    
        <div class="container-p comida">
            <p>${nomeComida}</p>
            <p>${valorComida.toFixed(2)}</p>
        </div>
    
        <div class="container-p bebida">
            <p>${nomeBebida}</p>
            <p>${valorBebida.toFixed(2)}</p>
        </div>
    
        <div class="container-p sobremesa">
            <p>${nomeSobremesa}</p>
            <p>${valorSobremesa.toFixed(2)}</p>
        </div>
    
        <div class="container-p final">
            <p class="total">TOTAL</p>
            <p class="total" >${(valorComida + valorBebida + valorSobremesa).toFixed(2)}</p>
        </div>
    
        <div class="button-fechar" onclick="pedidoConcluido()">
            <p>Tudo certo, pode pedir</p>
        </div>
        <div class="cancelar">
            <p onclick="fecharPedidoCancelar()">Cancelar</p>
        </div> `
       } else {
        window.alert("selecione 3 itens")
       }

    
   
    

        
        
}


function fecharPedidoCancelar() {
    /*
    fixedBar.style.opacity = 1
    prato1Container.style.opacity = 1
    bebida2Container.style.opacity = 1
    sobremesa3Container.style.opacity = 1
    instrucao.style.opacity = 1
    fixedEnd.style.opacity = 1
    layout.style.display = "none"
    */
    location.reload()
    
}


function pedidoConcluido(){
    window.location.href = `https://wa.me/5521988952123?text=Olá, gostaria de fazer o pedido:%0A- Prato: ${nomeComida} %0A- Bebida: ${nomeBebida}%0A- Sobremesa: ${nomeSobremesa} %0A Total: R$ ${(valorComida + valorBebida + valorSobremesa).toFixed(2)}`
}
