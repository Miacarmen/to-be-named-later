var stored = localStorage.getItem("selected");
var cuisine = JSON.parse(stored);

    



for (let i = 0; i < cuisine.length; i++) {
  var cardContainer = document.getElementById("card-container");
  var card = document.createElement("div");

  card.classList.add("card-down");
  
  $(card).append($(`<img src='./assets/pics/cardimage.png' width='125px' height='175px'>`));
  cardContainer.appendChild(card);
//   adding background image to card

//   $(card).attr("src","assets/pics/cardimage.png");
}


// $(`<img src='./assets/pics/cardimage.png'>`).appendTo(".card-down");


// function for card shuffle
function shuffleCards (arr) {
  // have selection of food come here to shuffle in cards
  // grabs selected variable from local storage
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

console.log(cuisine);
shuffleCards(cuisine);
console.log('shuffled');
console.log(cuisine);



// Flip card--- add a disable button to stop other cards from being flipped after one card is flipped
var flipped = false;
$('.card-down').click(function(){
<<<<<<< HEAD
    // toggle card-up
    $(this).toggleClass('card-up');
    console.log("flip");
<<<<<<< HEAD
    $(this).toggleClass('card-down');
=======

    if (!flipped){
        flipped = true
       $(this).toggleClass('flipped');
    }
    
    // $("flipped").attr("disabled", true);
    // onclick = save(); this.disabled = true;

>>>>>>> bca6ad596f07cc52f7186be425f001f7b549895d
=======

    // $("flipped").attr("disabled", true);
    // onclick = save(); this.disabled = true;

>>>>>>> 48b2466 (test commit)
});

// card.textContent = cuisine[i];

// add a re-shuffle button
$("#reshufflebtn").click(function (event) {
  event.preventDefault();
  console.log("button clicked");
  // invoke shuffle function (using jquery)

});
// add a reselect button
$("#reselectbtn").click(function (event) {
  event.preventDefault();
  console.log("button clicked");
  // link to resultspage.html
  window.location.href = "index.html";
});

// add on click event listener to resultbtn
$("#resultbtn").click(function (event) {
  event.preventDefault();
  console.log("button clicked");
  // link to resultspage.html
  window.location.href = "resultsPage.html";
});

