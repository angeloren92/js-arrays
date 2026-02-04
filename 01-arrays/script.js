const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]; //inizializza ed assegna a fourthTeacher, l'indice 3 dell'array teachers (indice inizia a contare da 0)
console.log(fourthTeacher); //logga su console il valore di fourthTeacher che abbiamo assegnato prima

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick'; //prendi la quinta voce, con array4 (indice parte da 0), e sostituiscilo con la stringa Patrick
console.log(teachers[4]); //logga su console il valore di teachers indice 4

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
console.log(teachers.length); //per non contare, trovo l'ultima posizione usando length
const lastTeacher = teachers[6]; //inizializzo ed assegno alla variabile lastTeacher, l'ultimo valore dell'array
console.log(lastTeacher); //loggo su console il valore di lastTeacher
teachers.pop(); //rimuovo l'ultimo elemnto dell'array
console.log(teachers); //loggo su display tutti gli elementi dell'array
/* potrei usare anche questa scrittura concatenata:
const lastTeacher = teachers.pop(); 
  in questo modo potrei inizializzare, assegnare alla variabile, per poi rimuovere l'ultimo valore dichiarandolo in una unica stringa
*/

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift(); /* in questo caso ho usato una unica stringa rispetto all'esercizio precedente
andando a: inizializzare, assegnare e rimuovere il primo valore dell'array */
console.log(firstTeacher, teachers); //loggo in console firstTeacher e gli elementi di teachers

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa'); //prendo array teachers e uso il metodo push per aggiungere un elemento alla fine
console.log(teachers); //loggo in console gli elementi di teachers 

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah'); //prendo array techers e uso il metodo unshift per aggiungere un elemento all'inizio
console.log(teachers); //loggo in console gli elementi di teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis'); //inizializzo e assegno l'indice del valore lewis dell'array teachers, usando il meotod indexof
console.log(lewisIndex); //loggo in console il valore di lewisindex

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length == 0; /* inizializzo e assegno un valore booleano
verificando con length quanti elementi contenga */
console.log(isTeachersEmpty); 
let prova;
console.log(prova.lenght == 0);