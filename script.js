document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    showSignup.addEventListener('click', function () {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function () {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });


    document.getElementById('login-btn').addEventListener('click', function () {
        const name = document.getElementById('login-name').value;
        const password = document.getElementById('login-password').value;

        if (!name || !password) {
            alert('Please fill in all fields');
            return;
        }
        console.log('Login attempt:', { name, password });
        alert('Login functionality would be implemented here');
    });

    document.getElementById('signup-btn').addEventListener('click', function () {
        const name = document.getElementById('signup-name').value;
        const phone = document.getElementById('signup-phone').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const isArtist = document.getElementById('signup-artist').value;

        if (!name || !phone || !email || !password || !isArtist) {
            alert('Please fill in all fields');
            return;
        }


        console.log('Signup attempt:', { name, phone, email, password, isArtist });
        alert('Signup functionality would be implemented here');
    });


    const googleButtons = document.querySelectorAll('.google-btn');
    googleButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Google sign in clicked');
            alert('Google sign in would be implemented here');
        });
    });
});
    