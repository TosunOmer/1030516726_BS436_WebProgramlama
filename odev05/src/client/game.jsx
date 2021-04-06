import React, {Component} from 'react';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winnerIndex: Math.floor(Math.random()*3),
            card: ["images/blue.png","images/blue.png","images/blue.png"],
            counter: 0,
            gameOver: false,
            health: 2,
            victory: false,
            defeat: false
        }
    }
    componentDidMount() {
        this.newGame();
    }

    checkWinner = (index) => {
        const { card, winnerIndex, counter, gameOver } = this.state;

        if(!gameOver){
            const revealCard = [...card];

            if(winnerIndex===index){
                revealCard[index] = "images/boncuk.jpg";
                this.setState({
                    victory: true
                })
            }else {
                revealCard[index] = "images/kangal.jpg";
                if(counter===1){
                    this.setState({
                        defeat: true
                    })
                }
            }
            this.setState({
                card:revealCard,
                counter: this.state.counter+1,
                health: this.state.health-1,
            });
        }
    }

    newGame = () => {
        this.setState({
            winnerIndex: Math.floor(Math.random()*3),
            card: ["images/blue.png","images/blue.png","images/blue.png"],
            counter: 0,
            gameOver: false,
            health: 2,
            victory: false,
            defeat: false
        })
    }

    render(){
        const { card, health, victory, defeat, winnerIndex } = this.state;

        if(victory){
            return(
                <div className="game-result">
                    <h2>Kazandın!</h2>
                    <img className="kart" src={card[winnerIndex]} />
                    <button className="play new-game-button" onClick={this.newGame}>
                        Yeni Oyun
                    </button>
                </div>
            )
        }

        if(defeat){
            return(
                <div className="game-result">
                    <h2>Kaybettin :( Kedi'yi seçmen gerekiyordu.</h2>
                    <img className="kart" src="images/kangal.jpg" />
                    <img className="kart" src="images/kangal.jpg" />
                    <div className="action">
                        <button className="play new-game-button" onClick={this.newGame}>
                            Yeni Oyun
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <p>{health} hakkınız kaldı.</p>
                <img className="kart" src={card[0]} onClick={()=>{this.checkWinner(0)}}/>
                <img className="kart" src={card[1]} onClick={()=>{this.checkWinner(1)}}/>
                <img className="kart" src={card[2]} onClick={()=>{this.checkWinner(2)}}/>
            </div>
        );
    }
}

