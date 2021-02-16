import React from 'react';
import { headerNav } from '../helpers/Functions';
import { InitialState } from '../helpers/Interfaces';
import '../style/Header.scss';

type Props = {
    state : InitialState
}

const Header:React.FC<Props> = ({state}) => {
    const {genresBool, subgenreBool, threeTxt, fourTxt, threeActive, fourActive, hideObjcOne, hideObjcTwo} = headerNav(state);
    
    return (
        <header>
            <div className="title">
                <p>Add book - New book</p>
            </div>

            <div className="d-flex flex-row ustify-content-between progressbar">
                <div className={`progressbar-single ${genresBool ? "active" : ""}`}>
                    <h3>1</h3><p>Genre</p>
                </div>
                <div className="line"></div>
                <div className={`progressbar-single ${subgenreBool ? "active" : ""}`}>
                    <h3>2</h3><p>Subgenre</p>
                </div>
                <div className="line"></div>
                <div className={`progressbar-single ${threeActive ? "active" : ""}`}>
                    <h3>3</h3><p>{threeTxt}</p>
                </div>
                <div className={`line ${hideObjcTwo ? "hide" : ""}`}></div>
                <div className={`progressbar-single ${fourActive ? "active" : ""} ${hideObjcTwo ? "hide" : ""}`}>
                    <h3>4</h3><p>{fourTxt}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;
