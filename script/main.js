function etape1() { 
    document.getElementById('centre').style.display='block' ;
    document.getElementById('myButton').style.display='none' ;
}


myButton.onclick = function(){
    etape1() ;
}


let recherche = document.getElementById('bouton')


recherche.onclick = function(){
let  monBouton = recherche.getattribute('value');
//if (monBouton === "test") {recherche 

//}
console.log(monBouton)
}

