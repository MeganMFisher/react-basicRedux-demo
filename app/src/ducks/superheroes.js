const ADD_HERO = 'ADD_HERO';

export default function reducer(state, action) {
    switch(action.type) {
        case ADD_HERO:
        return {
            heros: Object.assign({}, state.heroes, action.payload )
        }
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