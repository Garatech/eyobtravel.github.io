// SCRIPT OFERTAS
const ofertas = [...document.querySelectorAll('.oferta-item')];

// Ordenar y filtrar ofertas
document.getElementById('sortSelect').addEventListener('change', e => {
    const value = e.target.value;
    const container = document.getElementById('ofertasList');

    let sorted = [...ofertas];

    if (value === 'price') {
        sorted.sort((a, b) => a.dataset.price - b.dataset.price);
    }

    if (value === 'rating') {
        sorted.sort((a, b) => b.dataset.rating - a.dataset.rating);
    }

    container.innerHTML = '';
    sorted.forEach(o => container.appendChild(o));
});

// Filtrar por precio y valoración
document.getElementById('maxPrice').addEventListener('input', e => {
    const max = e.target.value || Infinity;
    ofertas.forEach(o => {
        o.style.display = o.dataset.price <= max ? 'grid' : 'none';
    });
});

document.getElementById('minRating').addEventListener('change', e => {
    const min = e.target.value || 0;
    ofertas.forEach(o => {
        o.style.display = o.dataset.rating >= min ? 'grid' : 'none';
    });
});


// SCRIPT PÁGINAS AUTH

// VALIDACIÓN PARA LOGIN
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const message = document.getElementById('loginMessage');

        if (email === '' || password === '') {
            message.textContent = 'Por favor, completa todos los campos.';
            message.style.color = '#c50906'; // Rojo error
            message.style.background = '#f4e6e6';
            message.style.display = 'block';
            return;
        }

        // Simulamos éxito
        message.textContent = 'Envío de datos exitoso';
        message.style.color = '#137333';
        message.style.background = '#e6f4ea';
        message.style.display = 'block';
    });
}

// VALIDACIÓN PARA REGISTER
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const message = document.getElementById('registerMessage');

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            message.textContent = 'Por favor, completa todos los campos.';
            message.style.color = '#c50906'; // Rojo error
            message.style.background = '#f4e6e6';
            message.style.display = 'block';
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = 'Las contraseñas no coinciden.';
            message.style.color = '#c50906';
            message.style.background = '#f4e6e6';
            message.style.display = 'block';
            return;
        }

        // Simular éxito
        message.textContent = 'Envío de datos exitoso';
        message.style.color = '#137333';
        message.style.background = '#e6f4ea';
        message.style.display = 'block';
    });
}