//deteting button pressed

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}
function handleclick(){ 
    var buttoninnerhtml=this.innerHTML;
    check(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
} 

//detecting keyboard is pressed

document.addEventListener("keydown",keybo);

function keybo(event){    
    //gives us the event that triggered
check(event.key); 
buttonanimation(event.key);
}

function check(value){
   
  switch (value) {
      case "w":
          var tom1=new Audio("sounds/tom-1.mp3");
           tom1.play();
          break;
  
          case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
            break;

            case "s":
          var tom3=new Audio("sounds/tom-3.mp3");
           tom3.play();
          break;

          case "d":
          var tom4=new Audio("sounds/tom-4.mp3");
           tom4.play();
          break;

          case "j": 
          var kick=new Audio("sounds/kick-bass.mp3");
           kick.play();
        
          break;

          case "k":
           var crash=new Audio("sounds/crash.mp3");
           crash.play();
          break;

          case "l":
            var snare=new Audio("sounds/snare.mp3");
             snare.play();
            break;
      default:
          break;
  }
}

function buttonanimation(curentbtn){

    var btn=document.querySelector("."+curentbtn);
    btn.classList.add("pressed");

    setTimeout(function() {
        btn.classList.remove("pressed");
    }, 1000);
}