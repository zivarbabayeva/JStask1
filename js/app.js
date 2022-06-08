var hour=new Date().getHours();
if(hour>00&&hour<5){
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
    document.body.style.opacity=0.9;
 word='Hele seher acilmayibbbb'
}
else if(hour>5&&hour<12){
    document.body.style.backgroundColor='white'
    document.body.style.color='green'
    document.body.style.opacity=0.8;
    word='Sabahiniz xeyir'
}
else if(hour>12&&hour<17){
    document.body.style.backgroundColor='yellow'
    document.body.style.color='green'
    document.body.style.opacity=0.7;
    word='Her vaxtiniz xeyir'
}
else if(hour>17&&hour<20){
    document.body.style.backgroundColor='blue'
    document.body.style.color='white'
    document.body.style.opacity=0.6;
    word='Axsaminiz xeyir'
}
else if(hour>20&&hour<23){
    document.body.style.backgroundColor='grey'
    document.body.style.color='white'
    document.body.style.opacity=0.5;
    word='Geceniz xeyir'
}
else{
    document.body.style.backgroundColor='orange'
    document.body.style.color='black'
    document.body.style.opacity=0.2;
    word='helloo'
}
function Get(){
    document.getElementById('first').innerHTML=word
}