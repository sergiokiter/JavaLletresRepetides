var nombre = ["S", "E", "R", 3, "G", "I", "O"];

    for(let i = 0; i < nombre.length; i++) {
        console.log(nombre[i])}

const vocales = ["A", "E", "I", "O", "U"];
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];



for(let i = 0; i < nombre.length; i++) {
    if(numeros.indexOf(nombre[i]) !== -1){
        console.log("Els noms de personas no contenen el número:" + nombre[i]);
        nombre.splice(i, 1);
        i--;}
    }
for(let i = 0; i < nombre.length; i++) {
    if(vocales.indexOf(nombre[i]) !== -1){
    console.log("He trobat la VOCAL:" + nombre[i]);
    } else if(vocales.indexOf(nombre[i]) == -1){
        console.log("He trobat la CONSONANT:" + nombre[i]);} 
    }



    
    
    function letras(str){
        var r = {}
        str = str.split("").map(function(a){ !r[a] && (r[a] = 0); r[a]++ })
        return function(what){
            console.log( { "repeticiones": r}[what])    
        }    
    }     
    var result = letras("SERGIO")
    result("repeticiones") 


    // //pruebas

    // function letras(str){
    //     var r = {}
    //     str = str.split("").map(function(a){ !r[a] && (r[a] = 0); r[a]++ })
    //     return function(what){
    //         console.log( { "repeticiones": r}[what])
           
    //     }
        
    // }
     
    // var result = letras("SERGIO ALEGRE")
    // result("repeticiones") 


    // function contarCaracteresV3(str) {
    //     let cantidadLetras = []
    //     let caracteres = str.toLowerCase().replace(/ /g, '').split('').filter((c,i,self) => (
    //         self.indexOf(c) === i
    //     ))
        
    //     for(var i=0; i<caracteres.length; i++){
    //         let arreglo=[]
    //         str.split('').map(n => {
    //             if(n.toLowerCase() === caracteres[i]){
    //                 arreglo.push(n)
    //             }          
    //         })
    //         cantidadLetras.push({[caracteres[i]]: arreglo.length})
    //     }
    
    //     return cantidadLetras
    // }
    
    // console.log(contarCaracteresV3("Sergio Alegre"));


var nombre1 = ["S", "E", "R", "G", "I", "O"];
var nombre2 = ["A", "L", "E", "G", "R", "E"];

let combinedArray = [].concat(nombre1," ",nombre2);

console.log(combinedArray)
