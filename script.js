function moveOwlEyes(x, y) {
    const owlEyes = document.querySelectorAll('.owl-eye'); // Select both eyes
    const boundary = 60; // Movement boundary in pixels (adjust to your liking)

    owlEyes.forEach(owlEye => {
        const eyeBall = owlEye.querySelector('.owl-eye-ball');
        const rect = owlEye.getBoundingClientRect();

        // Get the center of the eye
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Calculate the difference between the eye center and the pointer/touch position
        const deltaX = x - eyeCenterX;
        const deltaY = y - eyeCenterY;

        // Calculate the angle to move the eye ball
        const angle = Math.atan2(deltaY, deltaX);

        // Calculate the new position within the defined boundary
        const distance = Math.min(boundary, Math.sqrt(deltaX * deltaX + deltaY * deltaY));
        const newX = distance * Math.cos(angle);
        const newY = distance * Math.sin(angle);

        // Update the position of the eye ball, adjusted for -50%/-50% translation
        eyeBall.style.transform = `translate(${newX - 50}%, ${newY - 50}%)`;

        // If the pointer is inside the owl-eye container, return the eye ball to center
        if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
            eyeBall.style.transform = 'translate(-50%, -50%)';
        }
    });
}

// Mouse movement event
document.addEventListener('mousemove', function(event) {
    moveOwlEyes(event.clientX, event.clientY);
});

// Touch movement event
document.addEventListener('touchmove', function(event) {
    const touch = event.touches[0];
    moveOwlEyes(touch.clientX, touch.clientY);
});
