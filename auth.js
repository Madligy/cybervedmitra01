// auth.js - Client-side auth using LocalStorage (Mock Backend)

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();

    // Attach event listeners to login/signup forms if they exist
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('cybervedmitra_user'));

    // Header Elements
    const authButtons = document.querySelectorAll('.auth-buttons');
    const logoutButtons = document.querySelectorAll('.btn-logout-header');

    // Menu Elements
    const dashboardItems = document.querySelectorAll('.dashboard-menu-item');

    if (user) {
        // User is logged in
        authButtons.forEach(el => el.classList.add('hidden'));
        logoutButtons.forEach(el => el.classList.remove('hidden'));

        // Show Dashboard in menu
        dashboardItems.forEach(el => el.style.display = 'block');

        // Personalize Dashboard
        if (window.location.pathname.includes('dashboard.html')) {
            const welcomeMsg = document.querySelector('.welcome-text h1');
            if (welcomeMsg) {
                welcomeMsg.textContent = `Welcome, ${user.name || 'Agent'}.`;
            }
        }
    } else {
        // User is logged out
        authButtons.forEach(el => el.classList.remove('hidden'));
        logoutButtons.forEach(el => el.classList.add('hidden'));

        // Hide Dashboard in menu
        dashboardItems.forEach(el => el.style.display = 'none');

        // If on dashboard page and not logged in, redirect to login
        if (window.location.pathname.includes('dashboard.html')) {
            window.location.href = 'login.html';
        }
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Authenticating...';
    submitBtn.disabled = true;

    // Simulate Network Delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        const users = JSON.parse(localStorage.getItem('cybervedmitra_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Success
            const sessionUser = {
                name: user.name,
                email: user.email
            };
            localStorage.setItem('cybervedmitra_user', JSON.stringify(sessionUser));

            // Redirect to Home
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Initializing...';
    submitBtn.disabled = true;

    // Simulate Network Delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        const users = JSON.parse(localStorage.getItem('cybervedmitra_users') || '[]');

        // Check for duplicates
        if (users.some(u => u.email === email)) {
            alert('Account already exists with this email.');
        } else {
            // Create New User
            const newUser = {
                name: name,
                email: email,
                password: password, // Note: In a real app, never store plain text passwords!
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('cybervedmitra_users', JSON.stringify(users));

            // Auto-login
            localStorage.setItem('cybervedmitra_user', JSON.stringify({
                name: name,
                email: email
            }));

            // Redirect to Home
            window.location.href = 'index.html';
        }

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

function logout() {
    localStorage.removeItem('cybervedmitra_user');
    window.location.href = 'index.html';
}
