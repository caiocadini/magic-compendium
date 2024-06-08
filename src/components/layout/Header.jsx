import { Link } from "react-router-dom";

import Logo from "../assets/Logo";


function Header(){
    return(
        <header className="flex justify-between p-4 px-16 shadow-md items-center ">
            <Link to="/"><Logo/></Link>
            <div className="flex gap-6 items-center">
                <Link >Daily Card</Link>
                <Link to="/compendium">Compendium</Link>
                <Link>Random</Link>
                <Link>About</Link>
            </div>
        </header>
    );

}

export default Header