let add = document.querySelector('#add');
let subtract=document.querySelector('#minus');

add.addEventListener("click",function(){
    let res = document.querySelector('#counter');
    let output = Number(res.innerHTML)+1;
    if(output<0){
        output=0;
    }
    res.innerHTML = output;
});
subtract.addEventListener("click",function(){
    let res = document.querySelector('#counter');
    let output = Number(res.innerHTML)-1;
    if(output<0){
        output=0;
    }
    res.innerHTML = output;
});