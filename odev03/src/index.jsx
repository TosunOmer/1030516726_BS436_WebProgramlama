import React from "react";
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        var imagesArray = [];
        imagesArray[0] = 'images/kangal.jpg';
        imagesArray[1] = 'images/boncuk.jpg';

        let imageIds = ['img0', 'img1' , 'img2'];
        let winnerId;
        let map = {};
        let gameOver = false;
        let can = 2;

        winnerId = Math.floor(Math.random() * 3);
        map[imageIds[winnerId]] = imagesArray[1];
        imageIds.splice(winnerId, 1);

        for (let element of imageIds) {
            map[element] = imagesArray[0];
        }

        imageIds = ['img0', 'img1' , 'img2']

        checkWinner = (img) => {
            if (!gameOver) {
                img.src = map[img.id];

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
    }

    render() {
        return(
            <div>
                <img id="img0" className="kart" src="images/blue.png" onClick="KediBul.checkWinner(this)">
                    <img id="img1" className="kart" src="images/blue.png" onClick="KediBul.checkWinner(this)">
                        <img id="img2" className="kart" src="images/blue.png" onClick="KediBul.checkWinner(this)">

                <div className="mesaj">
                    <p id="alanId">Kedi kartini bulmak icin uzerine tiklamalisin.</p>
                    <p id="kazandiId" style="display: none">Kazandın!!! Tebrik Ederiz :) Yeni bir oyun oynamak
                        istersen <a href=".."><span className="link">buraya</span></a> tiklayablirsin.</p>
                    <p id="yenildiId" style="display: none">Kaybettin :( Yeni bir oyun oynamak istersen <a
                        href=".."><span className="link">buraya</span></a> tiklayablirsin.</p>

                </div>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));


