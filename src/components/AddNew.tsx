
import React from 'react';
import { addNewFun } from '../helpers/Functions';
import { Genres } from '../helpers/Interfaces';

type Props = {
    genre : Genres | null,
    dispatch: React.Dispatch<any>
}

const AddNew:React.FC<Props> = ({genre, dispatch}) => {
    let addNewID = 0;
    if(genre){
        addNewID = genre.id*100 + genre.subgenres.length+1;
    }
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="cards" 
             onClick={()=>{addNewFun(genre, dispatch) }}>
                ADD NEW
            </div>
        </div>
    )
}

export default AddNew;
