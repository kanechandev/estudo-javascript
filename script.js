function teste(){
    console.log(document.getElementsByClassName('lista'));
    console.log(document.querySelector('ol.lista'));    
    console.log(document.querySelector('#titulo'));
    console.log(document.querySelector('#titulo').innerHTML = 'Alterando o título pela função teste()');
    console.log(document.querySelectorAll('.lista'));        
}