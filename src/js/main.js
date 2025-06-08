
const $list = document.querySelectorAll('.nav__item');

function activeLink () {
    $list.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    this.classList.add('active');
}

$list.forEach(link => link.addEventListener('click', activeLink));