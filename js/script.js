// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

import {isRandomImage, isRanDOMImage} from './utility.js';

const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello world!!!',
            white: "text-white",
            image1: isRandomImage(500, 500, "random"),
            image2: isRanDOMImage(500, 500)
        };
    },
    methods: {
    }
}).mount('#app');
