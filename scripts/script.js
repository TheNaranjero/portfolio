console.log("Portfolio loaded successfully!");

const carousel = document.querySelector(".project-carousel");

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let leftCard = 0;


const cardsPerPage = 3;

const totalCards =
    document.querySelectorAll(".project-card").length;


const totalPages =
    Math.ceil(totalCards / cardsPerPage);


function updateCarousel() {

    const cardWidth = 350; // Adjust based on your CSS

    const movement = leftCard * cardWidth + leftCard * 100; // 100px is the gap between cards

    carousel.style.transform =
        `translateX(-${movement}px)`;

    updateArrows();

}


rightButton.addEventListener("click", function() {

    if (leftCard < totalCards - 1) {

        leftCard++;

        updateCarousel();

    }

});


leftButton.addEventListener("click", function() {

    if (leftCard > 0) {

        leftCard--;

        updateCarousel();

    }

});

function updateArrows() {

    if (leftCard === 0) {
        leftButton.classList.add("disabled");
    } else {
        leftButton.classList.remove("disabled");
    }


    if (leftCard === totalCards - 1) {
        rightButton.classList.add("disabled");
    } else {
        rightButton.classList.remove("disabled");
    }

}