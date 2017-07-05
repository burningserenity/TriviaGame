//Player

var player =
{
   name: 'Sir Lancelot',
   favColor: 'blue'
}

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
    correct1: "11 meters per second, or 24 miles per hour, beating its wings 7-9 times per second.",
    correct2: "African or European?"
  },

  knightsOfNi =
  {
    q: "We are no longer the Knights Who Say Ni, we are now the Knights Who Say ___________.",
    a1: "Ekke Ekke Ekke Ekke Ptang Zoo Boing!",
    a2: "Okki Okki Okki Okki Ptang Quiong!",
    a3: "It!",
    a4: "Ekke Ekke Ekke Ekke Garang Moyun!",
    correct: "Ekke Ekke Ekke Ekke Ptang Zoo Boing!"
  },

  grenade =
  {
    q: "After thou takest out the Holy Pin, thou shall count to which number before lobbing the Holy Hand Grenade of Antioch towards thy foe?",
    a1: "Five",
    a2: "Three",
    a3: "Four",
    a4: "Tis a trick question: thou must throweth the Holy Hand Grenade of Antioch not an instant hence thou pulleth out the Holy Pin",
    correct: "Three"
  },

  grailLocation =
  {
    q: "Where is the Holy Grail located?",
    a1: "It was in King Arthur's heart all along",
    a2: "With the French",
    a3: "Castle Black",
    a4: "Castle Arrrghhh",
    correct: "Castle Arrrghhh"
  },

  roundTableNames =
  {
    q: "What are the names of the Knights of the Round Table?",
    a1: "King Arthur, Sir Lancelot, Sir Gallahad, Sir Not-Appearing-in-this-Film, Sir Robin, Sir Bedevere",
    a2: "King Arthur, Sir Lancelot, Sir Extra, Sir Monk, Sir Maynard, Sir Robin",
    a3: "King Arthur, Sir Winston, Sir Gallahad, Sir Extra, Sir Brian",
    a4: "King Arthur, Sir Lancelot, Sir Gallahad, Sir Extra, Sir Robin, Sir Bevedere",
    correct: "King Arthur, Sir Lancelot, Sir Gallahad, Sir Not-Appearing-in-this-Film, Sir Robin, Sir Bedevere"
  },

  frenchMother =
  {
    q: "According to the French, King Arthur's mother was a ______",
    a1: "Whore",
    a2: "Hamster",
    a3: "Herring",
    a4: "Gerbil",
    correct: "Hamster"
  },

  frenchFather =
  {
    q: "Also according to the French, King Arthur's father ______",
    a1: "Smelled of elderberries",
    a2: "Smelled of fish guts",
    a3: "Was the village idiot",
    a4: "Was a blacksmith",
    correct: "Smelled of elderberries"
  },

  rockAlbum =
  {
    q: "Which seminal rock album helped fund the production of Monty Python and the Holy Grail?",
    a1: "Pink Floyd's Darkside of the Moon",
    a2: "Black Sabbath's Masters of Reality",
    a3: "Jethro Tull's Aqualung",
    a4: "The Damned's Machine Gun Etiquette",
    correct: "Pink Floyd's Darkside of the Moon"
  },

  godPicture =
  {
    q: "God, as depicted in Monty Python and the Holy Grail, is actually a picture of whom?",
    a1: "19th Century English cricketer W.G. Grace",
    a2: "William Shakespeare",
    a3: "19th Century English footballer Joseph Bannerly",
    a4: "Proto-Medieval philosopher St. Augustine",
    correct: "19th Century English cricketer W.G Grace"
  },

  witchesBurn =
  {
    q: "Why do witches burn?",
    a1: "They human, and human flesh is flammable",
    a2: "They sweat kerosene",
    a3: "They're made of wood",
    a4: "Magic is a fire accelerant",
    correct: "They're made of wood"
  }
];

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
          src: "assets/images/bridgeGuard.gif",
          width: "200",
          height: "200",
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

  //Ask initial questions

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

    else if  ($(".form-control").attr('name', "favourite_color"))
    {
      //Does not work
      if ($(".form-control").prop('value').length > 0)
      {
        player.favColor = $(".form-control").prop('value');
        imgBorderColor = player.favColor;
        $("#imgIcon").css(
        {
          'border-color': imgBorderColor,
        });
        $(".question").text("From here on out, the questions will be timed, multiple choice.");
        $(".form-control").detach();
        $(".btn-primary").attr("value", "Go!");
      }
    }

    else if ($(".btn-primary").attr("value", "Go!"))
      realQuestions();
  });
});

function realQuestions()
{

}
