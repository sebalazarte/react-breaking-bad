import { Character } from "./BreackingBadResponse";

export interface CharacterState {
    characters: Character[];
    isLoading: boolean;
}

export interface CharacterContextProps {
    state: CharacterState,
    setCharacters: (list: Character[]) => void
}