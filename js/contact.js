// İletişim Formu İşleme
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const successMessage = formMessage.querySelector('.success-message');
    const errorMessage = formMessage.querySelector('.error-message');
    
    try {
        const formData = {
            name: this.querySelector('input[name="name"]').value,
            email: this.querySelector('input[name="email"]').value,
            subject: this.querySelector('input[name="subject"]').value,
            message: this.querySelector('textarea[name="message"]').value
        };

        const response = await fetch('http://localhost:5000/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        formMessage.style.display = 'block';
        
        if (response.ok) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            this.reset();
        } else {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        formMessage.style.display = 'block';
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        console.error('Error:', error);
    }
});
