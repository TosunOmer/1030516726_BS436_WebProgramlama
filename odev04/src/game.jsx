import React, {Component} from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winnerIndex: Math.floor(Math.random()*3),
            status: undefined,
            card: ["images/blue.png","images/blue.png","images/blue.png"],
            counter: 0,
            gameOver: false
        }
    }

    checkWinner = (index) => {
        const { card, winnerIndex, counter, gameOver } = this.state;

        if(!gameOver){
            const revealCard = [...card];
            let status;

            if(winnerIndex===index){
                revealCard[index] = "images/boncuk.jpg";
                status = "Kazandınız :)"
            }else {
                revealCard[index] = "images/kangal.jpg";
                if(counter===1){
                    status = "Kaybettiniz :("
                }
            }
            this.setState({
                card:revealCard,
                counter: this.state.counter+1,
                status
            });

            if(status){
                this.setState({
                    gameOver: true
                })
            }

        }
    }

    newGame = () => {
        this.setState({
            winnerIndex: Math.floor(Math.random()*3),
            status: undefined,
            card: ["images/blue.png","images/blue.png","images/blue.png"],
            counter: 0,
            gameOver: false
        })
    }

    render(){
        const { card, status } = this.state;
        return (
            <div>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen
                    2. seçim hakkı tanınacaktır.</p>
                <img className="kart" src={card[0]} onClick={()=>{this.checkWinner(0)}}/>
                <img className="kart" src={card[1]} onClick={()=>{this.checkWinner(1)}}/>
                <img className="kart" src={card[2]} onClick={()=>{this.checkWinner(2)}}/>
                <div className="mesaj">
                    <p>{status?status:"Kedi kartını bulmak için kartın üzerine tıklamalısın."}</p>
                    {status && <p>
                        Yeni bir oyun oynamak istersen <span onClick={this.newGame} className='link'>buraya</span> tıklayabilirsin.
                    </p>}
                </div>
            </div>
        );
    }
}

