import exp from "constants";

export interface Character{
    name: string
    status: string
    image: string
    species: string

}

export interface Response{
    results: Array<Character>
}