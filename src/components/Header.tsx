import React from 'react';
import '../style/Header.scss';

const Header:React.FC = () => {
    return (
        <header>
            <div className="title">
                <p>Add book - New book</p>
            </div>

            <div className="progress">
                <div className="progress-single active"><h3>1</h3><p>Genre</p></div>
                <div className="line"></div>
                <div className="progress-single"><h3>2</h3><p>Subgenre</p></div>
                <div className="line"></div>
                <div className="progress-single"><h3>...</h3><p></p></div>
            </div>
        </header>
    )
}

export default Header;
