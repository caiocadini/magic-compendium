import Button from '../global/Button';

import "./icon.css"

function FeatureCard(props){

    return(
        <div className="flex flex-col justify-between gap-2 p-4 max-w-60 rounded-3xl border shadow-xl">
            <div className="flex gap-6">
                {props.icon}
                <p className='self-center'>{props.icontext} </p>
            </div>
            <div className='flex flex-col p-4'> 
                <p className='font-bold'>"{props.quote}"</p>
                <p className='font-bold self-end'>-{props.quoteauthor}</p>
            </div>
            <div className='self-center'>
                <Button text={props.buttontext}/>
            </div>
        </div>
    );
}

export default FeatureCard  