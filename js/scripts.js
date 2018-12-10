$(document).ready(function() {
  
  var correctAnswers = [2, 1, 3, 3, 2, 2, 4, 2, 4, 2, 3, 1];
  $("form").submit(function(event) {
    event.preventDefault();
    var blank = false;
    $("input:radio").each(function() {
    var val = $('input:radio[name=' + this.name + ']:checked').val();
    if (val === undefined) {
        blank = true;
        return false;
    }
    });
    if(!blank){
      $("form").hide();
      $("#scorePanel").show();
      var userAnswers = [];
      var wrongAnswers = [];
      var userScore = 0;
      for (var i = 1; i <= correctAnswers.length; i++) {
        var userValue = $("input:radio[name=ans" + i + "]:checked").val();
        userAnswers.push(userValue);
        if (userValue == correctAnswers[i - 1]) {
          userScore += 1;
        } else {
          wrongAnswers.push("Q" + i);
        }
      }
      $("#score").text(userScore+"/12");
      if (wrongAnswers.length == 0) {
        $("#wrongAnswersId").text("GREAT!!! No wrong answers");
      } else {
        $("#wrongAnswersId").text("Questions answered wrong are: "+wrongAnswers);
      }
    }else{
      alert("Atleast one of the question is not answered");
    }
  });
});
