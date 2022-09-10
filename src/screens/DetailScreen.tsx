import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectCast } from '../features/characters/castSlice';

export const DetailScreen = () => {

  const { id } = useParams();
  const { characters } = useAppSelector(selectCast);
  const navigate = useNavigate();
  const character = characters.find(i => i.char_id == Number(id));

  return (
    <div>
      <h2>{character?.name}</h2>
      <img src={character?.img} />
      <br />
      <button onClick={() => navigate(-1)} className="btn btn-primary mt-2">Go back</button>
    </div>
  )
}

