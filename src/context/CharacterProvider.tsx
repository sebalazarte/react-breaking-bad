import { useContext, useReducer } from "react"
import { CharacterContext } from './CharacterContext';
import { characterReducer } from './characterReducer';
import { CharacterState } from '../interfaces/ContextInterfaces';
import { Character } from '../interfaces/BreackingBadResponse';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const initialState: CharacterState = {
    characters: [],
    isLoading: true
}

export const CharacterProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(characterReducer, initialState);

    const setCharacters = (list: Character[]) => {
        dispatch({ type: 'setCharacters', payload: list });
    }

    return (
        <CharacterContext.Provider value={{
            state,
            setCharacters,
        }}>
            {children}
        </CharacterContext.Provider>

    )
}
