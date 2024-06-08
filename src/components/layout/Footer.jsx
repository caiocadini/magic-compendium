import Logo from "../assets/Logo"
import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons"
function Footer(){
    return(
        <div>
            <div className="flex justify-center">
                <hr className="w-11/12 border-zinc-900"/> 
            </div>
            <div className="flex justify-between p-4 px-16">
                <Logo/>
                <div className="flex gap-2">
                    <SiGithub/>
                    <SiLinkedin/>
                </div>
            </div>

        </div>
        
    );
}

export default Footer