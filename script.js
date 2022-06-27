function trocar(){
    if(document.querySelector('button').classList.contains('vermelho')){
        document.querySelector('button').classList.remove('vermelho');
        document.querySelector('button').classList.add('verde');
    }
    else
    {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('vermelho');
    }
}