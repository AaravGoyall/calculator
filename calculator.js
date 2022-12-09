"use strict";
var btn=document.getElementsByClassName('button')
var dp=document.getElementById('display');
var op1=0;
var op2=null;
var operator=null;
var flg=1;
var flg2=1;
function result(){
  var value=this.getAttribute('data-val');
  if(value=='+'){
    flg=1;
    operator='+';
    op1=parseFloat(display.innerText);
    display.innerText="";
  }
  else if(value=='-'){
    flg=1;
    operator='-';
    op1=parseFloat(display.innerText);
    display.innerText="";
  }
  else if(value=='/'){
    flg=1;
    operator='/';
    op1=parseFloat(display.innerText);
    display.innerText="";
  }
  else if(value=='*'){
    flg=1;
    operator='*';
    op1=parseFloat(display.innerText);
    display.innerText="";
  }
  else if(value=='='){
    if(flg==0){
      op2=parseFloat(display.innerText);
      var d=op1;
      if(op2){
      d=eval(op1+'*'+op2);}
      display.innerText=d;
    }
    else{
      var c;
    op2=parseFloat(display.innerText);
    if(op2<0&&operator=="-"){
      op2=op2*(-1);
      c=op1+op2;
    }
    else{
    c=eval(op1+operator+op2);}
    display.innerText=c;
    }
  }
  else if(value=='%'){
    op1=parseFloat(display.innerText);
    op1=op1/100;
    flg=0;
    display.innerText="";
  }
  else if(value=='+/-'){
    if(flg2){
      display.innerText+='-';
    }
    else{
      display.innerText='-'+display.innerText;
    }
  }
  else if(value=='AC'){
    flg=1;
    display.innerText="";
  }
  else{
    flg2=0;
    display.innerText+=value;
  }
}
for(var i=0;i<btn.length;i++){
  btn[i].addEventListener('click',result);
}
