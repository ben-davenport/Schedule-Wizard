import React from 'react';
import { Link } from 'react-router-dom';

function MobileSplash(props){
    return(
        <button 
            className="center email-login" 
            onClick={()=>props.changeMenuContent('active')}>
        </button>
    )
}
export default MobileSplash;