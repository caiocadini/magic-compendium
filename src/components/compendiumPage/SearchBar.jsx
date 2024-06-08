import { Search } from "lucide-react"

function SearchBar() {
    return (
        <div className="flex shadow-lg rounded-xl border w-4/12 p-2 items-center h-12"> {/* Set an explicit height */}
            <div className="flex-grow h-full">
                <input className="w-full h-full p-1 rounded focus:outline-none" placeholder="Search Card..."/>
            </div>
        </div>
    )
}

export default SearchBar
