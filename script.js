function converter(){
    let valor = document.getElementById("real").value;
    let p = document.getElementById("resul");
    let dolar = valor*0.1770

    p.textContent = (dolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
}   