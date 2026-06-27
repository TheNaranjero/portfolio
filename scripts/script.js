console.log("Portfolio loaded successfully!");

const carousel = document.querySelector(".project-carousel");

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let leftCard = 0;
leftButton.classList.add("disabled")

const cardsPerPage = 3;

const totalCards =
    document.querySelectorAll(".project-card").length;


const totalPages =
    Math.ceil(totalCards / cardsPerPage);


function updateCarousel() {

    const cardWidth = 420; // Adjust based on your CSS

    const movement =  leftCard * cardWidth + leftCard * 30; // 30px is the gap between cards

    carousel.style.transform =
        `translateX(-${movement}px)`;

    updateArrows();

}


rightButton.addEventListener("click", function() {

    if (leftCard < totalCards - 2) {

        leftCard+=2;

        updateCarousel();

    }

});


leftButton.addEventListener("click", function() {

    if (leftCard > 0) {

        leftCard-=2;

        updateCarousel();

    }

});

function updateArrows() {

    if (leftCard === 0) {
        leftButton.classList.add("disabled");
    } else {
        leftButton.classList.remove("disabled");
    }


    if (leftCard > totalCards - 3) {
        rightButton.classList.add("disabled");
    } else {
        rightButton.classList.remove("disabled");
    }

}