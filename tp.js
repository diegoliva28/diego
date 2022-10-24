/* for(let i=0;i<3;i++){alert("quien es usted? repeticion "+(i+1)+"")}
alert("chau")

let oportunidades= 10;
for(let i=1;i<=oportunidades;i++){console.log("usaste tu intento n°"+i+"")}

for(let i=10;i>0;i--){alert("faltan "+i+" segundos para 2023")}

alert("feliz año nuevo. el primer bebe se llama goku") */

/* for(let i=1;i<=10;i++){
    console.log("3*"+i+"=" +(3*i))
} */
/* let numeroelegido= parseInt(prompt("Elegi un numero para multiplicar"))

for(let i=1;i<=10;i++){
    console.log(numeroelegido+"*"+i+"=" +(numeroelegido*i))}

     */

/* let nombre
for(let i=0;i<3;i++){
    nombre=prompt("ingrese tu nombre");
    alert("buenas noches "+nombre+"")
} */

/* let pass="goku"
for(let i=0;i<3;i++){
    let userpass=prompt("Ingrese tu contraseña");
    if(userpass==pass){ alert("loggin completado");break} 
    else{alert("volver a intentarlo")}
    
}

alert("fin del proceso")
 */
/* 
 */

/* let repetir=true;
while(repetir){
    console.log("soy un bucle while")
    repetir=false; */
/* let edad=parseInt(prompt("ingrese tu edad"))

while(edad<16){
    console.log("no podes pasar");
    edad=parseInt(prompt("ingresa tu edad"))
} */

/* let palabraclave="pepito"
let palabrausuario= prompt("ingresa tu palabra")

while(palabrausuario!=palabraclave){
    alert("palabra incorrecta")
    palabrausuario=prompt("ingresa tu palabra")
}
 *//* 
let pass="messi"

let passusuario= prompt("ingrese la palabra")
let continuarpreguntando=true

while(continuarpreguntando){
    if(passusuario==pass){
        alert("bienvenido");
        continuarpreguntando=false;
        break
    }
    alert("contraseña incorrecta");
    passusuario= prompt("ingrese tu contraseña")
}

 */

/* let condition=false;

do{console.log("soy un bucle do... while");}
while(condition) */
//let opcion= prompt("elegi una opcion ")

/* let savedpin="28701"
let ingresar=false; 

   function loggin(){
     for(let i=2;i>=0;i--){
        let pin=prompt("ingresa tu contraseña "+(i+1)+" oportunidades")
    if(pin==savedpin){
        alert("ingreso logrado, bienvenido");
        ingresar=true;
        break;
    }else
    {alert("error, te quedan "+i+"")}
    }
return ingresar
}
 
    
loggin ()
if(ingresar==true){alert("hola");} else{alert("chau")}  */

/* function sumar2numeros(numeroA, numeroB){
    let resultado= numeroA+numeroB;
    return resultado
}
console.log(sumar2numeros(3,1))

function dividir(numeroa, numerob){
    let resultado= numeroa/numerob
    return resultado
}
 */
/* console.log(dividir(4,2))
 */

/* let primernumero=parseInt(prompt("ingrese un numero"))
let segundonumero= parseInt(prompt("ingrese otro numero"))
let operador = prompt("ingrese la operacion")

function calcular(primernumero,segundonumero,operador){
    switch(operador){
        case "+":
            let resultado=primernumero+segundonumero
            return resultado
        case "-":
            return primernumero-segundonumero
        case "*":
            return primernumero*segundonumero
        case"/":
            return primernumero/segundonumero
        default:
            return"opcion invalida"
    } 
}
console.log(calcular(primernumero, segundonumero, operador))


let user="santi" */

/* const suma= function(a,b){
    return a+b
}

console.log(suma(10,20)) */

const suma=(A,b)=>A+b
const resta=(A,b)=> A-b
const iva= x=> x*0.21

let precioproducto= 150000;
let descuento= 20000;
let preciofinal=resta(suma(iva(precioproducto), precioproducto), descuento)

console.log(preciofinal)

/* 

*/
/* function saludar(nombre){
    alert("buenos dias "+nombre)   
}
let nombreX=prompt("ingrese el nombre")

for(let i=0;i<3;i++){
    saludar(nombreX)
}
 */


   /*  let pass="goku"
    for(let i=0;i<3;i++){
        let userpass=prompt("Ingrese tu contraseña");
        if(userpass==pass){ alert("loggin completado");break} 
        else{alert("volver a intentarlo")}
        
    }
    
    alert("fin del proceso") */
    


/* if(loggin()){
    let saldo= 10000;
    let opcion = prompt("Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.");

    /* while(opcion!="X"&&opcion!="x"){
        switch(opcion){
             case "1":
                alert("tu saldo es "+saldo);
                break;
            case "2":
                let retiro= parseint(prompt("ingresa el monto a retirar"));
                if(retiro<=saldo){
                    saldo-=retiro;
                    alert("retiro exitoso. tu saldo es $ "+saldo);
                }else{
                    alert("fondos insuficientes");
                }
                break;
            
            case "3":
                let deposito=parseInt(prompt("ingrese monto a depositar"));
                saldo+=deposito;
                alert("deposito logrado, tu saldo es "+saldo);
                break;

            default:
                alert("no opcion valida");
                break;
        }  */

    /* opcion= prompt("el'Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.")
    }else{
    alert("bloqueamos tu cuenta");
}

alert("adios"); */