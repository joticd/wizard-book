

export interface Subgenres {
    id: number,
    name: string,
    isDescriptionRequired: boolean
}

export interface Genres {
    id: number,
    name: string,
    subgenres: Subgenres[]
}

export interface InitialState {
    genres:Genres[] ,
    genState:Genres | null,
    genID: number | null,
    subID:number | null,
    newState:boolean,
    stage:string
}

export interface FormValue {
    bookTitle: string,
    author: string,
    isbn: string,
    publisher: string,
    birthday: string,
    numberPages: string,
    format: string,
    edition: string,
    editionLang: string,
    comment : string
};

export interface SelectedSub {
    id:number | null,
    addNext: boolean
}