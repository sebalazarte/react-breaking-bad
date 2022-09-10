import { ChangeEvent, useState } from 'react';
import { ListCharters } from '../components/ListCharters';
import { useGetCharters } from '../hooks/useGetCharters';

export const HomeScreen = () => {

  const [searchText, setSearchText] = useState<string>('');

  const handlerOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  const { data, isLoading } = useGetCharters(searchText);

  {
    isLoading && (<span>loading...</span>);
  }

  return (
    <div>
      <input type='text' placeholder='name...' className='form-control mb-4' onChange={handlerOnchange} />
      <ListCharters characters={data} />
    </div>

  )
}
