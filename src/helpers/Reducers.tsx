import { InitialState } from "./Interfaces";

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
            return state;
    }

}
