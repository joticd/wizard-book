import React from 'react'
import { Genres } from '../helpers/Interfaces'
import GenreCom from './GenreCom'

type Props = {
    genres: Genres[],
    dispatch: React.Dispatch<any>
}

const GenreList:React.FC<Props> = ({genres, dispatch}) => { 
    const singleGenre = genres.map(element =>{   
        return <GenreCom key={element.id} genreProp={element} dispatch={dispatch} />
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
