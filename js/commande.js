document.querySelector("body").style.background = "#f2cfd3";

//Zero
// var counts = document.querySelectorAll(".count");
// // console.log(counts);
// Array.from(counts).forEach(element => {
//   if (element.textContent == "0") {
//     element.textContent = "Zero";
//   }
// });

//selection the items
const counters = document.querySelectorAll(".item-contener");
counters.forEach(element => {
  element.addEventListener("click", function(e) {
    if (e.target.id == "minus") {
      //debutminus
      if (e.target.nextElementSibling.textContent == "1") {
        e.target.nextElementSibling.textContent = "0";

        e.target.parentElement.parentElement.querySelector(
          ".prix .amount"
        ).textContent = "prix";

        //calculating the amount
        var amounts = document.querySelectorAll(".amount");
        // console.log(amounts);
        var sum = 0;

        amounts.forEach(element => {
          if (element.textContent !== "prix") {
            var eleAmnt = parseInt(element.textContent);
            sum = sum - eleAmnt;
          }
        });
        if (sum < 0) {
          e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[0].innerHTML = -sum;
          console.log(-sum);
        } else {
          e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[0].innerHTML = sum;
          // console.log(sum);
        }
      }

      if (parseInt(e.target.nextElementSibling.textContent) > 1) {
        var num = parseInt(e.target.nextElementSibling.textContent);
        e.target.nextElementSibling.textContent = --num;

        e.target.parentElement.parentElement.querySelector(
          ".prix .amount"
        ).textContent =
          e.target.parentElement.parentElement.querySelector(".price span")
            .textContent * num;

        //calculating the amount
        var amounts = document.querySelectorAll(".amount");
        // console.log(amounts);
        var sum = 0;

        amounts.forEach(element => {
          if (element.textContent !== "prix") {
            var eleAmnt = parseInt(element.textContent);
            sum = sum - eleAmnt;
          }
        });

        if (sum < 0) {
          e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[0].innerHTML = -sum;
          // console.log(-sum);
        } else {
          e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[0].innerHTML = sum;
          // console.log(sum);
        }
      }
    } //plus
    //finminus
    if (e.target.id == "plus") {
      //debutplus
      if (e.target.previousElementSibling.textContent == "0") {
        e.target.previousElementSibling.textContent = 1;

        // e.target.parentElement.parentElement.querySelector(".price span")
        //   .textContent;

        //updating the individual item price
        e.target.parentElement.parentElement.querySelector(
          ".prix .amount"
        ).textContent = e.target.parentElement.parentElement.querySelector(
          ".price span"
        ).textContent;

        //calculating the amount
        // console.log(
        //   e.target.parentElement.parentElement.parentElement.nextElementSibling
        //     .children[3].children[1].innerHTML
        // );

        // .parentElement.nextElementSibling.querySelector(
        //   "#cal-amount"
        // ).innerHTML);
        // console.log('Zainab',e.target.parentElement.nextElementSibling.children[0].textContent);
        e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[0].textContent = e.target.parentElement.parentElement.querySelector(
          ".prix .amount"
        ).textContent;

        // console.log('ousmane', parseInt(e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[1].textContent));
        console.log(
          e.target.parentElement.parentElement.querySelector(".prix .amount")
            .textContent
        );

        //calculating the amount
        var amounts = document.querySelectorAll(".amount");
        // console.log(amounts);
        var sum = 0;

        amounts.forEach(element => {
          if (element.textContent !== "prix") {
            // console.log(element, 'elemen');
            var eleAmnt = parseInt(element.textContent);
            // console.log('elem amount',eleAmnt );

            sum = sum + eleAmnt;
            // console.log('ala', parseInt(sum));
          }
        });

        //summing up all the prices when on item seleted
        // console.log(' hey',e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[1].innerHTML);
        e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[0].innerHTML = sum;
        // console.log(sum);
      } else {
        //number of the particular food
        var num = parseInt(e.target.previousElementSibling.textContent);
        e.target.previousElementSibling.textContent = ++num;
        // console.log(num, 'number');

        //updating: the amount
        e.target.parentElement.parentElement.querySelector(
          ".prix .amount"
        ).textContent =
          //the unit price * the number of the particular food
          e.target.parentElement.parentElement.querySelector(".price span")
            .textContent * num;

        //calculating the total of the different particular food amounts
        var amounts = document.querySelectorAll(".amount");
        // console.log(amounts);
        var sum = 0;

        amounts.forEach(element => {
          if (element.textContent !== "prix") {
            var eleAmnt = parseInt(element.textContent);
            sum = sum + eleAmnt;
          }
        });

        //the cart recieving the addition
        // console.log(e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[1].innerHTML, 'the addition div');
        e.target.parentElement.parentElement.parentElement.nextElementSibling.children[3].children[0].innerHTML = sum;
      }
    } //minus
    //finplus
  });
});

const radioBtn = document.querySelector("#radioBox");

radioBtn.addEventListener("click", function(e) {
  if (e.target.id == "rBox-cmd") {
    console.log(
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove(
        "infoActive"
      )
    );
    console.log(
      e.target.parentElement.parentElement.nextElementSibling.classList.add(
        "infoActive"
      )
    );
  }

  if (e.target.id == "rBox-res") {
    console.log(
      e.target.parentElement.parentElement.nextElementSibling.classList.remove(
        "infoActive"
      )
    );
    console.log(
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add(
        "infoActive"
      )
    );
  }
});

const search = document.forms["search-item"].querySelector("input");

// console.log(search);

search.addEventListener("keyup", function(e) {
  const term = e.target.value.trim(); //ce que tu tapes
  // console.log('rr',term);

  const items = document.querySelectorAll(".item-contener");
  // console.log(items);
  // console.log(items[0].children[2].children[0].textContent);
  var displayCount = 0;

  items.forEach(item => {
    // console.log(item);
    // console.log(item.children[2].children[0].textContent);
    var foodName = item.children[2].children[0].textContent;
    // console.log('dede',foodName);
    //in comparing strings, js is case sensitive.

    if (foodName.toLowerCase().indexOf(term.toLowerCase()) != -1) {
      // console.log(foodName.toUpperCase()); //just kidding :)
      item.style.display = "flex"; //displaying
      // console.log(item.getAttributeNode("style").value);
    } else {
      item.style.display = "none"; //not displaying
      // console.log(item.getAttributeNode("style").value);
    }

    //counting the items with display none
    if (item.getAttributeNode("style").value == "display: none;") {
      displayCount = displayCount + 1;
    }
  });

  //comparing display none items against the length of the array
  if (displayCount == items.length) {
    console.log(displayCount, "yeah :)");
    var result = document.querySelector("#result"); //selecting the div to display
    result.style.display = "block";
  } else {
    var result = document.querySelector("#result"); //selecting the div to hide
    result.style.display = "none";
  }
  console.log(displayCount); //the number of items with display none in the console
});

//to prevent refresh of the page
var subForm = document.querySelector("#search-item");
subForm.addEventListener("submit", function(e) {
  e.preventDefault(); //to prevent the from submiting when the user click on "ënter"
});
