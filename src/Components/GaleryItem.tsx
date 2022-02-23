import {Character} from "../model";


interface GaleryItemProps{
    character: Character
}

function GaleryItem(props: GaleryItemProps){

    return (
        <div className={'item'}>
            <h1 className={'itemHeader'}>Name: { props.character.name }</h1>
            <div><img src={props.character.imageUrl} alt="Pic of Item" className={'itemPic'}/></div>
            <div>
                <ul>
                    <li>Status: { props.character.status }</li>
                    <li>Spezies: {props.character.species }</li>
                </ul>
            </div>
        </div>
    )

}

export default GaleryItem