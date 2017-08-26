import { createStore } from 'redux';
import superhero_reducer from './ducks/superheroes';




export default createStore(superhero_reducer);