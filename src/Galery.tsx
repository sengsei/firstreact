import data from './rickAndMortyData.json';
import GaleryItem from "./GaleryItem";

export default function Galery(){
    const items = data.results
        .map(e => {return {name: e.name, imageUrl: e.image, status: e.status}})
        .map(e => <GaleryItem key={e.name} character={e} />)

    return (
        <div>
            {items}
        </div>
    )
}