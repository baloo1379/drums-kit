(function () {
    "use strict";

    function playSound(code, keyboard) {
        const audio = document.querySelector(`audio[data-key="${code}"]`);
        const btn = document.querySelector(`button[data-key="${code}"]`);
        if(!audio) return;
        audio.currentTime=0;
        audio.play();
        if(keyboard) btn.classList.add('clicked');
    }

    function removeTransition (e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('clicked');
    }

    var keys = window.addEventListener('keydown', function (e) {
        playSound(e.keyCode, 1);
    }, false);

    var mouse = document.addEventListener

    const btns = document.querySelectorAll('button.button');


    btns.forEach(btn => btn.addEventListener('click', function () {
        var code = this.getAttribute('data-key');
        playSound(code, 0);
    } , false) );
    btns.forEach(btn => btn.addEventListener('transitionend', removeTransition , false) );
})();
