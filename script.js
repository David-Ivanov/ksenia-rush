const btn = document.querySelector(".portfolio-btn");
const visibleList = document.querySelector(".portfolio-visible-list");
const hiddenList = document.querySelector(".portfolio-hidden-list");

btn.addEventListener('click', () => {
    hiddenList.classList.toggle("hidden");
    visibleList.classList.toggle("margin-bottom");
});