import data from '../rickAndMortyData.json';
import GaleryItem from "./GaleryItem";
import "./Galery.css"


export default function Galery(){
    const items = data.results
        .map(e => ({name: e.name, imageUrl: e.image, status: e.status, species: e.species}))
        .map(e => <GaleryItem key={e.name} character={e} />)

    return (
        <div className={'galeryBox'}>
            {items}
        </div>
    )
}

