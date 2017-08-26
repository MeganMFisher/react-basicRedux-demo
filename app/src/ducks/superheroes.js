const ADD_HERO = 'ADD_HERO';

export default function reducer(state, action) {
    switch(action.type) {
        case ADD_HERO:
        const hero = Object.assign({}, action.payload)
        return {
            heroes: [...state.heroes, hero]
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