import { Character } from '../interfaces/BreackingBadResponse';
import { CardCharacter } from './CardCharacter';

interface Props {
    characters: Character[] | undefined;
}

export const ListCharters = ({ characters }: Props) => {

    return (
        <div className="row">
            {
                characters?.map((item) => (
                    <div className="col-4">
                        <CardCharacter key={item.char_id} character={item} />
                    </div>
                ))
            }
        </div>

    )
}
