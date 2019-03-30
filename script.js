'use strict';


// deklaracje

var output = document.getElementById('converted');

var buttonCels = document.getElementById('Cels-button');
var buttonFar = document.getElementById('Far-button');


var givenData;
var celsium;
var tempInFar;

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



// mechanika


buttonCels.addEventListener('click', function () {

    reset();
    givenData = giveANumber(messageCels);

    if (isNaN(givenData)) {
        print(messageNaN);

    } else {

        celsium = givenData;
        tempInFar = convertCelsToFar(givenData);

        print('Mamy ' + celsium + ' st. Celsjusza, czyli ' + tempInFar.toFixed(1) + ' st. Farenheita.');
        waterInfo(celsium);
        clothesInfo(celsium);
    }

});


buttonFar.addEventListener('click', function () {

    reset();
    givenData = giveANumber(messageFar);

    if (isNaN(givenData)) {
        print(messageNaN);

    } else {

        celsium = convertFarToCels(givenData);

        print('Mamy ' + givenData + ' st. Farenheita, czyli ' + celsium.toFixed(1) + ' st. Celsjusza.');
        waterInfo(celsium);
        clothesInfo(celsium);
    }
});