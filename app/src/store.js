import { createStore } from 'redux';
import superhero_reducer from './ducks/superheroes';

const initialState = {
    heroes: [{ name: 'Wonder Woman', power: 'immortal'}, { name: 'Cat Woman', power: 'Cat like reflexes'}, { name: 'Super Girl', power: 'x-ray vision'}]
}


export default createStore(superhero_reducer, initialState);