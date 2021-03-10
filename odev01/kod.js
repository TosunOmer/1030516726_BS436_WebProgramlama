imagesArray = [];
imagesArray[0] = 'images/kangal.jpg';
imagesArray[1] = 'images/boncuk.jpg';

let imageIds = ['img0', 'img1' , 'img2']; // Image idlerin bulundugu dizi.
let winnerId;
let state = {}; // Map
let gameOver = false;
let can = 2;

const checkWinner = (img) => { // Oyunun her bir tiklamada kazanilip kazanilmadigini kontrol eden fonksiyon.
    if (!gameOver) {
        img.src = state[img.id]; // Tiklanan resmi blue.jpg formatindan cikartip, gercekte ne oldugunu aciga cikaran islem.

        if (img.id === imageIds[winnerId]) { // Tiklanan resmin dogru olup olmadigini kontrol ediyoruz.
            let kazandi = document.getElementById('kazandiId');
            kazandi.style = ''; // Dogru olan ise mesaj kismini gorunur hale getiriyoruz.
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

const shuffleImages = () => {
    winnerId = Math.floor(Math.random() * 3); // 0'dan 3'e kadar rastgele sayi uretiyorum.

    state[imageIds[winnerId]] = imagesArray[1]; // Urettigim sayiyi ImageIds dizime index olarak yollayip, donen degeri state map'i icinde kullanarak image id'sini index olarak kullaniyorum. O indexteki eleman ise boncuk.jpg.

    imageIds.splice(winnerId, 1); // Urettigim sayinin indexinde bulunan id'yi siliyorum. Cunku o indexteki id boncuk.jpg resmi olacak. Geri kalan idler ise kangal.jpg.

    for (let element of imageIds) {
        state[element] = imagesArray[0]; // Geri kalan map elemanlarima kangal.jpg resmini atiyorum.
    }

    imageIds = ['img0', 'img1' , 'img2'] // Arrayimi yeniden olusturuyorum cunku yukarda silme isleminden sonra hata almamak icin.
}

// https://www.youtube.com/watch?v=u3L6gByQnrI