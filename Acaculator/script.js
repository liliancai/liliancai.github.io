// One operator, two inputNum a+b=c c+d=e etc
// clear, withdraw, equal
var helloword = function(){
    return "Hello World";
}
var abc = "abc";
let newResult = 0;// new lastResult
let inputNum = 0;
let inputNumStr = '';
let lastResult = 0;// Last lastResult of operation
let operator = '+';

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
    newResult = 0;
    inputNum = 0;
    lastResult = 0;
    operator = '+';
    inputNumStr = '';
    return $inputLine;
};

var operate = function(){
    operator = $(this).val();
    //alert("why is not *"+ operator);
    $inputLine.append(operator);
    lastResult = newResult;
    //console.log("8-",lastResult);
    inputNum =0;
    inputNumStr = '';
};

var operatNum = function(){
    switch (operator) {
        case '+':
            newResult = lastResult + inputNum;
            break;
        case '-':
            newResult = lastResult - inputNum;
            break;
        case '/':
            newResult = lastResult / inputNum;
            break;
        case '*':
            newResult = lastResult * inputNum;
            break;
        default:
    }
    $outputLine.html(newResult);
}
var clickOnNums =  function(){
        //$inputLine.html('1').append($(this).val());
        // If more than one . return so it won't change
        // anything
        if ($(this).val() == '.' && (inputNumStr.indexOf('.') != -1)){
            return;
        }
        // If % move the . two digits ahead.

        // If reach limit, reset

        if ($outputLine.html() == 'BufferOverFlow'){
            reset();
            return;
        }
        if ($inputLine.html().length > 11){
            overFlow();
            return;
        }


        if($(this).val() == '%' ){
            if(inputNumStr.indexOf('%') != -1){
                return;
            }
            inputNumStr += $(this).val();
            inputNum = inputNum /100;
        }else {
            inputNumStr += $(this).val();
            inputNum = parseFloat(inputNumStr);
            //inputNum = inputNum * 10 + parseFloat($(this).val());
        }
        $inputLine.append($(this).val());
        operatNum();
};


var backspace = function(){
    $inputLine.html($inputLine.html().substring(0, $inputLine.html().length-1));
};

var givelastResult = function(){
    $inputLine.html(newResult);
    $outputLine.html('');
};
var onReady = function(){
    // If numbers pressed
    $('.nums').click(clickOnNums);
    // If operators pressed
    // If c
    $('.ac').click(reset);
    // If =
    // If <-
    $('.backbuttn').click(backspace);

    // Time to do the real math now- -!
    $('.ops').click(operate);
    $('.resultbutton').click(givelastResult);

};
$(document).ready(onReady);
