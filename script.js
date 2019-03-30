'use strict';


// declarations

var output = document.getElementById('print-temp-info');

var buttonCels = document.getElementById('button-celsius');
var buttonFar = document.getElementById('button-fahrenheit');


var givenData;
var celsius;
var fahrenheit;

var messageCels = 'Podaj temperaturę w stopniach Celsjusza';
var messageFar = 'Podaj temperaturę w stopniach Farenheita';
var messageNaN = 'Nie podałeś liczby. Spróbuj raz jeszcze.';


var reset = function () {
    output.innerHTML = '';
}

var print = function (string) {
    output.innerHTML += string + '<br>';
}


var giveANumber = function (message) {
    return parseFloat(window.prompt(message));
}


var convertCelsToFar = function (input) {
    return input * 1.8 - 32;
}

var convertFarToCels = function (input) {
    return (input - 32) / 1.8;
}

var waterInfo = function (temp) {
    if (temp <= 0) {
        print('Woda jest lodem - czyli jest w stanie stałym.')
    } else if (temp > 0 && temp < 100) {
        print('Woda jest wodą - czyli jest w stanie ciekłym.')
    } else if (temp >= 100) {
        print('Woda jest parą wodną - czyli jest w stanie lotnym.')
    }
}

var clothesInfo = function (temp) {
    if (temp >= -65 && temp < 5) {
        print('Koniecznie zabierz czapkę i szalik!')
    } else if (temp >= 5 && temp < 20) {
        print('Nie zapomnij o lekkiej kurtce.')
    } else if (temp >= 20 && temp < 55) {
        print('Możesz założyć krótkie spodenki :)  ')
    } else {
        print('Czas pożyczyć skafander od NASA ;)  ')
    }
}



// mechanics


buttonCels.addEventListener('click', function () {

    reset();
    givenData = giveANumber(messageCels);

    if (isNaN(givenData)) {
        print(messageNaN);

    } else {

        celsius = givenData;
        fahrenheit = convertCelsToFar(givenData);

        print('Mamy ' + celsius + ' st. Celsjusza, czyli ' + fahrenheit.toFixed(1) + ' st. Fahrenheita.');
        waterInfo(celsius);
        clothesInfo(celsius);
    }

});


buttonFar.addEventListener('click', function () {

    reset();
    givenData = giveANumber(messageFar);

    if (isNaN(givenData)) {
        print(messageNaN);

    } else {

        celsius = convertFarToCels(givenData);

        print('Mamy ' + givenData + ' st. Fahrenheita, czyli ' + celsius.toFixed(1) + ' st. Celsjusza.');
        waterInfo(celsius);
        clothesInfo(celsius);
    }
});