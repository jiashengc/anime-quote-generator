$(document).ready(function() {
  random_generate();

  function random_generate() {
  var anime_quote = [];

  anime_quote[0] = {
    "quotenumber": 1,
    "quotesentence": "People die when they are killed.",
    "quotecharacter": "- Emiya Shirou,",
    "quoteanime": " Fate/stay night"
  }

  anime_quote[1] = {
    "quotenumber": 2,
    "quotesentence": "The fake is of far greater value. In its deliberate attempt to be real, it's more real than the real thing.",
    "quotecharacter": "- Kaiki Deishū,",
    "quoteanime": " Nisemonogatari"
  }

  var random_number = Math.floor(Math.random() * (anime_quote.length));
  $('.sentence').text(anime_quote[random_number].quotesentence);
  $('.author').text(anime_quote[random_number].quotecharacter);
  $('.title').text(anime_quote[random_number].quoteanime);
  }

  $(".quote-masta").on("click", function() {
    random_generate();
  });
});