document.addEventListener("DOMContentLoaded", function () {
  //desacticar clases de notificacion
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      // Eliminar la clase "unread" y reiniciar el contenido
      this.classList.remove("unread");
      //seleccion new noti
      var newNoti = this.querySelector(".new-noti");

      if (newNoti.classList.contains("active-noti")) {
        newNoti.classList.remove("active-noti");

        var count = document.querySelector(".count");
        count.textContent = parseInt(count.textContent) - 1;
      }
    });
  });

  //desactivacion de clases global
  var markAll = document.querySelector(".link");
  markAll.addEventListener("click", function (e) {
    e.preventDefault();
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      /*console.log(card);*/
      let activeNoti = card.querySelector(".active-noti");
      if (card.contains(activeNoti)) {
        card.classList.remove("unread");
        activeNoti.classList.remove("active-noti");
        var count = document.querySelector(".count");
        count.textContent = 0;
      }
      if (card.classList[1] === "unread") {
        card.classList.remove("unread");
      }
    });
  });
});
/*
Una vez cargado el dom
selecciona todos los elementos con clase .card
por cada card, agrega un evento click.
Dentro selecciona elemento con clase .new-noti
ve si contiene la clase .active-not remuévela
luego selecciona el elemento con la clase .count
y reduce el número en 1
*/
