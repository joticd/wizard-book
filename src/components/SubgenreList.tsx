import React, { useState } from 'react';
import { Genres, SelectedSub, Subgenres } from '../helpers/Interfaces';
import AddNew from './AddNew';
import SubgenreCom from './SubgenreCom';

type Props = {
    genre : Genres | null,
    dispatch: React.Dispatch<any>
}

const getSubgenre = (sugenprop:Subgenres[], dispatch: React.Dispatch<any>, subSelected : SelectedSub, setSubSelected : React.Dispatch<React.SetStateAction<SelectedSub>>) =>{
    return sugenprop.map(element =>{
        return <SubgenreCom subgenProp={element} dispatch={dispatch} key={element.id} subSelected={subSelected} setSubSelected={setSubSelected}/>
    });
}

const SubgenreList:React.FC<Props> = ({genre, dispatch}) => {
    const [subSelected, setSubSelected] = useState<SelectedSub>({id:null, addNext:false});
    let subgen : JSX.Element[] | null = null;  
    if(genre){
        subgen = getSubgenre(genre.subgenres, dispatch, subSelected, setSubSelected);
    }
  
    return (
        <section>            
            <div className="row">
                {subgen}
                <AddNew genre={genre} dispatch={dispatch} subSelected={subSelected} setSubSelected={setSubSelected}/>
            </div>
        </section>
    )
}

export default SubgenreList;
