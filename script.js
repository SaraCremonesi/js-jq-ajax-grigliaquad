// GRIGLIA 6x6
$(document).ready(function() {

   // Utilizzo Handlebar
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var context = { numeri: ''};
  var html = template(context);

  // Creo un ciclo for per inserire nel container dell'html i 36 quadrati (griglia 6x6)
  for (var i = 0; i < 36; i++) {
    $('.container').append(html);
  }


  // Creo l'evento per il click su ciascun quadrato
  $(document).on('click', '.quadrati',
    function() {

    // Salvo il selettore this in una variabile
    var questoNumero = $(this);

    // Eseguo la chiamata ajax
    $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        // Creo una funzione richiamare un numero random al click sul quadrato
        success: function(randomNumber) {
          var numero = randomNumber.response;

          // Inserisco i numeri generati nell'html
          questoNumero.find('.numeri').text(numero)

          // Creo un ciclo if per assegnare il colore in base al valore del numero generato
          if (numero <= 5) {
            questoNumero.removeClass('yellow green');
            questoNumero.addClass('yellow');
          } else {
            questoNumero.removeClass('yellow green');
            questoNumero.addClass('green');
          }
        },
        error: function(richiesta, stato, errore) {
          alert('Si è verificato un errore: ' + errore)
        }
      }
    );
  });
});
