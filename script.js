document.addEventListener("keydown", function (e) {
    if (e.code == "KeyA") {
        let audio = new Audio("sounds/A.mp3");
        audio.play();
    } else if (e.code == "KeyS") {
        let audio = new Audio("sounds/S.mp3");
        audio.play();
    } else if (e.code == "KeyD") {
        let audio = new Audio("sounds/D.mp3");
        audio.play();
    } else if (e.code == "KeyF") {
        let audio = new Audio("sounds/F.mp3");
        audio.play();
    } else if (e.code == "KeyG") {
        let audio = new Audio("sounds/G.mp3");
        audio.play();
    } else if (e.code == "KeyH") {
        let audio = new Audio("sounds/H.mp3");
        audio.play();
    } else if (e.code == "KeyJ") {
        let audio = new Audio("sounds/J.mp3");
        audio.play();
    } else if (e.code == "KeyW") {
        let audio = new Audio("sounds/W.mp3");
        audio.play();
    } else if (e.code == "KeyE") {
        let audio = new Audio("sounds/E.mp3");
        audio.play();
    } else if (e.code == "KeyT") {
        let audio = new Audio("sounds/T.mp3");
        audio.play();
    } else if (e.code == "KeyY") {
        let audio = new Audio("sounds/Y.mp3");
        audio.play();
    } else if (e.code == "KeyU") {
        let audio = new Audio("sounds/U.mp3");
        audio.play();
    } else {
        console.log("Wrong key!");
    }
});