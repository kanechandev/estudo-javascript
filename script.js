function menuToogle(){
    let menuArea = document.getElementById("menu-area");
    let menuImg = document.getElementById("menu-img");

    if(menuArea.style.width == '200px'){
        menuArea.style.width = '0px';
    }else{
        menuArea.style.width = '200px';
    }
}