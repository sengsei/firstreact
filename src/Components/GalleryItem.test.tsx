import {render, screen} from "@testing-library/react";
import GalleryItem from "./GalleryItem";

test('that componend is rendered correctly', () => {
    // given
    const character = {
        id: 777,
        name: 'Einstein',
        status: 'Dead',
        species: 'Human',
        image: 'http://imageurl'
    }

    // when
    render(<GalleryItem character={character}/>)

    //then
    const imageTag = screen.getByTestId('character-image') as HTMLImageElement
    expect(imageTag.src).toEqual('http://imageurl/')
    expect(screen.getByTestId('character-name').textContent).toEqual('Name: Einstein')
    expect(screen.getByTestId('character-status').textContent).toEqual('Status: Dead')
})