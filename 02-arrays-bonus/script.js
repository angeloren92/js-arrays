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
const longNames = []; //inizializzo l'array
for (let i = 0; i < teachers.length; i++) { //ciclo con contatore e condizione che si ripete n volte la qtà di elementi contenuti nell'array
  if (teachers[i].length >= 5) { //se gli elementi contati hanno un lenght maggiore o uguale di 5
    longNames.push(teachers[i]); //andiamo ad aggiungere l'elemento a longnames
  }
}
console.log(longNames); //loggo i nomi lunghi

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1); //usiamo il metodo splice per rimuovere elementi in un array
//all'interno troviamo il valore 'Ed' usando indexof per trovare l'indice, e poi indichiamo 1 elemento da rimuovere
console.log(teachers); //loggo il risultato

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio'); //usiamo il metodo includes poer cercar eil valore Fabio nell'array, e ci restituisce un valore booleano
console.log(isFabioPresent); //loggo il valore, in questo caso true perchè presente

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;