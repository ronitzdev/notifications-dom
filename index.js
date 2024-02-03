document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var newNoti = this.querySelector(".new-noti");

      if (newNoti.classList.contains("active-noti")) {
        newNoti.classList.remove("active-noti");

        var count = document.querySelector(".count");
        count.textContent = parseInt(count.textContent) - 1;
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
