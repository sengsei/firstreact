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

  const [pages, setPages] = useState('https://rickandmortyapi.com/api/character')
  const[errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character1')
            .then(response => {
                if (response.status !== 200){
                    throw new Error()
                }
               return response.json()
            })
            .then((responseBody: ResponseBody) => responseBody.results)
            .then(filteredCharacters => setItems(filteredCharacters))
            .catch(e => setErrorMessage("URL gibt es nicht"))


    }, [])

    useState(() => {
      fetch('https://rickandmortyapi.com/api/character')
          .then(response => response.json())
          .then((responseBody: ResponseBody) => responseBody.results)
          .then(filteredCharacters => setItems(filteredCharacters))

    })

    const getPages = () => {

        fetch(`$pages`)
            .then (response => {

                return response.json();
            })
            
    }

    return (
        <div className={'galleryBox'}>
            <div>
                {errorMessage}
            </div>
           <div>
               <button onClick={() => getPages() }>prev</button>
               <button>fwd</button>
           </div>

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

