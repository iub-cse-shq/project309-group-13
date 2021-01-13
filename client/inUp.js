const signUpbtn = document.getElementById('register');
const signInbtn = document.getElementById('login');
const container = document.getElementById('container');

signUpbtn.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInbtn.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));