import {BookOpen, CircleHelp, Sun} from 'lucide-react'

import FeatureCard from "./FeatureCard";

function FeatureSection(){

    return(
        <div className="flex flex-col gap-8">
            <div className="self-center">
                <div className="flex flex-col">
                    <h1 className="font-bold">JOIN THE BATTLE</h1>
                    <p className="self-center">FEATURES</p>
                </div>
                
            </div>
            <div className="flex justify-between px-40 ">
                <FeatureCard icon={<BookOpen/>} icontext="Explore a vast world of possibilities" quote="Don't just have an idea - have all of them" quoteauthor="Enter the infinite" buttontext="Check the archive"/>
                <FeatureCard icon={<CircleHelp/>} icontext="Check random cards" quote="Care to make this more interesting? Ha! Like you have a choice.!" quoteauthor="Jaya Ballard, Task Mage" buttontext="Check random card"/>
                <FeatureCard icon={<Sun/>} icontext="Check the card of the day" quote="Each year that passes rings you inwardly with memory and might..." quoteauthor="Doran, the siege tower" buttontext="Check the daily card"/>
            </div>
            
        </div>
    );

}

export default FeatureSection