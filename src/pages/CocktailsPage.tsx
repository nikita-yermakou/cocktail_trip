import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cocktails from "../components/cocktails/Cocktails"
import { useAppDispatch, useAppSelector } from "../components/common/hooks";
import LettersList from "../components/lettersList/lettersList"
import { LettersContainer, LinkLetter } from "../components/lettersList/lettersList.styles";
import Loader from "../components/loader/loader";
import { startCocktailsByLetters } from "../redux/slices/cocktailsByLettersSlice";

const CocktailsPage: React.FC = () => {
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const {letter} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startCocktailsByLetters(`search.php?f=${letter}`));
    }, [letter]);

    const cocktailsByLetters = useAppSelector((state) => state.cocktailsByLetters.cocktailsByLetters);
    const loading = useAppSelector((state) => state.cocktailsByLetters.isLoading);

    return(
        <>  
            {loading ?
            <Loader /> :
            <>
                <LettersContainer>
                    {alphabet.split('')?.map((item) => (
                        <LinkLetter key={item.toLowerCase()} to={`/cocktails/${item.toLowerCase()}`}>
                            {item}
                        </LinkLetter>
                    ))}
                </LettersContainer>
                <Cocktails store={cocktailsByLetters} title={`Cocktails by letter ${letter?.toUpperCase()}`}/>
            </>
            }
        </>
    )
}

export default CocktailsPage;