//................................................................Business Logic
var isBlank = function() {
  var blank = false;
  $("input:radio").each(function() {
    var val = $('input:radio[name=' + this.name + ']:checked').val();
    if (val === undefined) {
      blank = true;

    }
  });
  return blank;
}

function evaluateAnswers(userAnswerArray, wrongAnswerArray) {
  var score = 0;
  var correctAnswerArray = [2, 1, 3, 3, 2, 2, 4, 2, 4, 2, 3, 1];
  for (var i = 1; i <= 12; i++) {
    var userValue = $("input:radio[name=ans" + i + "]:checked").val();
    userAnswerArray.push(userValue);
    if (userValue == correctAnswerArray[i - 1]) {
      score += 1;
    } else {
      wrongAnswerArray.push("Q" + i);
    }
  }
  return score;
}
//.................................................................UI Logic
$(document).ready(function() {
  $("div.panel-heading").click(function() {
    $("div.options").hide();
    var answerId = $(this).attr("id");
    $("div#" + answerId + "-ans").toggle();
  });
  $("form").submit(function(event) {
    event.preventDefault();
    if (isBlank() === false) {
      $("form").hide();
      $("#scorePanel").show();
      var userAnswers = [];
      var wrongAnswers = [];
      var userScore = evaluateAnswers(userAnswers, wrongAnswers);
      $("#score").text(userScore + "/12");
      if (wrongAnswers.length == 0) {
        $("#wrongAnswersId").text("GREAT!!! No wrong answers");
      } else {
        $("#wrongAnswersId").text("Questions answered wrong are: " + wrongAnswers);
      }
    } else {
      alert("Atleast one of the question is not answered");
    }
  });
});
