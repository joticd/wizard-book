import React from 'react';
import { SelectedSub, Subgenres } from '../helpers/Interfaces';
import { ADD_SUBGEN_ID } from '../helpers/Reducers';
import '../style/Genre.scss';
type Props = {
    subgenProp: Subgenres,
    dispatch: React.Dispatch<any>,
    subSelected : SelectedSub,
    setSubSelected : React.Dispatch<React.SetStateAction<SelectedSub>>
}

const SubgenreCom:React.FC<Props> = ({subgenProp, dispatch, subSelected, setSubSelected}) => {
    const selected = subSelected.id === subgenProp.id && !subSelected.addNext;
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className={`genre ${selected ? "genre-active" : ""}`} 
                
                onClick={()=>{
                    setSubSelected({id:subgenProp.id, addNext:false})
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
