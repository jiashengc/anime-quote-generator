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

    anime_quote[2] = {
      "quotenumber": 3,
      "quotesentence": "Mankind’s greatest fear is Mankind itself.",
      "quotecharacter": "- Gendo Ikari,",
      "quoteanime": " Neon Genesis Evangelion"
    }

    anime_quote[3] = {
      "quotenumber": 4,
      "quotesentence": "If you act only on what you should do without heed for what you want to do, you're nothing more than a machine, a phenomenon.",
      "quotecharacter": "- Natalia Kaminski,",
      "quoteanime": " Fate/Zero"
    }

    anime_quote[4] = {
      "quotenumber": 5,
      "quotesentence": "It's a mistake to choose your path based upon the sins that you carry. We don't choose our path based on the sins that we carry, but we must bear our sins on the path we choose. ",
      "quotecharacter": "- Aozaki Touko,",
      "quoteanime": " Kara no Kyoukai"
    }

    anime_quote[5] = {
      "quotenumber": 6,
      "quotesentence": "A lie that can't be disproven is no different from the truth.",
      "quotecharacter": "- Kraft Lawrence,",
      "quoteanime": " Ookami to Koushinryou"
    }

    anime_quote[6] = {
      "quotenumber": 7,
      "quotesentence": "I can only say that the human curiosity is something completely irrational.",
      "quotecharacter": "- Kyubee,",
      "quoteanime": " Mahou Shoujo Madoka★Magica"
    }

    anime_quote[7] = {
      "quotenumber": 8,
      "quotesentence": "The day before yesterday, I saw a rabbit. Yesterday, it was a deer. And today, It’s you.",
      "quotecharacter": "- Ichinose Kotomi,",
      "quoteanime": " Clannad"
    }

    anime_quote[8] = {
      "quotenumber": 9,
      "quotesentence": "Only God knows who shall be the victor. I can only do the best I can.",
      "quotecharacter": "- Takane Shijou,",
      "quoteanime": " The iDOLM@STER"
    }

    anime_quote[9] = {
      "quotenumber": 10,
      "quotesentence": "Those aren’t tears of sadness. They’re tears of happiness, right? Let us make haste, lest the wind ceases.",
      "quotecharacter": "- Hidenori Tabata,",
      "quoteanime": " Danshi Koukousei no Nichijou"
    }

    anime_quote[10] = {
      "quotenumber": 11,
      "quotesentence": "Poi!",
      "quotecharacter": "- Yuudachi,",
      "quoteanime": " Kantai Collection"
    }

    anime_quote[11] = {
      "quotenumber": 12,
      "quotesentence": "If you forced someone to do something they didn’t want to do, they’d just end up hating life.",
      "quotecharacter": "- Chihiro Sengoku,",
      "quoteanime": " Sakurasou no Pet na Kanojo"
    }

    anime_quote[12] = {
      "quotenumber": 13,
      "quotesentence": "There are things that cannot be taken back. But the world will keep on spinning whether you laugh or you cry. High school life will eventually end too.",
      "quotecharacter": "- Hachiman Hikigaya,",
      "quoteanime": " Yahari Ore no Seishun Love Comedy wa Machigatteiru."
    }

    anime_quote[13] = {
      "quotenumber": 14,
      "quotesentence": "There's something wrong with people who seek reality in fiction.",
      "quotecharacter": "- Kyon,",
      "quoteanime": " Suzumiya Haruhi no Yuuutsu"
    }

    anime_quote[14] = {
      "quotenumber": 15,
      "quotesentence": "Don't be distracted by the what-if's, should-have's, and if-only's. The one thing you choose for yourself - that is the truth of your universe.",
      "quotecharacter": "- Kamina,",
      "quoteanime": " Tengen Toppa Gurren Lagann"
    }

    anime_quote[15] = {
      "quotenumber": 16,
      "quotesentence": "People tend to show off their act of kindness. It is not an act of good will, it is a demand because they are expecting a word of grace as a reward.",
      "quotecharacter": "- Itoshiki Nozomu,",
      "quoteanime": " Sayonara Zetsubou Sensei"
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
