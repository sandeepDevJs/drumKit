function playSound(e) {
     const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const controlBox = document.querySelector(`.control-box[data-key="${keyCode}"]`);
    
    if(!audio) return null;

    audio.currentTime=0;
    audio.play();

    controlBox.classList.add("playing");
}

window.addEventListener("keydown", playSound);

const allControlBoxes = document.querySelectorAll(".control-box");

function removeTransition(e) {

    if (e.propertyName !== "transform") {
        return;
    }

    this.classList.remove("playing")
}

allControlBoxes.forEach(key => key.addEventListener("transitionend", removeTransition))