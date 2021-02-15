import React, { useReducer } from 'react';
import { FormValue } from '../helpers/Interfaces';
import { ADD_AUTHOR, ADD_BIRTHDAY, ADD_BOOKTITLE, ADD_COMMENT, ADD_EDITION, ADD_EDITIONLANG, ADD_FORMAT, ADD_ISBN, ADD_NUMBERPAGES, ADD_PUBLISHER, reducerValue } from '../helpers/Reducers';
import '../style/Information.scss';

type Props = {
    setSubmitValue : React.Dispatch<React.SetStateAction<FormValue | null>>
}

const Information:React.FC<Props> = ({setSubmitValue}) => {

    const initialFormValue = {
        bookTitle: "",
        author: "",
        isbn: "",
        publisher: "Isengard",
        birthday: "",
        numberPages: "",
        format: "B4",
        edition: "",
        editionLang: "Srpski",
        comment : ""
    };

    const [stateValue, dispatchValue] = useReducer(reducerValue, initialFormValue);      

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log("AAAAAAAAAAAAAAAA", stateValue)
        setSubmitValue(stateValue);
       
    };

    return (
        <section>
            <div className="form-container">
                <form onSubmit={onFormSubmit} id={"informationForm"}>
                    <label htmlFor="bookTitle">Book title</label><br />
                    <input type="text" className="full-width" id="bookTitle" name="bookTitle" placeholder="Book title"
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_BOOKTITLE, payload:{value:e.target.value}})
                            }
                        } 
                        value={stateValue.bookTitle}
                    /><br />

                    <label htmlFor="author">Author</label><br/>
                    <input type="text" className="full-width" id="author" name="author" placeholder="Author"
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_AUTHOR, payload:{value:e.target.value}})
                            }
                        } 
                        value={stateValue.author}
                    /><br />

                    <label htmlFor="isbn">ISBN</label><br />
                    <input type="text" className="full-width" id="isbn" name="isbn" placeholder="ISBN"
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_ISBN, payload:{value:e.target.value}})
                            }
                        } 
                        value={stateValue.isbn}
                    /><br />

                    <label htmlFor="publisher">Publisher</label><br />
                    <select name="publisher" id="publisher" className="full-width"  
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_PUBLISHER, payload:{value:e.target.value}})
                            }
                        } 
                        value={stateValue.publisher}
                    
                    >
                        <option value="Isengard">Isengard</option>
                        <option value="Hogwarts">Hogwarts</option>
                        <option value="The Citadel">The Citadel</option>
                    </select>

                    <label htmlFor="birthday">Date published</label><br />
                    <input className="small" type="date" id="birthday" name="birthday" 
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_BIRTHDAY, payload:{value:e.target.value}})
                            }                        
                        } 
                    /><br />

                    <label htmlFor="numberPages">Number of pages</label><br />
                    <input type="text" className="smaller" id="numberPages" name="numberPages" placeholder="Number of pages" 
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_NUMBERPAGES, payload:{value:e.target.value}})
                            }
                        } 
                        value={stateValue.numberPages}
                    /><br />

                    <label htmlFor="format">Format</label><br />
                    <select name="format" id="format" className="small"
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_FORMAT, payload:{value:e.target.value}})
                            }
                        } 
                        value={stateValue.format}                    
                    >
                        <option value="B5">B5</option>
                        <option value="B4">B4</option>
                        <option value="A4">A4</option>
                    </select>

                    <div className="d-flex">
                        <div className="mr-1rem small">
                            <label htmlFor="edition">Edition</label><br />
                            <input type="text" className="full-width" id="edition" name="edition" placeholder="Edition" 
                                onChange={
                                    (e)=>{
                                        dispatchValue({type:ADD_EDITION, payload:{value:e.target.value}})
                                    }
                                }
                                value={stateValue.edition} 
                            />
                        </div>
                        <div className="small">
                            <label htmlFor="editionLang">Edition language</label><br />
                            <select name="editionLang" id="editionLang" className="full-width" 
                                onChange={
                                    (e)=>{
                                        dispatchValue({type:ADD_EDITIONLANG, payload:{value:e.target.value}})
                                    }
                                } 
                                value={stateValue.editionLang}  
                            >
                                <option value="Srpski">Srpski</option>
                                <option value="English">English</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="comment">Desctription</label><br />
                    <textarea className="full-width" rows={8} cols={100} id="comment" name="comment" placeholder="Type the description..." 
                        onChange={
                            (e)=>{
                                dispatchValue({type:ADD_COMMENT, payload:{value:e.target.value}})
                            }
                        } 
                        value={stateValue.comment}  
                    ></textarea>
                </form>
            </div>

        </section>
    )
}

export default Information;
