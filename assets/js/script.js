const btnMoblie = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMoblie.addEventListener('click', toggleMenu);