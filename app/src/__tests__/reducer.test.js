import React from 'react';
import reducer, {addHero, removeHero} from '../ducks/superheroes';


test('should be defined', () => {
    expect(reducer).toBeDefined();
});

test('reducer ADD_HERO case to return correct state', () => {

    const initialState = {
        heroes: [{ name: 'Wonder Woman', power: 'immortal'}, { name: 'Cat Woman', power: 'Cat like reflexes'}, { name: 'Super Girl', power: 'x-ray vision'}]
    }

    expect(reducer(initialState, {"payload": { name: 'Wonder Woman', power: 'immortal'}, "type": "ADD_HERO"})).toEqual({"heroes": [{"name": "Wonder Woman", "power": "immortal"}, {"name": "Cat Woman", "power": "Cat like reflexes"}, {"name": "Super Girl", "power": "x-ray vision"}, {"name": "Wonder Woman", "power": "immortal"}]})
})


test('addHero should return an object', () => {
    expect(addHero({ name: 'Wonder Woman', power: 'immortal'})).toEqual( {"payload": { name: 'Wonder Woman', power: 'immortal'}, "type": "ADD_HERO"})
})

test('removeHero should return an object', () => {
    expect(removeHero(1)).toEqual({"payload": 1, "type": "REMOVE_HERO"})
})

