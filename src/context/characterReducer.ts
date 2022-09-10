import { CharacterState } from '../interfaces/ContextInterfaces';
import { Character } from '../interfaces/BreackingBadResponse';


type Action= | {type: 'setCharacters', payload: Character[] };

export const characterReducer = (state: CharacterState, action: Action) => {
    switch (action.type) {
        case 'setCharacters':
            return {
                ...state,
                isLoading: false,
                characters: action.payload
            }
        default:
            return state;
    }
}