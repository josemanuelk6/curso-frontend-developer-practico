const menuEmail = document.querySelector('.navbar-email');
const menuEmailOculto = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    menuEmailOculto.classList.toggle('inactive');
}