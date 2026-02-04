Ciao Classe,
esercizio di oggi: js-arrays

Partendo dal codice fornito, svolgere tutte le task richieste in ognuno degli script presenti.

Utilizzate i devtools e console.log per verificare il risultato.

Bonus

Nel codice sorgente ci sono alcuni script con task bonus che potete svolgere se finite in anticipo l’esercizio base!

Nota importante:

Se provate a cercare online per aiutarvi nella risoluzione degli esercizi potreste incappare in vari metodi come map, filter, includes e tanti altri. Non usateli in questa fase, li studieremo più avanti! Per oggi cercate di risolvere tutto aiutandovi col ciclo for. Una volta padroneggiato questo costrutto di base, sarete pronti per “facilitarvi la vita” con gli altri metodi 😉 

******************************************************************************************************************************

Le Memorie di Angelo,  [04/02/2026] :
    
    Mattina
    -Introduzione agli array
        .ossia contenitori che possono ospitare diversi elementi nativi, come numeri e stringhe
    -Imparato ad inizializzare ed assegnare i valori ad un array (const array = [elemento1, elemento2 ..., elementoX])
    -Imparato a loggare in console gli elementi di un array, indicando la posizione nelle parentesi quadre (array[indice])
        .l'indice di un array inizia da 0, il prima valore sarà posizione 0
    -Si può concatenare un array interno ad un'altro array (array = [elemento1, array2[elemento2.1, elemento 2.2], elemento3])
        .Per richiamarle si può indicare in maniera sequenziale la posizione sempre con le quadre array[indice][indice array2]
    -Imparato a manipolare gli elementi all'inteno dell'array, utilizzando diversi medoti array.metodo(argomento)
        .Si possono togliere, aggiungere, cercare e via dicendo
    -Possiamo anche estrapolare un singolo elemento di un array ed assegnarla ad una variabile
    -Se ci troviamo di fronte alla situazione di dover scrivere la stessa riga diverse volte, possiamo,
        .Utilizzare il for.loop, ossia i cicli, per andare ad automatizzare le operazioni
        si sfruttano i contatori del ciclo, prendendo la lunghezza degli array come parametri della condizione
        in maniera di ripetere l'operazione tante volte quanti sono glie elementi presenti nell'array

    Pmeriggio
    -Gli esercizi ci hanno permesso di ripassare il cliclo for.loop, e la logica di non ripetere l'operazione nvolte
    ma di proporlo con una singola istruzione che automatizza l'operazione
    -Ripassato quanto appreso la mattinata
    -Il metodo .lenght è molto utile per andare a definire i valori in maniera logica, per esempio per trovare il numero elementi di un array
    e sfruttarlo nelle logiche IF ELSE o FOR con i contatori
    
I metodi che abbiamo usato oggi per gli array sono:
    array.lenght                - possiamo trovare la lunghezza, ossia quanti elementi, presenti in un array 
    array.push(argomento)       - possiamo aggiungere un elemento alla fine dell'array
    array.pop()                 - possiamo rimuovere l'ultimo elemento dell'array
    array.shift()               - possiamo rimuovere il primo elemento dall'array
    array.unshift(argomento)    - possiamo aggiungere un alemento all'inizio dell'array
    array.indexOf(argomento)    - possiamo trovare un valore (argomento), all'interno dell'array, restituendo l'indice corrispondente
    array.join(argomento)       - possiamo concatenare tutti gli elementi di un array in una stringa
                                  l'argomento invece è il separatore da dichiarare, se non dichiarato è una virgola
    array.includes(argomento)   - possiamo ricercare un valore (argomento), all'interno dell'array, restituendo un valore booleano
    array.splice(argomento)     - possiamo rimuovere 1 o più elementi da un array, nell'argomento va prima il valore iniziale e poi la qtà a seguire

Ci siamno esercitati ad annidare le istruzioni, usando tutte le istruzioni, i metodi, gli argomenti che abbiamo imparato.
PS non continuare a sbagliare LENGTH con lenght, la prima è corretta
   Se facciamo una inizializzazione e assegnazione ad una variabile/costante, che è il risultato di una condizione, 
   metterla tra parentesi per una visibilità/lettura migliore