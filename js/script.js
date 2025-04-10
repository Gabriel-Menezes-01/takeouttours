const btnDrop = document.querySelector('.nav-icon');
const btnDropIcon = document.querySelector('.nav-icon i');
const btnDropMenu = document.querySelector('.dropdown_menu');

btnDrop.onclick = function (){
    btnDropMenu.classList.toggle('open')
    const isOpen = btnDropMenu.classList.contains('open')
    btnDropIcon.classList = isOpen ? 'bi bi-x-lg':'bi bi-list'
}