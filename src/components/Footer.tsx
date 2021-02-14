import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { footerBtnClick } from '../helpers/Functions';
import { InitialState } from '../helpers/Interfaces';

type Props ={
    stage : string,
    selectedID : number | null,
    addNewState : boolean,
    state : InitialState,
    dispatch: React.Dispatch<any>
}



const Footer:React.FC<Props> = ({stage, selectedID, addNewState, state, dispatch}) => {
    let history = useHistory();
    const [linkTo, setLinkTo] = useState<string|null>(null);
    useEffect(() => {
        if(linkTo){
            history.push(linkTo);
        }        
    }, [linkTo]);
    return (
        <div className="row">
            <button
                className="btn btn-outline-success my-2 my-lg-0"
                type="button" 
                onClick={()=>{footerBtnClick(selectedID, setLinkTo, dispatch, stage)}}
            >Back</button>

            <button
                className="btn btn-outline-success my-2 my-lg-0"
                type="button" 
                onClick={()=>{footerBtnClick(selectedID, setLinkTo, dispatch, stage, addNewState)}}
            >next</button>
        </div>
    )
}

export default Footer;
