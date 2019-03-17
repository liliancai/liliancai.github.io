// One operator, two num2
// clear, withdraw, equal
$(document).ready(function(){
    var $inputLine = $('#input-line');
    var $outputLine = $('.output-line');
    // If numbers pressed
    $('.nums').click(function(){
        //$inputLine.html('1').append($(this).val());
        $inputLine.append($(this).val());
        $outputLine.append($(this).val());
    });
    // If operators pressed
    // If c
    // If =
    // If <-
    // console.log("am in");
    //$outputLine.html('').append("game over");
});
