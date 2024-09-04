document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hämta inmatningsvärden
    const name = document.getElementById('name').value;
    const poster = document.getElementById('poster').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Skapa en ny recension
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    reviewItem.innerHTML = `
        <h3>${poster} - Betyg: ${rating}</h3>
        <p>${comment}</p>
        <span>- ${name}</span>
    `;

    // Lägg till recensionen i listan
    document.getElementById('reviewList').appendChild(reviewItem);

    // Rensa formuläret
    document.getElementById('reviewForm').reset();
});
