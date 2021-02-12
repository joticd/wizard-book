import React from 'react'
import { Genres } from '../helpers/Interfaces'
import GenreCom from './GenreCom'

type Props = {
    genres: Genres[],
    setGenreID: React.Dispatch<React.SetStateAction<number | null>>
}

const GenresCom:React.FC<Props> = ({genres, setGenreID}) => {    
    const singleGenre = genres.map(element =>{
        return <GenreCom key={element.id} genreProp={element} setGenreID={setGenreID}/>
    })
    return (
        <div className="row">
            {singleGenre}
        </div>
    )
}

export default GenresCom;
