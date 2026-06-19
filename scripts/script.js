console.log("Portfolio loaded successfully!");

const carousel = document.querySelector(".project-carousel");

const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let currentPage = 0;


const cardsPerPage = 3;

const totalCards =
    document.querySelectorAll(".project-card").length;


const totalPages =
    Math.ceil(totalCards / cardsPerPage);


function updateCarousel() {

    const cardWidth = 350; // Adjust based on your CSS

    const movement = currentPage * cardWidth * cardsPerPage;

    carousel.style.transform =
        `translateX(-${movement}px)`;

    updateArrows();

}


rightButton.addEventListener("click", function() {

    if (currentPage < totalPages - 1) {

        currentPage++;

        updateCarousel();

    }

});


leftButton.addEventListener("click", function() {

    if (currentPage > 0) {

        currentPage--;

        updateCarousel();

    }

});

function updateArrows() {

    if (currentPage === 0) {
        leftButton.classList.add("disabled");
    } else {
        leftButton.classList.remove("disabled");
    }


    if (currentPage === totalPages - 1) {
        rightButton.classList.add("disabled");
    } else {
        rightButton.classList.remove("disabled");
    }

}