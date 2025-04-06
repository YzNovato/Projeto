const menuOpenButton = document.querySelector("#menu-open-button");
const menuClosenButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuClosenButton.addEventListener("click", () => menuOpenButton.click());