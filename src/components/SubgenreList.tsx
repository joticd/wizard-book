import React from 'react';
import { Genres, Subgenres } from '../helpers/Interfaces';
import AddNew from './AddNew';
import SubgenreCom from './SubgenreCom';

type Props = {
    genre : Genres | null,
    dispatch: React.Dispatch<any>
}

const getSubgenre = (sugenprop:Subgenres[], dispatch: React.Dispatch<any>) =>{
    return sugenprop.map(element =>{
        return <SubgenreCom subgenProp={element} dispatch={dispatch} key={element.id}/>
    });
}

const SubgenreList:React.FC<Props> = ({genre, dispatch}) => {
    console.log(genre)
    let subgen : JSX.Element[] | null = null;  
    if(genre){
        subgen = getSubgenre(genre.subgenres, dispatch);
    }
  
    return (
        <section>            
            <div className="row">
                {subgen}
                <AddNew genre={genre} dispatch={dispatch}/>
            </div>
        </section>
    )
}

export default SubgenreList;
