import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { footerBtnClick, footerValues } from '../helpers/Functions';
import { InitialState } from '../helpers/Interfaces';
import '../style/Footer.scss';

type Props ={
    selectedID : number | null,
    state : InitialState,
    dispatch: React.Dispatch<any>
};

const Footer:React.FC<Props> = ({selectedID, state, dispatch}) => {
    
    const {stage, newState} = state;
    const {btnTxt, btnAtr, infoBool, newSubBool} = footerValues(stage);
    
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
                <button 
                    className="nav back"
                    onClick={()=>{footerBtnClick(selectedID, setLinkTo, dispatch, stage, newState, false)}}                
                ><i className="fas fa-chevron-left"></i> Back</button>

                
                <button 
                    className="nav next" 
                    {...btnAtr}
                    type={infoBool || newSubBool ? "submit" : "button"}
                    onClick={
                        ()=>{
                            if(infoBool || newSubBool){
                                return
                            } else{
                                footerBtnClick(selectedID, setLinkTo, dispatch, stage, newState)
                            }
                        }
                    }
                >{btnTxt}</button>
            </div>
        </footer>
    )
}

export default Footer;
