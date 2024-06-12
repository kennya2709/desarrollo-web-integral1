document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    const button = document.querySelector('button');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2980b9';
            this.style.boxShadow = '0 0 5px rgba(41, 128, 185, 0.5)';
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = '#adadad';
            this.style.boxShadow = 'none';
        });
    });

    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message');

        if (username === "admin" && password === "1234") {
            message.textContent = "Ingreso exitoso.";
            message.style.color = "green";
        } else {
            message.textContent = "Usuario o contraseña incorrectos.";
            message.style.color = "red";
        }
    });
});
