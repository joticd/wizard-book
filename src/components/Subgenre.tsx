import React from 'react';

type Props = {
    genreID : number | null
}

const Subgenre:React.FC<Props> = ({genreID}) => {
    console.log(genreID)
    return (
        <div className="row">
            sub
        </div>
    )
}

export default Subgenre;
