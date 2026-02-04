const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = []; // in chiesto caso voglio che const sia globale la inizializzo dichiarandola un array
for (let i = teachers.length - 1 ; i >= 0 ; i--) { // abbiamo utilizzato un ciclo forloop, andando a settare
  //il contatore con la lunghezza dell'array, -1 perchè dalla lunghezza e includendo lo 0 nella condizione, perchè è indice 0,
  //andiamo sottrarre 1 dall'indice fino a quando non è uguale a 0 
  reversedTeachers.push(teachers[i]); // andiamo a manipolare l'array andando ad aggiungere con metodo push gli elementi di teachers
  //in maniera inversa, usando il contatore per dare l'indice al contrario
} 
console.log(reversedTeachers); //loggo il risultato in display

/* Oppure possiamo risolverla contando normalmente, andando ad aggiungere all'inizio gli elementi di teachers in maniera inversa, 
sfruttando sempre il contatore, in modo che il risultato siano gli elementi reversati
for (let i = 0; i < teachers.length; i++) {
  reversedTeachers.unshift(teachers[i]);
}
console.log(reversedTeachers);
*/

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let )

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;