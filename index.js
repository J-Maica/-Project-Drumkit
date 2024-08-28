let btns = document.querySelectorAll("button");

//add clickevent to btns
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        // console.log(btns[i].innerHTML);
        let btnVal = btns[i].innerHTML;
        playSound(btnVal);
        btnAnimation(btnVal)
    })
}
// keyboard key
document.addEventListener("keypress", function(e){
    // console.log(e.key);
    let btnVal = e.key;
    playSound(btnVal);
    btnAnimation(btnVal)
})


function playSound(key){
    switch(key){
        case "1":
            var audio = new Audio("./sounds/tom-1.mp3")
            audio.play();
        break;

        case "2":
            var audio = new Audio("./sounds/tom-2.mp3")
            audio.play();
        break;

        case "3":
            var audio = new Audio("./sounds/tom-3.mp3")
            audio.play();
        break;

        case "4":
            var audio = new Audio("./sounds/tom-4.mp3")
            audio.play();
        break;

        case "5":
            var audio = new Audio("./sounds/snare.mp3")
            audio.play();
        break;

        case "6":
            var audio = new Audio("./sounds/crash.mp3")
            audio.play();
        break;

        case "7":
            var audio = new Audio("./sounds/kick-bass.mp3")
            audio.play();
        break;
        default:
            alert("invaild key")
    }
}

function btnAnimation(currKey){
    let className = keyWord(currKey)
    if(className){
        let actBtn = document.querySelector("."+className);
        if(actBtn){
            actBtn.classList.add("pressed");
            setTimeout(function(){
                actBtn.classList.remove("pressed");
            }, 100);
        }
    }
}

function keyWord(key){
    switch (key) {
        case "1": return "one";
        case "2": return "two";
        case "3": return "three";
        case "4": return "four";
        case "5": return "five";
        case "6": return "six";
        case "7": return "seven";
        default: return null;
    }
}