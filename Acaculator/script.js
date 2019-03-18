// One operator, two num2
// clear, withdraw, equal
$(document).ready(function(){
    var $inputLine = $('#input-line');
    var $outputLine = $('.output-line');

    var overFlow = function(){
        // overFlow
        //$inputLine.html('0');
        $outputLine.html('BufferOverFlow');
    };

    var reset = function(){
        $inputLine.html('');
        $outputLine.html('');
    };
    // If numbers pressed
    $('.nums').click(function(){
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
    });
    // If operators pressed
    // If c
    $('.ac').click(function(){
        reset();
    });
    // If =
    // If <-
    $('.backbuttn').click(function(){
        $inputLine.html($inputLine.html().substring(0, $inputLine.html().length-1));
    });
    // console.log("am in");
    //$outputLine.html('').append("game over");
});
