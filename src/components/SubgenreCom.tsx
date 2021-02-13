import React from 'react';
import { Subgenres } from '../helpers/Interfaces';

type Props = {
    subgenProp: Subgenres,
    setSubgenreID : React.Dispatch<React.SetStateAction<number | null>>
}

const SubgenreCom:React.FC<Props> = ({subgenProp, setSubgenreID}) => {
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="cards" onClick={()=>{setSubgenreID(subgenProp.id)}}>
                {subgenProp.name}
            </div>
        </div>
    )
}

export default SubgenreCom;
