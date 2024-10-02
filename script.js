document.addEventListener('mousemove', function(event) {
    const owlEyes = document.querySelectorAll('.owl-eye'); // Select both eyes
    const boundary = 60; // This defines the movement boundary in pixels (adjust to your liking)

    owlEyes.forEach(owlEye => {
        const eyeBall = owlEye.querySelector('.owl-eye-ball');
        const rect = owlEye.getBoundingClientRect();
        
        // Get the center of the eye
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Calculate the difference between the eye center and the mouse position
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;

        // Calculate the angle to move the eye ball
        const angle = Math.atan2(deltaY, deltaX);

        // Calculate the new position within the defined boundary
        const distance = Math.min(boundary, Math.sqrt(deltaX * deltaX + deltaY * deltaY));
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);

        // Update the position of the eye ball, adjusted for -50%/-50% translation
        eyeBall.style.transform = `translate(${x - 50}%, ${y - 50}%)`;

        // If the cursor is inside the owl-eye container, return the eye ball to center
        if (event.clientX > rect.left && event.clientX < rect.right &&
            event.clientY > rect.top && event.clientY < rect.bottom) {
            eyeBall.style.transform = 'translate(-50%, -50%)';
        }
    });
});