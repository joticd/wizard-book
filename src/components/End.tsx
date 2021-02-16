

import React from 'react';
import '../style/End.scss';

const End = () => {
    return (
        <section>
            <div className="d-flex flex-column end">
                <div className="d-flex end-icons">
                    <h1><i className="fas fa-check"></i></h1>
                    <h3>Book added successfully</h3>
                </div>
                <button 
                    className="end-btn"
                    // onClick={()=>{footerBtnClick(selectedID, setLinkTo, dispatch, stage, newState, false)}}                
                >Add another book</button>
            </div>
            
        </section>
    )
}

export default End;
