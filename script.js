window.onload = function() {

    function soundAnimate(key) {
        let sound = document.querySelector(`audio[data-key="${key}"]`);
        let currentButton = document.querySelector(`div[data-key="${key}"]`);

        if ( !sound ) return;
        sound.currentTime = 0;
        sound.play();

        currentButton.classList.add('active');
    }

    function playSoundAnimate(e) {
        let key = e.keyCode || e.which;
        soundAnimate(key);
    }

    function playSoundAnimateClick(e) {
        if (e.target.nodeName === "DIV") {
            let key = e.target.getAttribute('data-key');
            soundAnimate(key);
        }

        if (e.target.nodeName === "SPAN" || e.target.nodeName === "KBD") {
            let key = e.target.parentNode.getAttribute('data-key');
            soundAnimate(key);
        }
    }

    function removeAnimation(e) {
        if (e.propertyName !== "transform") return;
        e.target.classList.remove('active');
    }

    window.addEventListener('keydown', playSoundAnimate);
    document.getElementById('content').addEventListener('click', playSoundAnimateClick);
    window.addEventListener('transitionend', removeAnimation);

    function changeBg() {
        let imageArr = ["first.png", "second.png", "third.png"];
        let index = Math.floor(Math.random() * imageArr.length);
        let img = imageArr[index];
        document.documentElement.style.backgroundImage = `url("./images/${img}")`;

        let credits = Array.from(document.getElementsByClassName('credits'));
        let currentRights = credits[index];
        let otherCredits = credits.filter(x => x !== credits[index]);
        otherCredits.forEach(x => x.style.opacity = 0);
        currentRights.style.opacity = 1;
    }

    window.setInterval(changeBg, 1200);

};
