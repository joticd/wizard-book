import { FormValue, InitialState } from "./Interfaces";

export const ADD_GEN_ID = 'ADD_GEN_ID';
export const ADD_SUBGEN_ID = 'ADD_SUBGEN_ID';
export const ADD_GEN = 'ADD_GEN';
export const NEXT_STAGE = 'NEXT_STAGE';
export const ADD_NEW = 'ADD_NEW';

export const reducer =(state:InitialState, action:any)=>{
    switch (action.type) {
        case ADD_GEN_ID:
            state.genID = action.payload.genID;
            state.genState = action.payload.genState;
            return {...state};
        case ADD_SUBGEN_ID:
            state.newState = action.payload.newState;
            state.subID = action.payload.subID;
            return {...state};
        case NEXT_STAGE:
            return {...state, stage : action.payload.stage};
        case ADD_NEW:
            state.newState = action.payload.newState;
            state.subID = action.payload.subID;
            return {...state};
        default:
            return {...state};
    }

};

export const ADD_BOOKTITLE = "ADD_BOOKTITLE";
export const ADD_AUTHOR = "ADD_AUTHOR";
export const ADD_ISBN = "ADD_ISBN";
export const ADD_PUBLISHER = "ADD_PUBLISHER";
export const ADD_BIRTHDAY = "ADD_BIRTHDAY";
export const ADD_NUMBERPAGES = "ADD_NUMBERPAGES";
export const ADD_FORMAT = "ADD_FORMAT";
export const ADD_EDITION = "ADD_EDITION";
export const ADD_EDITIONLANG = "ADD_EDITIONLANG";
export const ADD_COMMENT = "ADD_COMMENT";


export const reducerValue =(state:FormValue, action:any)=>{
    switch (action.type) {
        case ADD_BOOKTITLE:

            state.bookTitle = action.payload.value;
            console.log("DDDDDDDDDDDD", state)
            return {...state};
        case ADD_AUTHOR:
            state.author = action.payload.value;
            return {...state};
        case ADD_ISBN:
            state.isbn = action.payload.value;
            return {...state};
        case ADD_PUBLISHER:
            state.publisher = action.payload.value;
            return {...state};
        case ADD_BIRTHDAY:
            state.birthday = action.payload.value;
            return {...state};
        case ADD_NUMBERPAGES:
            state.numberPages = action.payload.value;
            return {...state};
        case ADD_FORMAT:
            state.format = action.payload.value;
            return {...state};
        case ADD_EDITION:
            state.edition = action.payload.value;
            return {...state};
        case ADD_EDITIONLANG:
            state.editionLang = action.payload.value;
            return {...state};
        case ADD_COMMENT:
            state.comment = action.payload.value;
            return {...state};

       
        default:
            return {...state};
    }

}
