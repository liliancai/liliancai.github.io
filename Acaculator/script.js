// One operator, two num2
// clear, withdraw, equal
var helloword = function(){
    return "Hello World";
}
var abc = "abc";
var $inputLine = $('#input-line');
var $outputLine = $('.output-line');

var overFlow = function(){
    // overFlow
    //$inputLine.html('0');
    $outputLine.html('BufferOverFlow');
    console.log($outputLine.html()+$outputLine.html().length);
    return $outputLine;
};

var reset = function(){
    $inputLine.html('');
    $outputLine.html('');
    return $inputLine;
};

var clickOnNums =  function(){
        //$inputLine.html('1').append($(this).val());
        // If more than one . return so it won't change
        // anything
        if ($(this).val() == '.' && ($inputLine.html().indexOf('.') != -1)){
            return;
        }
        // If % move the . two digits ahead.
        if($(this).val() == '%'){
            $outputLine.html()/100;
        }
        // If reach limit, reset
        if ($outputLine.html() == 'BufferOverFlow'){
            reset();
        }
        $inputLine.append($(this).val());
        $outputLine.append($(this).val());

        if ($inputLine.html().length > 12){
            overFlow();
        }
};

var onReady = function(){
    // If numbers pressed
    $('.nums').click(clickOnNums);
    // If operators pressed
    // If c
    $('.ac').click(reset);
    // If =
    // If <-
    $('.backbuttn').click(function(){
        $inputLine.html($inputLine.html().substring(0, $inputLine.html().length-1));
    });
    // console.log("am in");
    //$outputLine.html('').append("game over");
};
$(document).ready(onReady);
