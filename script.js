document.addEventListener("keydown", function (e) {
    if (e.code == "KeyA") {
        let audio = new Audio("sounds/A.mp3");
        audio.play();
        console.log("The 'A' key is pressed.");
    } else if (e.code == "KeyS") {
        let audio = new Audio("sounds/S.mp3");
        audio.play();
        console.log("The 'S' key is pressed.");
    } else if (e.code == "KeyD") {
        let audio = new Audio("sounds/D.mp3");
        audio.play();
        console.log("The 'D' key is pressed.");
    } else if (e.code == "KeyF") {
        let audio = new Audio("sounds/F.mp3");
        audio.play();
        console.log("The 'F' key is pressed.");
    } else if (e.code == "KeyG") {
        let audio = new Audio("sounds/G.mp3");
        audio.play();
        console.log("The 'G' key is pressed.");
    } else if (e.code == "KeyH") {
        let audio = new Audio("sounds/H.mp3");
        audio.play();
        console.log("The 'H' key is pressed.");
    } else if (e.code == "KeyJ") {
        let audio = new Audio("sounds/J.mp3");
        audio.play();
        console.log("The 'J' key is pressed.");
    } else {
        console.log("Wrong key!");
    }
});