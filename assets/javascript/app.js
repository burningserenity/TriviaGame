//Player

var player =
{
   name: '',
   favColor: ''
}

//Global variables for functions

var timeLimit;
var answertime;
var started = 0;
var question;
var answerArray;
var rightAnswers = 0;
var endofGame = 0;

//Question object array

var gameQuestions =
[
  swallow =
  {
    q: "What is the airspeed velocity of an unladen swallow?",
    a1: "11 meters per second, or 24 miles per hour, beating its wings 7-9 times per second.",
    a2: "20 meters per second, or 45 miles per hour, beating its wings 7-9 times per second.",
    a3: "11 meters per second, or 24 miles per hour, beating its wings 2-4 times per second.",
    a4: "African or European?",
    correct: "11 meters per second, or 24 miles per hour, beating its wings 7-9 times per second.",
    correct2: "African or European?",
    image: $("<img>").attr(
    {
      src: "assets/images/swallow.jpeg",
      alt: "Unladen Swallow",
      width: "300",
      height: "300"
    })
  },

  knightsOfNi =
  {
    q: "We are no longer the Knights Who Say Ni, we are now the Knights Who Say ___________.",
    a1: "Ekke Ekke Ekke Ekke Ptang Zoom Boing!",
    a2: "Okki Okki Okki Okki Ptang Quiong!",
    a3: "It!",
    a4: "Ekke Ekke Ekke Ekke Garang Moyun!",
    correct: "Ekke Ekke Ekke Ekke Ptang Zoom Boing!",
    image: $("<img>").attr(
    {
      src: "assets/images/knightsofni.jpeg",
      alt: "The Knights who Say Ni",
      width: "300",
      height: "300"
    })
  },

  grenade =
  {
    q: "After thou takest out the Holy Pin, thou shall count to which number before lobbing the Holy Hand Grenade of Antioch towards thy foe?",
    a1: "Five",
    a2: "Three",
    a3: "Four",
    a4: "Tis a trick question: thou must throweth the Holy Hand Grenade of Antioch not an instant hence thou pulleth out the Holy Pin",
    correct: "Three",
    image: $("<img>").attr(
    {
      src: "assets/images/holyhandgrenade.jpeg",
      alt: "The Holy Hand Grenade of Antioch",
      width: "300",
      height: "300"
    })
  },

  grailLocation =
  {
    q: "Where is the Holy Grail located?",
    a1: "It was in King Arthur's heart all along",
    a2: "With the French",
    a3: "Castle Black",
    a4: "Castle Arrrghhh",
    correct: "Castle Arrrghhh",
    image: $("<img>").attr(
    {
      src: "assets/images/grail.jpeg",
      alt: "The Holy Grail",
      width: "300",
      height: "300"
    })
  },

  roundTableNames =
  {
    q: "What are the names of the Knights of the Round Table?",
    a1: "King Arthur, Sir Lancelot, Sir Gallahad, Sir Not-Appearing-in-this-Film, Sir Robin, Sir Bedevere",
    a2: "King Arthur, Sir Lancelot, Sir Extra, Sir Monk, Sir Maynard, Sir Robin",
    a3: "King Arthur, Sir Winston, Sir Gallahad, Sir Extra, Sir Brian",
    a4: "King Arthur, Sir Lancelot, Sir Gallahad, Sir Extra, Sir Robin, Sir Bevedere",
    correct: "King Arthur, Sir Lancelot, Sir Gallahad, Sir Not-Appearing-in-this-Film, Sir Robin, Sir Bedevere",
    image: $("<img>").attr(
    {
      src: "assets/images/knightsoftheroundtable.jpeg",
      alt: "The Knights of the Round Table",
      width: "300",
      height: "300"
    })
  },

  frenchMother =
  {
    q: "According to the French, King Arthur's mother was a ______",
    a1: "Whore",
    a2: "Hamster",
    a3: "Herring",
    a4: "Gerbil",
    correct: "Hamster",
    image: $("<img>").attr(
    {
      src: "assets/images/frenchman.jpeg",
      alt: "Frenchman",
      width: "300",
      height: "300"
    })
  },

  frenchFather =
  {
    q: "According to the French, King Arthur's father ______",
    a1: "Smelled of elderberries",
    a2: "Licked lobsters",
    a3: "Was the village idiot",
    a4: "Was a blacksmith",
    correct: "Smelled of elderberries",
    image: $("<img>").attr(
    {
      src: "assets/images/frenchmen.jpeg",
      alt: "Frenchmen",
      width: "300",
      height: "300"
    })
  },

  rockAlbum =
  {
    q: "Which seminal rock album helped fund the production of Monty Python and the Holy Grail?",
    a1: "Pink Floyd's Darkside of the Moon",
    a2: "Black Sabbath's Masters of Reality",
    a3: "Jethro Tull's Aqualung",
    a4: "The Damned's Machine Gun Etiquette",
    correct: "Pink Floyd's Darkside of the Moon",
    image: $("<img>").attr(
    {
      src: "assets/images/guitar.jpeg",
      alt: "Guitar",
      width: "300",
      height: "300"
    })
  },

  godPicture =
  {
    q: "God, as depicted in Monty Python and the Holy Grail, is actually a picture of whom?",
    a1: "19th Century English cricketer W.G. Grace",
    a2: "William Shakespeare",
    a3: "19th Century English footballer Joseph Bannerly",
    a4: "Proto-Medieval philosopher St. Augustine",
    correct: "19th Century English cricketer W.G. Grace",
    image: $("<img>").attr(
    {
      src: "assets/images/God.jpg",
      alt: "God",
      width: "300",
      height: "300"
    })
  },

  witchesBurn =
  {
    q: "Why do witches burn?",
    a1: "They are human, and human flesh is flammable",
    a2: "They sweat kerosene",
    a3: "They're made of wood",
    a4: "Magic is a fire accelerant",
    correct: "They're made of wood",
    image: $("<img>").attr(
    {
      src: "assets/images/witch.jpeg",
      alt: "Witch",
      width: "300",
      height: "300"
    })
  },
];

