function Calculation(fnum, snum, oper){
   var result = 0;
    switch(oper){
    case '/':
        result = fnum/snum;
        break;
    case '*':
        result = fnum*snum;
        break;
    case '+':
        result = fnum+snum;
        break;
    case '-':
        result = fnum-snum;
        break;
   } 
   return result;
}

var display =  0;
var fnum='';
var snum='';
var oper='';

function addNum(btn){
    var num = $(btn).val();
    if (oper != ''){
        snum = snum+ num;
        display = snum;
        $("#display").text(display);
    }else {
        fnum= fnum + num;
        display =fnum;
        $("#display").text(display);
    }
}

function addOp(btn){
    var tOper = $(btn).val();
    oper = tOper;
}

function clearVals(){
    console.log("hit");
    display =  0;
    fnum='';
    snum='';
    oper='';
    $("#display").text(display);
}

function equals(){
    var equal = Calculation(Number(fnum), Number(snum), oper);
    display = equal;
    $("#display").text(display);

    fnum=equal;
    snum='';
    oper='';
}
