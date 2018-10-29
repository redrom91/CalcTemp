
var a = prompt("Введите температуру, например 243C");
var b = Number.parseFloat(a);

var c = 'C';
var k = 'K';
var f = 'F';

var searchC = a.match(/C/);
var searchK = a.match(/K/);
var searchF = a.match(/F/);
var resCF = (b*9/5)+32;
var resCK = b + 273.15;
var resKF = (b - 273.15)*9/5+32;
var resKC = b - 273.15;
var resFK = (b-32)*5/9+273.15;
var resFC = (b-32)*5/9;

if(searchC == c){
    alert('Итак, вы ввели Цельсий. По Фаренгейту это у нас = ' + resCF + ' ' + 'F. Ну а в Кельвинах это = ' + resCK + ' ' + 'К .' );
}
else if(searchK == k){
    alert('Итак, вы ввели Кельвины. По Фаренгейту это у нас = ' + resKF + ' ' + 'F. Ну а по Цельсию это = ' + resKC + ' ' + 'C .' );
}
else if(searchF == f){
    alert('Итак, вы ввели Фаренгейты. В Кельвинах это у нас = ' + resFK + ' ' + 'F. Ну а по Цельсию это = ' + resFC + ' ' + 'C .');
}

function testNumber(){
    if (isNaN(b)) {
        alert("invalid number!");
    }
    else {
        return b;
    }
}

function convertor(){
    if(a.search(/C/) === c){
        alert(b + 'вы ввели цельсий');
    

    }
}