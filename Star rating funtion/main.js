document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    let currentRating = 0;

    // Add event listeners to each star
    stars.forEach((star,inde ) => {
        star.addEventListener('mouseover', function () {
            highlightStars(inde + 1);  // Highlight stars up to the one being hovered over
        });

        star.addEventListener('mouseout', function () {
            highlightStars(currentRating);  // Reset highlight based on current rating when mouse leaves
        });

        star.addEventListener('click', function () {
            currentRating = inde + 1;  // Set the current rating to the clicked star's value
            updateRating(currentRating);  // Update the rating display
        });
    });

    function highlightStars(rating) {
        // Highlight stars up to the specified rating
        stars.forEach((star, inde) => {
            if (inde < rating) {
                star.classList.add('hovered');
            } else {
                star.classList.remove('hovered');
            }
        });
    }

    function updateRating(rating) {
        // Update the displayed rating and highlight the stars up to the rating
        document.getElementById('rating-value').textContent = `Rating: ${rating}`;
        stars.forEach((star, inde) => {
            if (inde < rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});
