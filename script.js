let carro = {
    marca: 'Fiat',
    carro: 'Mobi',
    peso: '960kg',
    ligar: function(){
        console.log("Deu partida no carro");
    },
}

console.log("Marca: "+carro.marca);
carro.ligar();