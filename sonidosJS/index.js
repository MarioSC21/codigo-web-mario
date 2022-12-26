const buttonSound = document.querySelector("#button-sound");
const audio = document.querySelector("#player-audio")

buttonSound.onclick = () =>{
  if(audio.paused){
    audio.play();
    buttonSound.style.backgroundImage = "url(./corchea.png)";
  }else{
    audio.pause();
    buttonSound.style.backgroundImage = "url(./corchea-null.png)";
  }
}

