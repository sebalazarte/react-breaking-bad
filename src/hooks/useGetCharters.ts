import { useEffect, useState } from "react";
import { breakingBadApi } from "../api/breakingBadApi";
import { Character } from "../interfaces/BreackingBadResponse";

interface State {
    data: Character[],
    isLoading: boolean;
}

export const useGetCharters = (name: string) => {
    const [state, setState] = useState<State>({
        data: [],
        isLoading: true
    });

    useEffect(() => {
        breakingBadApi().get<Character[]>(`/characters`, {
            params: {
                name
            }
        })
          .then(resp => setState({
            data: resp.data,
            isLoading: false
          }));
      }, [name])

      return state;
}