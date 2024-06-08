import React from 'react';
import PanelImage from "../assets/images/FullPanelImage.png";
import Button from '../global/Button';

function TitleQuote(props) {
    return (
        <div className="flex flex-col w-96 text-white">
            <h1 className="font-bold text-center">“You. Poet. Be sure to write this down.”</h1>
            <h2 className="font-bold self-end text-center">-Fabled Hero</h2>
        </div>
    );
}

function HeroSection() {
    return (
        <div className="relative w-full h-128">
            <img className="w-full h-full object-cover brightness-50" src={PanelImage} alt="Panel Image" />
            <div className="absolute inset-0 flex items-center justify-center gap-56">
                <TitleQuote />
                <div className="flex w-96 text-white">
                    <p>
                        Explore different cards from the fascinating world of magic the gathering, check cards alike, explore our archive. And if you are unsure, 
                        check our Daily and random cards.
                    </p>
                </div>
            </div>
            <div className='absolute inset-x-0 bottom-36 flex flex-col items-center justify-center'>
                    <Button text="Explore more cards"/>
            </div>
           
        </div>
    );
}

export default HeroSection;
