import React from 'react';
import { Genres } from '../helpers/Interfaces';
import { ADD_GEN_ID } from '../helpers/Reducers';
import '../style/Genre.scss';

type Props = {
    genreProp : Genres,
    dispatch: React.Dispatch<any>
}

const GenreCom:React.FC<Props> = ({genreProp, dispatch}) => { 
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="genre" 
                onClick={()=>{
                    dispatch({
                        type:ADD_GEN_ID, 
                        payload:{
                            genID:genreProp.id,
                            genState : genreProp
                        }})
                    }
                }>
                {genreProp.name}
            </div>
        </div>
    )
}

export default GenreCom;
