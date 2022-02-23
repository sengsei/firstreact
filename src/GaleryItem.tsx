import {Character} from "./model";

interface GaleryItemProps{
    character: Character
}

function GaleryItem(props: GaleryItemProps){

    return (
        <div>
            <div><img src={props.character.imageUrl} /></div>
            <div>
                <ul>
                    <li>Name: { props.character.name }</li>
                    <li>Status: { props.character.status }</li>
                </ul>
            </div>
        </div>
    )

}

export default GaleryItem