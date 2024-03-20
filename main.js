const backdrop = document.querySelector('.backdrop');
const orderBtn = document.querySelector('.button');
const closeBtn = document.querySelector('.btn-close');
const form = document.querySelector('.modal-form');
const mobileMenu = document.querySelector('.mob-menu');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menuNav = document.querySelector('.mob-navigation');

menuOpen.addEventListener("click", onMenuOpen);
orderBtn.addEventListener('click', handleModal);
form.addEventListener('submit', onFormSubmit);

function onMenuOpen() {
    mobileMenu.classList.add('is-open');
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove('is-open')
  });
  menuNav.addEventListener("click", () => {
    mobileMenu.classList.remove('is-open')
  });
}

function handleModal(e) {
    backdrop.classList.add('is-open');
    document.addEventListener("keydown", closeModal);
    closeBtn.addEventListener("click", () => {
          backdrop.classList.remove('is-open')
      })
}

function closeModal(e) {
    if (e.code === "Escape") backdrop.classList.remove('is-open');
}

function onFormSubmit (event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements['user-name'].value.trim();
    const phone = form.elements['user-phone'].value.trim();
    const email = form.elements['user-email'].value.trim();
    const comment = form.elements['user-comment'].value.trim();
    const userData = {
        name,
        phone,
        email,
        comment,
    };
    console.log(userData);
    form.reset();
}

function scrollToUp() {
  const btn = document.querySelector('.btn-ring');

  function showButton() {
    btn.classList.remove('btn-ring-hidden');
  }

  function hideButton() {
    btn.classList.add('btn-ring-hidden');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250 || document.documentElement.scrollTop > 250) {
      showButton();
    } else {
      hideButton();
    }
  });

  btn.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
}

scrollToUp();