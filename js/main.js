let nombre = prompt("Ingresá tú nombre o apodo: ");

for(let i = 0; i < 5; i++){
    if(nombre !== ""){
        console.log("La variable i vale " + i + ", " + nombre + " =)");
    } else {
        nombre = prompt("¡No ingresaste nada! Probá con tú nombre: ");
        i = 0;
    }
}