const clickArea = document.querySelector('.inner-div'); // Corrected to target the inner-div for click detection
const clickAmount = document.querySelector('.clickcount'); // Corrected class selector

let likeCount = 0;

const showHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');
    heart.style.position = 'absolute';
    heart.style.top = `${e.clientY - e.target.getBoundingClientRect().top}px`;
    heart.style.left = `${e.clientX - e.target.getBoundingClientRect().left}px`;
    document.querySelector('.inner-div').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 800);
};

clickArea.addEventListener('dblclick', (e) => {
    clickAmount.textContent = ++likeCount; // Corrected to textContent
    showHeart(e);
});
