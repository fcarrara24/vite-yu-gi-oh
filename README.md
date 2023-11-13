# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


# assignment

Esercizio di oggi: Vite Yu-Gi-Oh
nome repo: vite-yu-gi-oh
Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php
e con i dati restituiti, stampate una card per ogni carta.
**ATTENZIONE**: l’api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri *num* e *offset*
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0
**Bonus:**
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
Argomento di domani $emit :
Le slide le trovate nella solita cartella su drive
vue doc (c'è anche un link al video) https://vuejs.org/guide/components/events.html
altri video utili: https://www.vuemastery.com/courses/intro-to-vue-3/communicating-events-vue3
https://vueschool.io/lessons/vue-3-communication-between-vue-components-with-custom-events
Documentazione API per esercizio : https://ygoprodeck.com/api-guide/

# steps

configured project installations (bootstrap, scss)

# passaggi per domani:
mi sono portato avanti creando un filtro per dividere gli archetipi di yu gi ho.
Ci sono circa 12.000 carte, e un totale di più di 500 archetipi, fare un mapping di tutte le carte è computazionalmente dispendioso ( col mio computer si parla di circa 10 secondi ), quindi ho deciso di analizzare tutte le carte di yu gi ho solo una volta e caricare l'array delle opzioni all'interno dei data archetypeList. in futuro, quando saremo in grado di modificare attivamente il codice, immagino potremo analizzare l'array delle risposte a partire dall'ultima posizione e eventualmente aggiungere a partire dall'ultima posizione i nuovi archetipi, mantenendo in memoria la lunghezza dell'array di partenza come offset.
detto ciò, mi ritengo comunque soddisfatto del lavoro fin'ora e domani aggiusterò sia il codice eliminando i metodi deprecati, sia la documetazione per renderla più digeribile.
