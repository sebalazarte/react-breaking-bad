import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneCharacter } from '../hooks/useGetOneCharacter';

export const DetailScreen = () => {

  const { id } = useParams();
  const { data: character, isLoading } = useGetOneCharacter(id!);
  const navigate = useNavigate();

  if (isLoading) {
    return (<h2>loading...</h2>)
  }

  return (
    <div>
      <h2>{character?.name}</h2>
      <img src={character?.img} />
      <br />
      <button onClick={() => navigate(-1)} className="btn btn-primary mt-2">Go back</button>
    </div>
  )
}

