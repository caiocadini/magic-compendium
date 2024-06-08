import HeroSection from "../components/homePage/HeroSection";
import FeatureSection from "../components/homePage/FeatureSection";
import Layout from "../components/layout/Layout";

function HomePage(){
    return(
        <div className="flex flex-col gap-8">
            <HeroSection/>
            <FeatureSection/>
        </div>)
;
}

export default HomePage