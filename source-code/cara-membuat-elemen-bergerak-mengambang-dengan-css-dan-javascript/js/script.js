let floatingElement = document.querySelector('.floating-element');

floatingElement.addEventListener('mouseover', function() {
    floatingElement.style.transform = 'translateY(-10px)';
});

floatingElement.addEventListener('mouseout', function() {
    floatingElement.style.transform = 'translateY(0)';
});
