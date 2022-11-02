/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo
*/
const {createApp} = Vue;

createApp({
  data(){
    return {
      question: 'Cosa sono i Chakra?',
      answer: 'I Chakra (letteralmente "ruota") sono i centri energetici principali in cui scorre l\'energia vitale, il prana.',
      myClassUnderlined: '',
      myClassViolet:'yellow',
      isTextClicked: false,
      isImageClicked: false,
      source:'img/',
      imageName:'pradipika.jpeg',
      ImgDescription:''
    }
  },
  methods: {
    isButtonClicked(){
      (this.isTextClicked ? this.isTextClicked=false : this.isTextClicked=true)
    },
    showImg(){
      this.isImageClicked=true;
      this.ImgDescription='';
    },
    newImg(imageNewName){
      this.isImageClicked=true;
      if(this.imageName ==='pradipika.jpeg'){
        this.imageName= 'nadi.jpeg'}else{
        this.imageName ='pradipika.jpeg'
        }
    },
    ImgToText(){
      this.isImageClicked=false;
      if(this.imageName ==='pradipika.jpeg'){
        this.ImgDescription = 'Illustrazione dei Chakra Principali secondo l\'antico testo dell\'Hatha Yoga Pradipika';
      }else{this.ImgDescription = 'Schematizzazione del circolo del prana lungo i canali principali (nadi) e attraverso i chakra'}
    }
  }
}).mount('#app')