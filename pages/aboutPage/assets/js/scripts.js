document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const tyMessage = document.getElementById('tyMessage');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const feedback = document.getElementById('feedback').value.trim();

        if (name === "" || email === "" || feedback === "") {
            alert('Please fill out all fields before submitting.');
            return;
        }

        console.log('Feedback submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Feedback:', feedback);

        tyMessage.innerHTML = `
            <p>Thank you, <strong>${name}</strong>! Your feedback has been received. 
            A confirmation email has been sent to your email.</p>`;
        tyMessage.style.display = 'block';
        tyMessage.style.opacity = '1'; 

        setTimeout(() => {
            feedbackForm.reset();
        }, 5000);
    });
});
