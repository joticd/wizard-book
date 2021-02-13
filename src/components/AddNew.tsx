
import React from 'react';

type Props = {
    setaddNewState? : React.Dispatch<React.SetStateAction<boolean>>
}

const AddNew:React.FC<Props> = ({setaddNewState}) => {
    return (
        <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="cards"  onClick={()=>{if(setaddNewState) setaddNewState(true)}}>
                ADD NEW
            </div>
        </div>
    )
}

export default AddNew;
