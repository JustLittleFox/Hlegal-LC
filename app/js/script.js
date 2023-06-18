$('.js-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
});

const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-list');

btn.addEventListener('click', function () {
    menu.classList.toggle('active');
    btn.classList.toggle('close');
})
const buttons = document.querySelectorAll(".js-exp-btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        buttons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });
        this.classList.add("active");
    });
});
const langLinks = document.querySelectorAll('.js-lang-toggle');

langLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        langLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

const openPopupLink = document.getElementById('openPopupLink');
const popupContainer = document.querySelector('.popup-container');
const popupContent = document.querySelector('.popup-content');

function openPopup(event) {
    event.preventDefault();

    popupContainer.style.display = 'flex';
}

function closePopup() {
    popupContainer.style.display = 'none';
}

popupContainer.addEventListener('click', function (event) {
    if (event.target === popupContainer) {
        closePopup();
    }
});

openPopupLink.addEventListener('click', openPopup);

const menuLinks = document.querySelectorAll('.menu__list a');

function handleLinkClick(event) {
    menuLinks.forEach(link => link.classList.remove('active'));

    event.target.classList.add('active');
}

menuLinks.forEach(link => link.addEventListener('click', handleLinkClick));

function closePopup() {
    popupContainer.style.display = 'none';
    menuLinks.forEach(link => link.classList.remove('active'));
}

popupContainer.addEventListener('click', function (event) {
    if (event.target === popupContainer) {
        closePopup();
    }
});
openPopupLink.addEventListener('click', function (event) {
    event.preventDefault();
});

closePopupBtn.addEventListener('click', closePopup);





