import { Character } from '../interfaces/BreackingBadResponse';
import { Link } from 'react-router-dom'

interface Props {
    character: Character;
}

export const CardCharacter = ({ character }: Props) => {
    const { name, img, occupation, char_id } = character;
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <p className="card-text">
                    Ocupation:
                </p>
                <ul>
                    {
                        occupation.map(i => (<li key={i}>{i}</li>))
                    }
                </ul>
                <Link to={`/detail/${char_id}`} className="btn btn-primary">Go detail</Link>
            </div>
        </div>
    )
}
