
import React from 'react';
import { addNewFun } from '../helpers/Functions';
import { Genres, SelectedSub } from '../helpers/Interfaces';

type Props = {
    genre : Genres | null,
    dispatch: React.Dispatch<any>,
    subSelected : SelectedSub,
    setSubSelected : React.Dispatch<React.SetStateAction<SelectedSub>>
}

const AddNew:React.FC<Props> = ({genre, dispatch, subSelected, setSubSelected}) => {
    const selected = !subSelected.id && subSelected.addNext;
    let addNewID = 0;
    if(genre){
        addNewID = genre.id*100 + genre.subgenres.length+1;
    }
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className={`genre ${selected ? "genre-active" : ""}`} 
             onClick={()=>{
                    setSubSelected({id:null, addNext:true})
                    addNewFun(genre, dispatch) 
                }
            }>
                ADD NEW
            </div>
        </div>
    )
}

export default AddNew;
