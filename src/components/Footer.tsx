import React from 'react';
import { footerBtnClick } from '../helpers/Functions';

type Props ={
    stage : string, 
    setStage : React.Dispatch<React.SetStateAction<string>>,
    selectedID : number | null
}

const Footer:React.FC<Props> = ({stage, setStage, selectedID}) => {
    return (
        <div className="row">

            <button
                className="btn btn-outline-success my-2 my-lg-0"
                type="button" 
                onClick={()=>{footerBtnClick(selectedID, stage)}}
            >Back</button>

            <button
                className="btn btn-outline-success my-2 my-lg-0"
                type="button" 
                onClick={()=>{footerBtnClick(selectedID, stage)}}
            >next</button>
        </div>
    )
}

export default Footer;
