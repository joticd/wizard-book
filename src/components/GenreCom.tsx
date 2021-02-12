import React from 'react';
import { Genres } from '../helpers/Interfaces';
import '../style/Genre.scss';

type Props = {
    genreProp : Genres,
    setGenreID: React.Dispatch<React.SetStateAction<number | null>>
}

const GenreCom:React.FC<Props> = ({genreProp, setGenreID}) => {    
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="cards" onClick={()=>{setGenreID(genreProp.id)}}>
                {genreProp.name}
            </div>
        </div>
    )
}

export default GenreCom;
