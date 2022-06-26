function digitou(e){
    if(e.ctrlKey == true && e.keyCode == 13){
        let texto = document.getElementById("campo").value;

        console.log(texto);
    }
}