import React from 'react';
import { Subgenres } from '../helpers/Interfaces';
import { ADD_SUBGEN_ID } from '../helpers/Reducers';
import '../style/Genre.scss';
type Props = {
    subgenProp: Subgenres,
    dispatch: React.Dispatch<any>
}

const SubgenreCom:React.FC<Props> = ({subgenProp, dispatch}) => {
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="genre" 
                onClick={()=>{
                    dispatch({type:ADD_SUBGEN_ID, payload:{
                        subID:subgenProp.id,
                        newState:false
                    }})
                }}>
                {subgenProp.name}
            </div>
        </div>
    )
}

export default SubgenreCom;
