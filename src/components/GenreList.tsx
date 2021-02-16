import React, { useState } from 'react'
import { Genres } from '../helpers/Interfaces'
import GenreCom from './GenreCom'

type Props = {
    genres: Genres[],
    dispatch: React.Dispatch<any>
}

const GenreList:React.FC<Props> = ({genres, dispatch}) => { 
    const [selectedGen, setSelectedGen] = useState<number | null>(null);

    const singleGenre = genres.map(element =>{   
        return <GenreCom key={element.id} genreProp={element} dispatch={dispatch} selectedGen={selectedGen} setSelectedGen={setSelectedGen} />
    })
    return (
        <section>
            <div className="row">
                {singleGenre}
            </div>
        </section>
    )
}

export default GenreList;
