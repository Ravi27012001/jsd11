console.log("working....");
function Student (name,classs,roll){      
this.name = name;
this.classs = classs;
this.roll = roll;
}
let me = new Student("Ravikant","10","93");
let you = new Student("saurav","12","11");

console.log(me);
console.log(you);





const element1 = document.getElementById("message");
console.log(element1);
console.log(element1.innerHTML);
console.log(element1.innerText);

const element2 = document.getElementsByClassName("class1");
console.log(element2);
console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);

const element3 = document.getElementsByTagName("h1");
console.log(element3);
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);
console.log(element3[1].innerHTML);
console.log(element3[1].innerText);

function changeText(){
    const changeText = document.getElementsByTagName("h1");
    changeText[0].innerText = "hello World";
    console.log(changeText[0].innerText);
}


function changeColor(){
    let  changeColor = document.getElementsByTagName("h1");
    changeColor[0].style.color = "red";
     
}