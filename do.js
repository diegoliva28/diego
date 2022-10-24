/* let savedPIN = '28701';

function iniciar(){
    let ingresar= false;
    for (let i=0;i<3;i++){
        let userPIN= prompt("ingresa la clave. Este es el intento "+(i+1)+" de 3");
        if (userpin===savedPIN){
            alert("bienvenido internauta");
            ingresar=true;
            break;
        }else{
            alert("Error. estas en tu intento "+(i+1)+" de 3");}

    }
    
}

iniciar()
 */
function login (){
    let clave= "diego"

    for (let i=0;i<3;i++){
    let nombreusuario= prompt("ingrese su nombre")
    if(nombreusuario==clave){
        alert("bienvenido "+nombreusuario+"")
        break;
    }else { 
        alert("intenta nuevamente")
    }
}}

if(login()){prompt("que busca")


}else{
    alert("entrada denegada");
}
alert(" chau")