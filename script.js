let html = '';

let i = 1;

while(i<=10){
    html += "i : "+i+"<br/>";
    i++;
}

document.getElementById("relatorio").innerHTML = html;