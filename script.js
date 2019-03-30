'use strict';

// deklaracje

var output1 = document.getElementById('converted');
var output2 = document.getElementById('water');
var output3 = document.getElementById('clothes');

var buttonCels = document.getElementById('Cels-button');
var buttonFar = document.getElementById('Far-button');

var givenData;
var tempNumber;
var tempCels;
var tempFar;


var waterInfo = function () {

    if (tempCels <= 0) {
        output2.innerHTML = 'Woda jest lodem - czyli jest w stanie stałym.'
    } else if (tempCels > 0 && tempCels < 100) {
        output2.innerHTML = 'Woda jest wodą - czyli jest w stanie ciekłym.'
    } else if (tempCels >= 100) {
        output2.innerHTML = 'Woda jest parą wodną - czyli jest w stanie lotnym.'
    }
}

var clothesInfo = function () {

    if (tempCels >= -65 && tempCels < 5) {
        output3.innerHTML = 'Koniecznie zabierz czapkę i szalik!'
    } else if (tempCels >= 5 && tempCels < 20) {
        output3.innerHTML = 'Nie zapomnij o lekkiej kurtce.'
    } else if (tempCels >= 20 && tempCels < 55) {
        output3.innerHTML = 'Możesz założyć krótkie spodenki :)  '
    } else {
        output3.innerHTML = 'Czas pożyczyć skafander od NASA ;)  '
    }
}

var reset = function () {
    output1.innerHTML = '';
    output2.innerHTML = '';
    output3.innerHTML = '';
}


// mechanika

buttonCels.addEventListener('click', function () {

    reset();

    givenData = window.prompt('Podaj temperaturę w stopniach Celsjusza');
    tempNumber = parseFloat(givenData);


    if (isNaN(tempNumber)) {

        output1.innerHTML = 'Nie podałeś liczby. Spróbuj raz jeszcze.'

    } else {

        tempCels = tempNumber;
        tempFar = tempCels * 1.8 - 32;

        output1.innerHTML = 'Mamy ' + tempCels + ' st. Celsjusza, czyli ' + tempFar.toFixed(1) + ' st. Farenheita.'

        waterInfo();
        clothesInfo();
    }

});


buttonFar.addEventListener('click', function () {

    reset();

    givenData = window.prompt('Podaj temperaturę w stopniach Farenheita');
    tempNumber = parseFloat(givenData);

    if (isNaN(tempNumber)) {
        output1.innerHTML = 'Nie podałeś liczby. Spróbuj raz jeszcze.'
    } else {

        tempCels = (tempFar - 32) / 1.8;
        output1.innerHTML = 'Mamy ' + tempFar + ' st. Farenheita, czyli ' + tempCels.toFixed(1) + ' st. Celsjusza.'

        waterInfo();
        clothesInfo();
    }
});