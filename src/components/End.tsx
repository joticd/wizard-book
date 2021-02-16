

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RESET } from '../helpers/Reducers';
import '../style/End.scss';

type Props = {
    dispatch:React.Dispatch<any>
}
const End:React.FC<Props> = ({dispatch}) => {
    let history = useHistory();
    const [linkTo, setLinkTo] = useState<string|null>(null);
    useEffect(() => {
        if(linkTo){
            history.push(linkTo);
        }        
    }, [linkTo]);
    return (
        <section>
            <div className="d-flex flex-column end">
                <div className="d-flex end-icons">
                    <h1><i className="fas fa-check"></i></h1>
                    <h3>Book added successfully</h3>
                </div>
                <button 
                    className="end-btn"
                    onClick={()=>{
                        dispatch({type:RESET})
                        setLinkTo("/")
                    }}               
                >Add another book</button>
            </div>
            
        </section>
    )
}

export default End;
