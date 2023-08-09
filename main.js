// let text = document.getElementById("text");
// text.innerText = "Hello World";
// text.style.backgroundColor = "black";
// text.style.color = "white"
// // document.querySelector("p")


text.innerText = "Hello Mohammed";
function myFunction() {
    let element = document.body;
    element.classList.toggle("mystyle");
  }

  function myFunc() {
    let element = document.body;
    element.style.backgroundColor = "blue";
    let text = document.getElementById("text");
    text.innerText = "this color is black";
    text.style.color = "white"

  }


  function myFunc1() {
    let element = document.body;
    element.style.backgroundColor = "coral";
    let text = document.getElementById("text");
    text.innerText = "this Color is coral";
    text.style.color = "white"


  }

  function ChangeText(){
    let text = document.getElementById("text");
    text.innerText = "Welcom To my page";
  }


  function increaseFontSize(){
    let size = 30;
    let text = document.getElementById("text");
    text.style.fontSize = "30px";
  }
  function decreaseFontSize(){
    let text = document.getElementById("text");
    text.style.fontSize = "15px";
  }

  
  function changeTextColor(){
    let text = document.getElementById("text");
    text.style.backgroundColor = "blue";
    text.style.color = "white";
  }
  
  
  function changeImg(a){
    let img = document.getElementById("img");
    if (img.src.match("img/index2.jpg")) {
        img.src = "img/index.jpg";
    }else{
        img.src = "img/index2.jpg"
    }
    
  }



  function displayDate(){
    let date = new Date();
    alert(date);

  }


  function showMassage() {
    let name = prompt("Please enter your name");
    let text2 = document.getElementById("text2");
    text2.innerText = name
    }
  




