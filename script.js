let texto = '';

for(let i=1; i<=10; i++){
    texto = texto + i + '<br/>';
}

document.getElementById("dia").innerHTML = texto;

let carros = ['Onix', 'Gol', 'Kwid', 'Mobi'];

let html = '<ul>';

for(let i in carros){
    html+='<li>'+ carros[i] +'</li>';
}

html += '</ul>';

document.getElementById("relatorio").innerHTML = html;