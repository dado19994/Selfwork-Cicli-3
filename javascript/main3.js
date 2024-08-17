// SELFWORK CICLI 1

// let num = 2;  
// let limite = 10; 

// console.log(`Tabellina del ${num}:`);
// for (let i = 1; i <= limite; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

//SELFWORK CICILI 2

// let sommaDispari = 0;
// let countDispari = 0;

// console.log("Numeri pari da 1 a 20:");
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);  // Stampa i numeri pari
//     } else {
//         // Somma i numeri dispari e aumenta il contatore
//         sommaDispari += i;
//         countDispari++;
//     }
// }

// if (countDispari > 0) {
//     let mediaDispari = sommaDispari / countDispari;
//     console.log(`Media dei numeri dispari da 1 a 20: ${mediaDispari}`);
// } else {
//     console.log("Non ci sono numeri dispari.");
// }

// SELFWORK CICILI 3


let scelta = parseInt(prompt("Inserisci un numero (1: Acqua, 2: Coca Cola, 3: Birra):"));

if(scelta == 1){
    console.log("E' stata selezionata Acqua");

}else if(scelta == 2){
    console.log("E' stata selezionata Coca Cola");
    
}else if(scelta == 3){
    console.log("E' stata selezionata Birra");
    
}else{
    console.log("Scelta non valida! Riprovare");
    
}