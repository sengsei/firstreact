import "./Gallery.css"
import {useEffect, useState} from "react";
import {Character, Info, ResponseBody} from "../model";
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
  const[errorMessage, setErrorMessage] = useState('')
  const[info, setInfo] = useState({} as Info)
  const[page, setPage] = useState(localStorage.getItem('currentPage') ?? '1')




    useEffect(() => {
        setErrorMessage('')
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (!response.ok){
                    throw new Error('URL gibt es nicht')
                }
               return response.json()
            })
            .then((responseBody: ResponseBody) => responseBody.results)
            .then(filteredCharacters => setItems(filteredCharacters))
            .catch(e => setErrorMessage(e.message))


    }, [])



        useState(() => {
      fetch('https://rickandmortyapi.com/api/character')
          .then(response => response.json())
          .then((responseBody: ResponseBody) => responseBody.results)
          .then(filteredCharacters => setItems(filteredCharacters))

    })

    const fetchData = (url: string) => {
        fetch(url)
            .then(response => response.json())
            .then((responseBody: ResponseBody) => {
                setInfo(responseBody.info);
                setItems(responseBody.results);
                setSearchName('');
            });
    };

    useEffect(() => {
        localStorage.setItem('currentPage', page)
        fetchData(`https://rickandmortyapi.com/api/character?page=${page}`)
    } , [page]);

    const prev = () => {
        setPage(oldPage => `${parseInt(oldPage) - 1}`)

    }
    const next = () => {
        setPage(oldPage => `${parseInt(oldPage) + 1}`)


    }

    return (
        <div className={'galleryBox'}>
           <div>
               { info.prev && <button className={"button is-dark"} onClick={() => prev()}>Zurück</button> }
               { info.next && <button className={"button is-dark"} onClick={() => next()}>Weiter</button> }

           </div>

            <div className={'inputBox'}>
                <input className={"input"} data-testid={"search-field"} type='text' placeholder='search name:' value={searchName}  onChange={ev => setSearchName(ev.target.value)}/>
            </div>
            {
                errorMessage ? <h1>{errorMessage}</h1>
                :
                items
                .filter(character => character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))
                    .map(character => <div data-testid={"gallery-item"}><GalleryItem key={character.name} character={character} /></div>)
            }


        </div>
    )
}

