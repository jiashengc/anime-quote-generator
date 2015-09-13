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
    
    anime_quote[16] = {
      "quotenumber": 17,
      "quotesentence": "Love always happens without warning. At that time, the gears of fate will start spinning. Just like the hands of a clock, two people’s hearts will separate and meet again. Eventually, they reunite.",
      "quotecharacter": "- Konjiki No Yami,",
      "quoteanime": " To LOVE-Ru Darkness"
    }
    
    anime_quote[17] = {
      "quotenumber": 18,
      "quotesentence": "There's no use in just creating "Love". Empty hearts filled with "Love" tend to be unstable.",
      "quotecharacter": "- Keima Katsuragi,",
      "quoteanime": " Kami nomi zo Shiru Sekai"
    }

    anime_quote[18] = {
      "quotenumber": 19,
      "quotesentence": "What are people? What is the "self"? So long as you look like someone else, no one can't tell who's really on the inside.",
      "quotecharacter": "- Iori Nagase,",
      "quoteanime": " Kokoro Connect"
    }
    
    anime_quote[19] = {
      "quotenumber": 20,
      "quotesentence": "Those with talent who aren't aware of themselves cause pain for those who have none.",
      "quotecharacter": "- Fuyumi Irisu,",
      "quoteanime": " Hyouka"
    }
    
    anime_quote[20] = {
      "quotenumber": 21,
      "quotesentence": "Even if he hates me, being able to die with the knowledge that the one I love will never forget me… there is no greater happiness a woman could desire.",
      "quotecharacter": "- Hakaze Kusaribe,",
      "quoteanime": " Zetsuen no Tempest"
    }
    
    anime_quote[21] = {
      "quotenumber": 22,
      "quotesentence": "I wasn’t scared that I’d be rejected, I was scared that if I said how I felt, all of our relationships would change.",
      "quotecharacter": "- Chisaki Hiradaira,",
      "quoteanime": " Nagi no Asukara"
    }
    
    anime_quote[22] = {
      "quotenumber": 23,
      "quotesentence": "Do you know what's the most important thing about climbing mountains is? It's not about having the courage to challenge it, It's about having the courage to back down.",
      "quotecharacter": "- Nozomi Tōjō,",
      "quoteanime": " Love Live! School idol project"
    }
    
    anime_quote[23] = {
      "quotenumber": 24,
      "quotesentence": "You may be unfortunate, but that doesn't mean you have to suffer. You may not be blessed, but that doesn't mean you have to throw a fit over it. Even if bad things happen to you, just be strong!",
      "quotecharacter": "- Koyomi Araragi,",
      "quoteanime": " Bakemonogatari"
    }
    
    anime_quote[24] = {
      "quotenumber": 25,
      "quotesentence": "A faint clap of thunder, clouded skies; perhaps rain comes. If so, will you stay here with me?",
      "quotecharacter": "- Yukari Yukino,",
      "quoteanime": " Kotonoha no Niwa"
    }
    
    anime_quote[25] = {
      "quotenumber": 26,
      "quotesentence": "Hold on. Don't go! Let's argue again. I'll bribe you with a canelé. I'll call you to kill time. I don't mind being Friend A. Please don't go. Please don't go. Please don't go...please don't leave me behind.",
      "quotecharacter": "- Kousei Arima,",
      "quoteanime": " Shigatsu wa Kimi no Uso"
    }
    
    anime_quote[26] = {
      "quotenumber": 27,
      "quotesentence": "Having happy and beautiful memories won't always bring you salvation. The more beautiful a memory is, the more painful it can become. It can even become terrifying. Both for the one who's leaving... And for the one left behind.",
      "quotecharacter": "- Isla,",
      "quoteanime": " Plastic Memories"
    }
    
    anime_quote[27] = {
      "quotenumber": 28,
      "quotesentence": "Even if I know you'll reject me, even if I'm afraid you won't accept me, even if I know it will really hurt if you dump me - I still have to tell you how I feel!",
      "quotecharacter": "- Kousaka Kyousuke ,",
      "quoteanime": " Ore no Imouto ga Konnani Kawaii Wake ga Nai"
    }
    
    anime_quote[28] = {
      "quotenumber": 29,
      "quotesentence": "My, my! Do I really need to spell it out for you? There is nothing that you can acquire without making a move on your own. It's the same with romance - your only hope is to be more aggressive.",
      "quotecharacter": "- Marika Tachibana,",
      "quoteanime": " Nisekoi"
    }
    
    anime_quote[29] = {
      "quotenumber": 30,
      "quotesentence": "It makes you sad when someone suddenly just up and disappears without a word. If you're just going to end up hurt in the end, you're better off not forming any bonds at all.",
      "quotecharacter": "- Yozora Mikazuki,",
      "quoteanime": " Boku wa Tomodachi ga Sukunai"
    }
    
    anime_quote[30] = {
      "quotenumber": 31,
      "quotesentence": "Well, it's an anime, so you shouldn't think so hard about it.",
      "quotecharacter": "- Illyasviel von Einzbern,",
      "quoteanime": " Fate/kaleid liner Prisma☆Illya "
    }
    
    anime_quote[31] = {
      "quotenumber": 32,
      "quotesentence": "You were ready to kill another creature, yet you’re scared of being killed yourself. Don’t you think that is strange? When you point a gun at a living thing… this is what that act means. ",
      "quotecharacter": "- Kurumi Tokisaki,",
      "quoteanime": " Date A Live"
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
