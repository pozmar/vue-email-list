//creo istanza di vue
const myApp = new Vue({
  //la aggancio all'elemento dell'html
  el: "#root",
  //inserisco nei dati l'array vuoto per la mail
  data: {
    mails: [],
  },
  //quando Vue ha agganciato al DOM le proprie componenti(mounted)...
  mounted: function(){
    //fai un ciclo per 10 volte sull'api prendendo il parametro "response" che contiene la stringa con la mail, quindi aggiungilo all'array vuoto "mails"
    for(var i = 0; i < 10; i++){
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
        this.mails.push(result.data.response)
      }
    );
  }
}
});
