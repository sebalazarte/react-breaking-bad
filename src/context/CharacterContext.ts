import { createContext } from "react";
import { CharacterContextProps } from "../interfaces/ContextInterfaces";

export const CharacterContext = createContext<CharacterContextProps>(
  {} as CharacterContextProps
);
