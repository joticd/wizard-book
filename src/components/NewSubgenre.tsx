import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { footerBtnClick, updateGenreState } from '../helpers/Functions';
import { InitialState, Subgenres } from '../helpers/Interfaces';
import '../style/NewSubgenre.scss';

type Props = {
    state : InitialState
    dispatch : React.Dispatch<any>
}

const NewSubgenre:React.FC<Props> = ({state, dispatch}) => {
    const initValue = {
        name : "",
        isDescriptionRequired : false
    };

    let history = useHistory();
    const [linkToNext, setLinkToNext] = useState<string|null>(null);
    useEffect(() => {
        if(linkToNext){
            history.push(linkToNext);
        }        
    }, [linkToNext]);

    const [addNewVal, setAddNewVal] = useState(initValue);    

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if(state.subID) {
            const subgenres : Subgenres = {
                id : state.subID,
                name : addNewVal.name,
                isDescriptionRequired : addNewVal.isDescriptionRequired
            };
            updateGenreState(subgenres, state, dispatch);
            footerBtnClick(state.subID, setLinkToNext, dispatch, state.stage, state.newState);
        }        
    };

    return (
        <section>
            <div className="form-container">
                <form onSubmit={onFormSubmit} id={"newSubgenForm"}>
                    <input type="text" className="full-width" id="subName" name="subName" placeholder="Subgenre name"
                    onChange={(e)=>{setAddNewVal({...addNewVal, name:e.target.value})}}
                    value={addNewVal.name}
                    /><br />
                    <div className="d-flex justify-content-start form-container-checkboc" >                
                        <input name="descript" id="descript" type="checkbox"
                        onChange={(e)=>{setAddNewVal({...addNewVal, isDescriptionRequired:!addNewVal.isDescriptionRequired})}}
                        checked={addNewVal.isDescriptionRequired}
                        />
                        <span>Description is required for this subgenre</span>
        
                    </div>
                </form>
            </div>
        </section>
    )
}

export default NewSubgenre;
