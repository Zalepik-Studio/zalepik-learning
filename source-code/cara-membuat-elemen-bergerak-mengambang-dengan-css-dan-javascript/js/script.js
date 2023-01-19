let floatingElement = document.querySelector('.floating-element');

let position = 0;

setInterval(function() {
    if (position === 0) {
        position = -10;
    } else {
        position = 0;
    }
    floatingElement.style.transform = 'translateY(' + position + 'px)';
}, 1000);
