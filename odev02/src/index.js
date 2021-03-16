// https://www.youtube.com/watch?v=enHZcA2XPR8

var imagesArray = [];
imagesArray[0] = 'images/kangal.jpg';
imagesArray[1] = 'images/boncuk.jpg';

let imageIds = ['img0', 'img1' , 'img2'];
let winnerId;
let state = {};
let gameOver = false;
let can = 2;

export const checkWinner = (img) => {
    if (!gameOver) {
        img.src = state[img.id];

        if (img.id === imageIds[winnerId]) {
            let kazandi = document.getElementById('kazandiId');
            kazandi.style = '';
            gameOver = true;
        } else {
            can--;
        }

        if (can === 0) {
            let yenildi = document.getElementById('yenildiId');
            yenildi.style = '';
            gameOver = true;
        }
    }
}

export const shuffleImages = () => {
    winnerId = Math.floor(Math.random() * 3);

    state[imageIds[winnerId]] = imagesArray[1];

    imageIds.splice(winnerId, 1);

    for (let element of imageIds) {
        state[element] = imagesArray[0];
    }

    imageIds = ['img0', 'img1' , 'img2']
}