import React from 'react';
import { Subgenres } from '../helpers/Interfaces';

type Props = {
    subgenProp: Subgenres
}

const SubgenreCom:React.FC<Props> = ({subgenProp}) => {
    console.log(subgenProp)
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="cards" >
                {subgenProp.name}
            </div>
        </div>
    )
}

export default SubgenreCom;
