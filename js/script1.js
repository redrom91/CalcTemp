function fnIN(){
    var inputData = document.getElementById('txtIn').value;
    inputData = parseFloat(inputData);
    if(isNaN(inputData)){
        alert('Invalid data!');
    }else{
        return inputData;
    }
    
}

function fnScale(){
    var sel = document.getElementById("mySelect").selectedIndex;
        return sel;  
}

function fnCelsius(){
    var resCF = (fnIN()*9/5)+32;
    var resCK = fnIN() + 273.15;
    var resTxt = 'Итак, вы ввели ' + fnIN() + ' °C. В градусах Фаренгейта значение данной температуры = ' + resCF + ' °F. Ну а в Кельвинах это = ' + resCK + ' К .';
    document.getElementById("out").innerHTML = resTxt;
}

function fnKelvin(){
    var resKF = (fnIN() - 273.15)*9/5+32;
    var resKC = fnIN() - 273.15;
    var resTxt = 'Итак, вы ввели ' + fnIN() +' °K. В градусах Фаренгейта значение данной температуры = ' + resKF + ' °F. Ну а в градусах Цельсия это = ' + resKC + ' °C .' ;
    document.getElementById("out").innerHTML = resTxt;
}
function fnFahrenheit(){
    var resFK = (fnIN() - 32)*5/9+273.15;
    var resFC = (fnIN() - 32)*5/9;
    var resTxt = 'Итак, вы ввели ' + fnIN() + ' °F. В Кельвинах это у нас = ' + resFK + ' K.  Ну а в градусах Цельсия это = ' + resFC + ' °C .';
    document.getElementById("out").innerHTML = resTxt; 
}

function fnConvertor(){
    if (fnScale() == 0){
        fnCelsius();
    }
    else if(fnScale() == 1){
        fnKelvin();
    }
    else if(fnScale() == 2){
        fnFahrenheit();
    }
}

