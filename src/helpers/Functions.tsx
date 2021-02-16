import { Genres, InitialState, Subgenres } from "./Interfaces";
import { ADD_NEW, BACK_TO_GEN, BACK_TO_NEW_SUB, BACK_TO_SUB, NEXT_STAGE, UPDATE_NEW_SUB } from "./Reducers";


export const nextStage =(stage:string, next=true, addNew = false)=>{
    switch (stage) {
        case "Genres":            
            return next ? "Subgenres" : "Genres";
        case "Subgenres":
            const nextRoute = addNew ? "New subgenre" : "Information";
            return next ? nextRoute : "Genres";
        case "New subgenre":            
            return next ? "Information" : "Subgenres";
        case "Information":  
            const prevRoute = addNew ? "New subgenre" : "Subgenres";
            return next ? "Submit" : prevRoute;    
        default:
            return "Genres";
    };
};

const pathfinder = (stage:string)=>{
    let path = stage.toLowerCase();
    if(path ==="new subgenre"){
        path = "new-subgenre";
    }
    if(path ==="genres"){
        path = "";
    }
    return `/${path}`;
};

const goBack = (stage:string, dispatch: React.Dispatch<any>) =>{
    
    switch (stage) {
        case "Genres":            
            dispatch({
                type: BACK_TO_GEN,
                payload : {
                    genID: null,
                    genState : null,
                    newState : false,
                    stage,
                    subID : null
                }
            });
            break;
        case "Subgenres":
            dispatch({
                type: BACK_TO_SUB,
                payload : {                    
                    newState : false,
                    stage,
                    subID : null
                }
            });
            break;
        case "New subgenre":
            dispatch({
                type: BACK_TO_NEW_SUB,
                payload : {                 
                    stage                 
                }
            });
            break;
    
        default:
            dispatch({
                type: BACK_TO_GEN,
                payload : {
                    genID: null,
                    genState : null,
                    newState : false,
                    stage,
                    subID : null
                }
            });
            break;
    }
};

export const footerBtnClick =(
        selectedID : number | null, 
        setLinkTo : React.Dispatch<React.SetStateAction<string | null>>,
        dispatch: React.Dispatch<any>,
        stage:string, 
        addNew = false,
        next=true
    )=>{    
    if(selectedID && next){  
        const newStage = nextStage(stage, next, addNew);
        const path = pathfinder(newStage);
        setLinkTo(path);
        dispatch({type:NEXT_STAGE, payload:{stage:newStage}});
    }
    if(!next){
        const newStage = nextStage(stage, next, addNew);
        const path = pathfinder(newStage);
        setLinkTo(path);
        goBack(newStage, dispatch);
    }
};

export const footerValues = (stage:string ) =>{
    const newSubBool = stage === "New subgenre";
    const infoBool = stage === "Information";
    const formID = infoBool ? "informationForm" : "newSubgenForm";
    const btnAtr = infoBool || newSubBool ? { form : formID} : null;   
    const btnTxt = infoBool ? "Add" : "Next";
    return {btnTxt, btnAtr, infoBool, newSubBool};
};

export const findSub =(genId:number, genres:Genres[])=> genres.find(element => element.id === genId);


export const addNewFun = (genre : Genres | null, dispatch: React.Dispatch<any>) =>{
    let addNewID = 0;
    if(genre){
        addNewID = genre.id*100 + genre.subgenres.length+1;
        dispatch({
            type:ADD_NEW,
            payload:{
                subID:addNewID,
                newState:true
            }
        });
    }
};

export const updateGenreState = (subgenres : Subgenres, state: InitialState, dispatch:React.Dispatch<any>) =>{
    const {genState} = state;    
    if(genState){
        const newSubgenres = [...genState.subgenres, subgenres];
        dispatch({type:UPDATE_NEW_SUB, payload:{
            subgenres : newSubgenres
        }});
    }   
}

export const updateGenres = (state:InitialState)=>{    
    state.genres.forEach(element =>{
        if(element.id === state.genState?.id){
            element.subgenres = [...state.genState.subgenres];
        }
    });
};

export const removeSub =(state : InitialState)=>{    
    const id = state.subID;
    if(state.genState){
        const subgenres = state.genState.subgenres;
        state.genState.subgenres = subgenres.filter(elment => elment.id !== id);
        updateGenres(state);        
    }
};

export const headerNav = ({stage, newState}: InitialState) =>{
    const genresBool = stage === "Genres";
    const subgenreBool = stage === "Subgenres";
    const newSubgenreBool = stage === "New subgenre";
    const informationBool = stage === "Information";
    let threeTxt = "...";
    let threeActive = false;
    const two = informationBool || newSubgenreBool;
    let fourTxt = two && newState ? "Information": "...";
    let fourActive = informationBool && newState;
    if(newSubgenreBool && newState){
        threeTxt = "Add new subgenre";
        threeActive = true;
    }else if(informationBool && !newState){
        threeTxt = "Information";
        threeActive = true;
    }

    const hideObjcOne = genresBool || subgenreBool;
    let hideObjcTwo = true;
    if(!hideObjcOne && newState){
        hideObjcTwo = false;
    }

    return {genresBool, subgenreBool, threeTxt, fourTxt, threeActive, fourActive, hideObjcOne, hideObjcTwo};
}

