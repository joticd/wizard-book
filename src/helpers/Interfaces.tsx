
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
