import React from 'react';
import Reducer, {addHero, removeHero} from '../ducks/superheroes';


test('should be defined', () => {
    expect(Reducer).toBeDefined();
});

test('addHero should return an object', () => {
    expect(addHero('Wonder Woman')).toEqual( {"payload": "Wonder Woman", "type": "ADD_HERO"})
})

test('removeHero should return an object', () => {
    expect(removeHero(1)).toEqual({"payload": 1, "type": "REMOVE_HERO"})
})