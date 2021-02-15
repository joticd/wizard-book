import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { footerBtnClick } from '../helpers/Functions';
import { InitialState } from '../helpers/Interfaces';
import '../style/Footer.scss';

type Props ={
    stage : string,
    selectedID : number | null,
    addNewState : boolean,
    state : InitialState,
    dispatch: React.Dispatch<any>
};

const Footer:React.FC<Props> = ({stage, selectedID, addNewState, state, dispatch}) => {

    const btnAtr = stage === "Information" ? {form : "informationForm", type : "submit"} : null;
    console.log("44444444444",stage, btnAtr)
    let history = useHistory();
    const [linkTo, setLinkTo] = useState<string|null>(null);
    useEffect(() => {
        if(linkTo){
            history.push(linkTo);
        }        
    }, [linkTo]);
    return (
        <footer>
            <div className="d-flex justify-content-end navigation">
                <div 
                    className="nav back"
                    onClick={()=>{footerBtnClick(selectedID, setLinkTo, dispatch, stage)}}                
                ><i className="fas fa-chevron-left"></i> Back</div>
                <div 
                    className="nav next" {...btnAtr}
                    onClick={()=>{footerBtnClick(selectedID, setLinkTo, dispatch, stage, addNewState)}}
                >Next</div>
            </div>
            
        </footer>
    )
}

export default Footer;
