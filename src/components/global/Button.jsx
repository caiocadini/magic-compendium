import PropTypes from "prop-types"

Button.PropTypes = {
    text: PropTypes.string,
}

function Button(props){
    return(
        <div className="text-white">
            <button className="bg-black rounded-lg px-4 py-2">{props.text}</button>
        </div>
    );
}
export default Button