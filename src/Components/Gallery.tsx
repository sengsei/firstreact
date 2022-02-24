import "./Gallery.css"
import {useEffect, useState} from "react";
import {Character, Response as ResponseBody} from "../model";
import GalleryItem from "./GalleryItem";


export default function Gallery(){
    const [searchName, setSearchName] = useState('');

  /*
         with static json
         const items = data.results
        .filter(value => value.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))
        .map(e => ({name: e.name, imageUrl: e.image, status: e.status, species: e.species}))
        .map(e => <GalleryItem key={e.name} character={e} />)
 */
  const [items, setItems] = useState([] as Array<Character>)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then((responseBody: ResponseBody) => responseBody.results)
            .then(filteredCharacters => setItems(filteredCharacters))


    }, [])

    return (
        <div className={'galleryBox'}>
            <div className={'inputBox'}>
                <input type='text' placeholder='search name:' value={searchName}  onChange={ev => setSearchName(ev.target.value)}/>
            </div>
            {items
                .filter(character => character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))
                .map(character => <GalleryItem key={character.name} character={character} />)
            }

        </div>
    )
}

