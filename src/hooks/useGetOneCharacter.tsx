import { useEffect, useState } from "react";
import { breakingBadApi } from "../api/breakingBadApi";
import { Character } from "../interfaces/BreackingBadResponse";

interface State {
    data?: Character,
    isLoading: boolean;
}

export const useGetOneCharacter = (id: String) => {
    const [state, setState] = useState<State>({
        data: undefined,
        isLoading: true
    });

    useEffect(() => {
        breakingBadApi().get<Character[]>(`/characters/${id}`)
          .then(resp => setState({
            data: resp.data[0],
            isLoading: false
          }));
      }, [id])

      return state;
   
}