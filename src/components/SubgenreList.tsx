import React from 'react';
import { Genres, Subgenres } from '../helpers/Interfaces';
import SubgenreCom from './SubgenreCom';

type Props = {
    genre : Genres | null
}

const getSubgenre = (sugenprop:Subgenres[]) =>{
    return sugenprop.map(element =>{
        return <SubgenreCom subgenProp={element} key={element.id}/>
    });
}

const SubgenreList:React.FC<Props> = ({genre}) => {
    console.log(genre)
    let subgen : JSX.Element[] | null = null;
    if(genre){
        subgen = getSubgenre(genre.subgenres);
    }
  
    return (
        <div className="row">
            {subgen}
        </div>
    )
}

export default SubgenreList;
