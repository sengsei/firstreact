

export interface Character{
    id?: number
    name: string
    status: string
    image: string
    species: string
    gender?: string
    origin?: {name: string}
}

export interface Response{
    results: Array<Character>
}