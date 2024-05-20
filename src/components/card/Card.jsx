 
import Equilibrium from "/images/image-equilibrium.jpg";
import Ethereum from "/images/icon-ethereum.svg";
import Clock from "/images/icon-clock.svg";
import Avatar from "/images/image-avatar.png";

import "./card.css";

export default function Card() {
    return ( 
    <div className="container">
        <img src={Equilibrium} alt="equilibrium image" className="equilibrium" />
        <h1 className="title">Equilibrium #3429</h1>
        <p className="text">Our Equilibrium collection promotes balance and calm.</p>
        <div className="info-container">
            <div className="eth">
                <img src={Ethereum} alt="etherum icon" />
                <span>0.041 ETH</span>
            </div>
            <div className="clock">
                <img src={Clock} alt="clock icon" />
                <span>3 days left</span>
            </div>
        </div>
        <div className="avatar">
            <img src={Avatar} alt="avatar image" />
            <p>Creation of <span>Jules Wyvern</span></p>
        </div>
    </div>
    );
}