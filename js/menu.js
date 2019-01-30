document.addEventListener("DOMContentLoaded", function() {
  var plats = document.querySelectorAll(".card-deck .card");
  console.log(plats);

  //setting up opacity when mouseover or mouseout
  plats.forEach(element => {
    // console.log(element);

    element.addEventListener("mouseover", function(e) {
      if (e.target.classList[0] == "card-img-top") {
        e.target.style.opacity = "1";
        e.target.style.border = "3px solid #733279";
      } else if (e.target.classList[0] == "card-text") {
        e.target.parentElement.previousSibling.previousSibling.style.opacity =
          "1";
      } else if (e.target.classList[0] == "card-title") {
        e.target.parentElement.previousSibling.previousSibling.style.opacity =
          "1";
      } else if (e.target.classList[0] == "card-body") {
        e.target.previousSibling.previousSibling.style.opacity = "1";
      }
      //   card-text card-title  card-body
    });

    element.addEventListener("mouseout", function(e) {
      if (e.target.classList[0] == "card-img-top") {
        e.target.style.opacity = ".7";
        e.target.style.border = "none";
      } else if (e.target.classList[0] == "card-text") {
        e.target.parentElement.previousSibling.previousSibling.style.opacity =
          ".7";
      } else if (e.target.classList[0] == "card-title") {
        e.target.parentElement.previousSibling.previousSibling.style.opacity =
          ".7";
      } else if (e.target.classList[0] == "card-body") {
        e.target.previousSibling.previousSibling.style.opacity = ".7";
      }
      //   card-text card-title  card-body img
    });
  });
});
