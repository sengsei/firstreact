import {render, waitFor, screen, fireEvent} from "@testing-library/react";
import Gallery from "./Gallery";

test('that response is handled', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                info:{},
                results:[
                    {
                        name: "Alice",
                        status: "Alive",
                        image: "url",
                        species: "Alien"
                    },
                    {
                        name: "Bob",
                        status: "Dead",
                        image: "url",
                        species: "Human"
                    }

                ]
            })
        } as Response)
    })
    render(<Gallery/>)

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(2)
    })

    const out = screen.getByTestId('search-field')
    fireEvent.change(out, {target: {value: 'Bob'}})

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(1)
    })
})