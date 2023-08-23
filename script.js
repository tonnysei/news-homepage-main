const openMenuBtn = document.getElementById('openMenu')
const closeMenuBtn = document. getElementById('closeMenu')
const mobileListElement = document.getElementById('mobileMenu')

const openMenu = () => {
  mobileListElement.classList.remove('header__mobile-none')
}

openMenuBtn.addEventListener('click', () => openMenu())


const closeMenu = () => {
  mobileListElement.classList.add('header__mobile-none')
}

closeMenuBtn.addEventListener('click', () => closeMenu())