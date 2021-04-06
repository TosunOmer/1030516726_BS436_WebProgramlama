import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk</p>
                <p>tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.</p>
                <div className="action">
                    <Link className="play" to={"/game"}>Oyna</Link>
                </div>
            </div>
        );
    }
}

export default Home;