import {useEffect, useState} from "react";
import {Character} from "../model";
import {useParams} from "react-router-dom";
import GalleryItem from "./GalleryItem";

export default function CharacterDetail(){

    const[character, setCharacter] = useState({} as Character)

    const params = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
            .then(response => response.json())
            .then((character: Character) => setCharacter(character))
    }, [params.characterId])

    return (
        <div>
            {character.id && <GalleryItem character={character}/>}
        </div>
    )
}