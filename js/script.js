const wrapperr = document.querySelector('.wrapperr');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
  wrapperr.classList.add('active');
};

loginLink.onclick = () => {
  wrapperr.classList.remove('active');
};

btnPopup.onclick = () => {
  wrapperr.classList.add('active-popup');
};

iconClose.onclick = () => {
  wrapperr.classList.remove('active-popup');
  wrapperr.classList.remove('active');
};