const btn = document.querySelector(".portfolio-btn");
const btnText = document.querySelector(".portfolio-btn-text");
const hiddenBox = document.querySelector(".hidden-list-box");
const hiddenList = document.querySelector(".portfolio-hidden-list");

btn.addEventListener('click', () => {
    hiddenBox.classList.toggle("hidden");
    hiddenList.classList.toggle("hidden-list");
    changeBtnText();
});

function changeBtnText() {
    switch (btnText.textContent) {

        case "Другие работы":
            btnText.textContent = "Скрыть";
            break;

        default:
            btnText.textContent = "Другие работы";
            break;
    }
}

// scroll 

const reviewsList = document.querySelector(".reviews-list");
const scrollToLeftBtn = document.querySelector(".scroll-left");
const scrollToRightBtn = document.querySelector(".scroll-right");

let score = 0;

function checkMinScore() {
    if (score < 0) {
        score = 0;
    }
}
function checkMaxScore() {
    if (score > 2000) {
        score = 2000;
    }
}

scrollToLeftBtn.addEventListener('click', () => {
    score -= 500;
    reviewsList.scroll({
        left: score,
        behavior: "smooth",
    });
    checkMinScore();
});
scrollToRightBtn.addEventListener('click', () => {
    score += 500;
    reviewsList.scroll({
        left: score,
        behavior: "smooth",
    });
    checkMaxScore();
});

// quetions 

const quetionItems = document.querySelectorAll(".quetions-item");
const quetionBtns = document.querySelectorAll(".quetions-btn");
const quetionIcons = document.querySelectorAll(".quetions-icon");
const quetionText = document.querySelectorAll(".quetions-text");

for (let i = 0; i < quetionBtns.length; i++) {
    quetionBtns[i].addEventListener('click', () => {
        quetionIcons[i].classList.toggle("quetions-icon-active");
        quetionItems[i].classList.toggle("quetions-item-active");
        quetionText[i].classList.toggle("quetions-text-active");
    });
}

