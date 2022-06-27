let dia = 3;
let diaNome = '';

switch(dia){
    case 1:
        diaNome = 'Domingo';
        break;
    case 2:
        diaNome = 'Segunda';
        break;
    case 3:
        diaNome = 'Terça';
        break;
    case 4:
        diaNome = 'Quarta';
        break;
    case 5:
        diaNome = 'Quinta';
        break;
    case 6:
        diaNome = 'Sexta';
        break;
    case 7:
        diaNome = 'Sábado';
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;