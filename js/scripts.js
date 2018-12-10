$(document).ready(function(){
  $("div.panel-heading").click(function(){
    $("div.options").hide();
    var ansId = $(this).attr("id");
    $("div#"+ansId+"-ans").toggle();
  });

  var correctAnswers = [2,1,3,3,2,2,4,2,4,2,3,1];




  $("form").submit(function(event){
    // window.location.replace("../quiz-board/index.html");
    // $("#initialPanel").hide();
    // $("#scorePanel").show();
    $("form").hide();
    $("#scorePanel").show();
    event.preventDefault();
    var userAnswers = [];
    var wrongAnswers=[];
    var userScore=0;
    for(var i=1;i<=correctAnswers.length; i++){
    var userValue = $("input:radio[name=ans"+i+"]:checked").val();
    userAnswers.push(userValue);
    if(userValue == correctAnswers[i-1]){
      userScore+=1;
    }else{
      wrongAnswers.push("Q"+i);
    }
  }
  alert("userScore= "+userScore);
  if(wrongAnswers.length == 0){
    alert("no wrong answers")
  }else{
    alert("wrong answers= "+ wrongAnswers)
  }
  $("#score").text(userScore);
  });



});


// $("div.panel-heading").click(function(event){
//   var id =$(this).attr("id");
//   $("div#"+id+"-def").toggle();
// });
// $("div.panel-body").click(function(){
//
//   $(this).hide();
// });
