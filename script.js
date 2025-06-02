document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle the "Explore Destinations" button click
    const exploreButton = document.getElementById('exploreButton');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            const destinationsSection = document.getElementById('destinations');
            if (destinationsSection) {
                destinationsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle the travel booking form submission
    const travelForm = document.getElementById('travelForm');
    const formMessage = document.getElementById('formMessage');

    if (travelForm) {
        travelForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Basic form validation (you can add more robust validation)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('date').value;
            const guests = document.getElementById('guests').value;

            if (name === '' || email === '' || destination === '' || date === '' || guests === '') {
                displayFormMessage('Please fill in all fields.', 'error');
                return;
            }

            // Simple email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                displayFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (e.g., sending data to a server)
            console.log('Form submitted with the following data:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Destination:', destination);
            console.log('Preferred Date:', date);
            console.log('Number of Guests:', guests);

            // Display success message
            displayFormMessage('Thank you for your booking request! We will contact you shortly.', 'success');

            // Clear the form after a short delay
            setTimeout(() => {
                travelForm.reset();
                formMessage.style.display = 'none'; // Hide message after clearing form
            }, 3000);
        });
    }

    function displayFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`; // Add success or error class
        formMessage.style.display = 'block';
    }
});