var totalQuestions = gameQuestions.length;

var imgBorderColor;

//Initial Page

$(function()
{
  $("<div>").attr(
  {
    class: "container-fluid"
  }).appendTo("body");

    $("<div>").attr(
    {
      class: "row",
      id: "toprow"
    }).appendTo(".container-fluid");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#toprow");
      $("<div>").attr(
      {
        class: "col-md-8 gamecol",
        id: "heading"
      }).appendTo("#toprow");
        $("<h1>").text("Monty Python and the Holy Grail Trivia Game!").appendTo("#heading");
        $("<img>").attr(
        {
          alt: "The Bridge Guard",
          src: "assets/images/bridgeGuard.jpeg",
          width: "300",
          height: "300",
          id: "imgIcon"
        }).appendTo("#heading");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#toprow");

    $("<div>").attr(
    {
      class: "row",
      id: "timerow"
    }).appendTo(".container-fluid");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#timerow");
      $("<div>").attr(
      {
        class: "col-md-8 gamecol",
        id: "timecol"
      }).appendTo("#timerow");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#timerow");

    $("<div>").attr(
    {
      class: "row",
      id: "questionrow"
    }).appendTo(".container-fluid");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#questionrow");
      $("<div>").attr(
      {
        class: "col-md-8 gamecol",
        id: "questioncol"
      }).appendTo("#questionrow");
        $("<h2>").attr(
        {
          class: "question"
        }).text("What is your name?").appendTo("#questioncol");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#questionrow");

    $("<div>").attr(
    {
      class: "row",
      id: "answerrow"
    }).appendTo(".container-fluid");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#answerrow");
      $("<div>").attr(
      {
        class: "col-md-8 gamecol",
        id: "answer-col"
      }).appendTo("#answerrow");
        $("<input>").attr(
        {
          class: "form-control",
          type: "text",
          name: "your_name",
          value: "",
          placeholder: "Sir Lancelot"
        }).appendTo("#answer-col");
        $("<input>").attr(
        {
          type: "submit",
          value: "Answer",
          class: "btn btn-primary",
          id: "answerBtn"
        }).appendTo("#answer-col");
      $("<div>").attr(
      {
        class: "col-md-2 padcol"
      }).appendTo("#answerrow");

  //Submit button click events

  //Get value of player.name
  $(".btn-primary").click(function()
  {
    if ($(".question").text() === 'What is your name?' && $(".form-control").prop('value').length > 0)
    {
      player.name = $(".form-control").prop('value');
      $(".question").text("Welcome " + player.name + ", what is your favourite colour?");
      $(".form-control").prop('value', "");
      $(".form-control").attr(
      {
        name: "favourite_color",
        placeholder: "Blue"
      });
    }

    //Start game
    else if ($(".question").text() === "From here on out, the questions will be timed, multiple choice.")
    {
      started = 1;
      realQuestions();
    }

    //If the game is over, reload
    else if (endofGame === 1)
          location.reload(true);

    //Submit answers
    else if (started === 1)
    {

      //Determine if submitted answer is right or wrong, executing a different function for each
      //If it's wrong, highlight the chosen answer

         clearTimeout(timeLimit);
         $(".progress-bar").stop();
         var chosen = $("input[type=radio][name=rdibtn]:checked").val();
         if (chosen === question.correct || chosen === question.correct2)
           right(chosen);
         else
         {
           for (i = 0; i < answerArray.length; i++)
           {
             if ($("#anssub" + i).find(".radbut").attr('value') === chosen)
             {
               $("#anssub" + i).css('background-color', 'orangered');
               break;
             }
           }
           wrong(question, answerArray);
         }
      }

    //Get value of player.favColor and start the game

    else if  ($(".form-control").attr('name', "favourite_color"))
    {
      if ($(".form-control").length > 0 && $(".form-control").prop('value').length > 0)
      {
        player.favColor = $(".form-control").prop('value');
        imgBorderColor = player.favColor.toLowerCase();
        $("img").css(
        {
          'border-color': imgBorderColor
        });
        $(".question").text("From here on out, the questions will be timed, multiple choice.");
        $(".form-control").detach();
        $(".btn-primary").attr("value", "Go!");
      }
    }
  });

  //Once Pre-Questions are done, start the real game
  function realQuestions()
  {

    //Check to make sure there are still questions left to be asked

    if (gameQuestions.length === 0)
    {
      $(".question").text("Game Over!");
      question.image.css(
      {
        'border-color': imgBorderColor
      });
      $("<form>").attr(
      {
        class: "form-group"
      }).appendTo("#answer-col");

        $("<div>").attr(
        {
          class: "jumbotron"
        }).appendTo(".form-group");

          $("<div>").attr(
          {
            class: "row anssubrow",
            id: "ending"
          }).appendTo(".jumbotron");

            $("<div>").attr(
            {
              class: "col-md-12 col-sm-12 col-xs-12",
              id: "endcol"
            }).appendTo(".anssubrow");

              $("img").remove();

              $("<img>").attr(
              {
                alt: "The Rabbit",
                src: "assets/images/Rabbit.jpg",
                width: "300",
                height: "300",
                id: "imgIcon",
              }).css('border-color', player.favColor).appendTo("#heading");

              $("<h3>").text("You got " + rightAnswers + " " + totalQuestions + " correct.").appendTo("#endcol");

                $("#answerBtn").appendTo("#endcol");

                  $("#answerBtn").attr("value", "Reset");

      endofGame = 1;
    }

      //Randomly select a question to be answered and remove it from the array
      //Set the timer and fill out the divs

      question = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];
      $(".question").text(question.q);
      var pos = gameQuestions.indexOf(question);
      var remove = gameQuestions.splice(pos, 1);
      answerArray = [question.a1, question.a2, question.a3, question.a4];
      question.image.css(
      {
        'border-color': imgBorderColor
      });
      $("<form>").attr(
      {
        class: "form-group"
      }).appendTo("#answer-col");

        $("<div>").attr(
        {
          class: "jumbotron"
        }).appendTo(".form-group");

        for (i = 0; i < answerArray.length; i++)
          $("<div>").attr(
          {
            class: "row anssubrow",
            id: "anssub" + i
          }).appendTo(".jumbotron");

        for (i = 0; i < answerArray.length; i++)
        {
           $("<div>").attr(
           {
             class: "col-md-2 col-sm-2 col-xs-2",
             id: "butcol" + i
           }).appendTo("#anssub" + i);

           $("<div>").attr(
           {
             class: "col-md-10 col-sm-10 col-xs-10",
             id: "anssubcol" + i
           }).appendTo("#anssub" + i);
        }

          for (i = 0; i < answerArray.length; i++)
          {

            $("<input>").attr(
            {
              class: "radbut",
              name: "rdibtn",
              type: "radio",
              value: answerArray[i]
            }).appendTo("#butcol" + i);

            $("<p>").text(answerArray[i]).appendTo("#anssubcol" + i);
        }
    $("#answerBtn").appendTo("#answer-col");
    $("#answerBtn").attr("value", "Answer");
    $("img").remove();
    question.image.appendTo("#heading");
    $("<div>").attr(
    {
      class: "progress progress-striped active"
    }).appendTo("#timecol");

      $("<div>").attr(
      {
        class: "progress-bar",
        style: "width: 100%",
      }).appendTo(".active");
      timer(question, answerArray);
   }

   function timer(question, answerArray)
   {
      $(".progress-bar").animate(
      {
        width: "0%"
      }, 20000);

      timeLimit = setTimeout(function()
      {
        wrong(question, answerArray);
      }, 20000);

   }

  function right(chosen)
  {

    //Increment the number of questions answered correctly and highlight the correctly chosen answer

    rightAnswers++;

    for (i = 0; i < answerArray.length; i++)
    {

       if ($("#anssub" + i).find(".radbut").attr('value') === chosen && chosen === question.correct2)
       {
         $("#anssub" + i).css('background-color', 'lightgreen');
         $(".question").text("That is also acceptable.");
         break;
       }

       else if ($("#anssub" + i).find(".radbut").attr('value') === chosen && chosen === question.correct)
       {
          $("#anssub" + i).css('background-color', 'lightgreen');
          $(".question").text("Correct!");
          break;
       }


    }

      answertime = setTimeout(function()
      {
         $(".form-group").detach();
         $(".active").detach();
         realQuestions();
      }, 5000);

  }

   function wrong(question, answerArray)
   {

    //Highlight the missed answer and move on

     $(".question").text("Too bad! The correct answer is:");
     for (i = 0; i < answerArray.length; i++)
     {
       if ($("#anssub" + i).find(".radbut").attr('value') === question.correct)
       {
         $("#anssub" + i).css('background-color', 'lightgreen');
         break;
        }
     }

     answertime = setTimeout(function()
     {
       $(".form-group").detach();
       $(".active").detach();
       realQuestions();
     }, 5000);
   }
});
