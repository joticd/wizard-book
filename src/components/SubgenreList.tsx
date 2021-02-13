import React from 'react';
import { Genres, Subgenres } from '../helpers/Interfaces';
import SubgenreCom from './SubgenreCom';

type Props = {
    genre : Genres | null,
    setSubgenreID : React.Dispatch<React.SetStateAction<number | null>>
}

const getSubgenre = (sugenprop:Subgenres[], setSubgenreID : React.Dispatch<React.SetStateAction<number | null>>) =>{
    return sugenprop.map(element =>{
        return <SubgenreCom subgenProp={element} key={element.id} setSubgenreID={setSubgenreID}/>
    });
}

const SubgenreList:React.FC<Props> = ({genre, setSubgenreID}) => {
    console.log(genre)
    let subgen : JSX.Element[] | null = null;
    if(genre){
        subgen = getSubgenre(genre.subgenres, setSubgenreID);
    }
  
    return (
        <div className="row">
            {subgen}
        </div>
    )
}

export default SubgenreList;
