import Header from "./Header";
import Footer from "./Footer";

function Layout(props){
    return(
        <div className="flex flex-col justify-between min-h-screen gap-8">
            <div>
                <div className="sticky top-0 z-50 bg-white shadow-md">
                    <Header/>
            </div>
                { props.children } 
            </div>
                <Footer/>
            
        </div>
        

    );
}

export default Layout