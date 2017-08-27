const ADD_HERO = 'ADD_HERO';
const REMOVE_HERO = 'REMOVE_HERO';
const UPDATE_HERO = 'UPDATE_HERO';

export default function reducer(state, action) {
    switch(action.type) {
        case ADD_HERO:
            return Object.assign({}, state, {heroes: [...state.heroes, action.payload]});

        case REMOVE_HERO:
            return Object.assign({}, state, {heroes: state.heroes.filter((hero, i) => i !== action.payload)});

        case UPDATE_HERO:
        
            return Object.assign({}, state, {heroes: state.heroes.map((hero, i) => {
                if(action.payload.index === i) {
                    hero.name = action.payload.name;
                    hero.power = action.payload.power
                    return hero
                }
                return hero
              })
            })

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

export function updateHero(name, power, index) {
    return {
      type: UPDATE_HERO,
      payload: {
        name: name, 
        power: power,
        index: index
      }
    }
  }