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


