import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ListCharters } from '../components/ListCharters';
import { selectCast, getAllCastAsync, filter } from '../features/characters/castSlice';

export const HomeScreen = () => {

  const { filtered, isLoading } = useAppSelector(selectCast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCastAsync());
  }, [])

  const handlerOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(filter(event.target.value));
  }

  {
    isLoading && (<span>loading...</span>);
  }

  return (
    <div>
      <input type='text' placeholder='name...' className='form-control mb-4' onChange={handlerOnchange} />
      <ListCharters characters={filtered} />
    </div>

  )
}
