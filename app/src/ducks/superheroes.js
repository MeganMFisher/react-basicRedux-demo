const ADD_HERO = 'ADD_HERO';
const REMOVE_HERO = 'REMOVE_HERO';

const initialState = {
    heroes: [{ name: 'Wonder Woman', power: 'immortal'}, { name: 'Cat Woman', power: 'Cat like reflexes'}, { name: 'Super Girl', power: 'x-ray vision'}]
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_HERO:
            return Object.assign({}, state, {heroes: [...state.heroes, action.payload]});
            
        case REMOVE_HERO:
            return Object.assign({}, state, {heroes: state.heroes.filter((hero, i) => i !== action.payload)});

        default:
            return state;
    }
}


export function addHero(hero) {
    return {
        type: ADD_HERO,
        payload: hero
    }
}

export function removeHero(i) {
    return {
        type: REMOVE_HERO,
        payload: i
    }
}