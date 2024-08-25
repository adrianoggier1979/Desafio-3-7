const area = prompt(`En cual area te gustaria seguir Front-End o Back-End? Escribe el nombre del area `);
let lenguaje = "";
if (area === "Front-End"){
    lenguaje = prompt('Quieres aprender React o Vue?');

} else if ( area === "Back-End"){
    lenguaje = prompt("quieres aprender C# o Java");
} else {
    alert ('No ingresaste una alternativa valida');
}


const especialidad0Fullstack = prompt("Escribe 1 para desarrollarte en el area elegida o 2 para convertirte en Fullstack");
if( especialidad0Fullstack == 1){
    alert(`Sigue especializandote en ${lenguaje} para dominar en el area de ${area}`)
} else if (especialidad0Fullstack == 2){
    alert(`Es hora de comenzar a aprender otros lenguajes ademas de ${lenguaje} si quieres convertirte en Fullstack `);
} else {
    alert('No ingresaste un valor valido')
}

let mensaje = prompt("Hay alguna otra area de tecnologia que te gustaria aprender? Escribe 'ok' en caso positivo");
while (mensaje === 'ok'){
    let nuevaTecnologia = prompt('Cual?');
    alert(`${nuevaTecnologia}es realmente muy interesante!`);
    mensaje = ("Hay alguna otra tecnologia que te gustaria aprender? Escribe 'ok' en caso positivo.");
    nuevaTecnologia = prompt('Cual?');


}