import SearchBar from "../components/compendiumPage/SearchBar";
import CardGrid from "../components/compendiumPage/CardGrid";

function CompendiumPage(){
    return(
       <div className="flex flex-col items-center py-16 gap-16">
            <SearchBar/>
            <div className="flex">
                <CardGrid/>
                
            </div>
       </div>
    );
}
export default CompendiumPage