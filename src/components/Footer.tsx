import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { footerBtnClick } from '../helpers/Functions';

type Props ={
    stage : string, 
    setStage : React.Dispatch<React.SetStateAction<string>>,
    selectedID : number | null,
    addNewState : boolean
}



const Footer:React.FC<Props> = ({stage, setStage, selectedID, addNewState}) => {
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
                onClick={()=>{footerBtnClick(selectedID, setLinkTo, setStage, stage)}}
            >Back</button>

            <button
                className="btn btn-outline-success my-2 my-lg-0"
                type="button" 
                onClick={()=>{footerBtnClick(selectedID, setLinkTo, setStage, stage, addNewState)}}
            >next</button>
        </div>
    )
}

export default Footer;
