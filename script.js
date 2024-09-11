
var p = document.getElementById("resul");

function converter(){
    let valor = document.getElementById("valor").value; 
    valor = valor.replace(".", "").replace("R$ ", "").replace(".", "");
    let dolar = valor*0.1770;   
    p.textContent = (dolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
}   

function change(){

    let valor = document.getElementById("valor");
    let valorAtual = valor.value
    
    if (valorAtual == "") {

    } else {
        valorAtual = valorAtual.replace(/\D/g, "");
        valorAtual = valorAtual.replace(".", ",");
        valorAtual = valorAtual.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        valor.value = "$ " + valorAtual;
    }
    

    valor.oninput = function formatarDolar(){
        let valorAtual = valor.value
        valorAtual = valorAtual.replace(/\D/g, "");
        valorAtual = valorAtual.replace(".", ",");
        valorAtual = valorAtual.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        valor.value = "$ " + valorAtual;
    }

    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let btn = document.getElementById("submit");

    m1.textContent = "Dólar";
    m2.textContent = "Real";

    

    btn.onclick = function trocar() {
        let valor = document.getElementById("valor").value;
        valor = valor.replace(".", "").replace("R$ ", "").replace(".", "").replace("$ ", "");
        let real = valor*5.6493;
        p.textContent = (real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    }
}

function formatarMoeda(input){
    let valor = input.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    input.value = "R$ " + valor;
}