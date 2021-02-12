
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
}

export const footerBtnClick =(selectedID : number | null, stage:string, next=true, addNew = false)=>{
    if(selectedID){
        // const history = useHistory();
        // console.log("AAAAAAAAAAAAAA")
        // const newStage = nextStage(stage, next, addNew);
        // const path = pathfinder(newStage);
        // console.log(path);
        // <Redirect to="/subgenres" />

    }
}