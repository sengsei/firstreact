import {Character} from "../model";
import "./GalleryItem.css"
import {Link} from "react-router-dom";


interface GalleryItemProps {
    character: Character
}

function GalleryItem(props: GalleryItemProps) {

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <Link to={`${props.character.id}`}>
                        <img data-testid={"character-image"} src={props.character.image} alt="Pic of Item"
                             className={'itemPic'}/>
                    </Link>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p data-testid={"character-name"} className={'itemHeader'}>Name: {props.character.name}</p>
                        <p data-testid={"character-status"}>Status: {props.character.status}</p>
                        <p data-testid={"character-species"}>Spezies: {props.character.species}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default GalleryItem