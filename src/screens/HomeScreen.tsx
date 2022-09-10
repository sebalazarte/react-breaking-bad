import { ChangeEvent, useState, useContext, useEffect, useRef, useLayoutEffect } from 'react';
import { ListCharters } from '../components/ListCharters';
import { useGetCharters } from '../hooks/useGetCharters';
import { CharacterContext } from '../context/CharacterContext';
import { breakingBadApi } from '../api/breakingBadApi';
import { Character } from '../interfaces/BreackingBadResponse';

export const HomeScreen = () => {

  const { state, setCharacters } = useContext(CharacterContext);

  breakingBadApi().get('characters').then(resp => {
    setCharacters(resp.data);
  })
  
  const [searchText, setSearchText] = useState<string>('');

  const handlerOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  {
    state.isLoading && (<span>loading...</span>);
  }

  return (
    <div>
      <input type='text' placeholder='name...' className='form-control mb-4' onChange={handlerOnchange} />
      <ListCharters characters={state.characters} />
    </div>

  )
}
