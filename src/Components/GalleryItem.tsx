import {Character} from "../model";
import "./GalleryItem.css"


interface GalleryItemProps{
    character: Character
}

function GalleryItem(props: GalleryItemProps){

    return (
        <div className={'item'}>
            <h1 data-testid={"character-name"} className={'itemHeader'}>Name: { props.character.name }</h1>
            <div><img data-testid={"character-image"} src={props.character.image} alt="Pic of Item" className={'itemPic'}/></div>
            <div>
                <ul>
                    <li data-testid={"character-status"}>Status: { props.character.status }</li>
                    <li data-testid={"character-species"}>Spezies: {props.character.species }</li>
                </ul>
            </div>
        </div>
    )

}

export default GalleryItem