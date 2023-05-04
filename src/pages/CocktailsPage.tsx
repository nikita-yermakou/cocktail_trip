import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cocktails from "../components/cocktails/Cocktails"
import { useAppDispatch, useAppSelector } from "../components/common/hooks";
import { LettersContainer, LinkLetter } from "../components/lettersList/lettersList.styles";
import Loader from "../components/loader/loader";
import { startCocktailsByLetters } from "../redux/slices/cocktailsByLettersSlice";
import RecentlyViewed from "../components/ingredients/recentlyViewed/recentlyViewed";
import { getAuth } from "firebase/auth";

const CocktailsPage: React.FC = () => {
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const {letter} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        dispatch(startCocktailsByLetters(`search.php?f=${letter}`));
    }, [letter]);

    const cocktailsByLetters = useAppSelector((state) => state.cocktailsByLetters.cocktailsByLetters);
    const loading = useAppSelector((state) => state.cocktailsByLetters.isLoading);
    const {email} = useAppSelector(state => state.user);
    const previosly: any = localStorage.getItem('recentlyViewed');
    const recentlyViewed = JSON.parse(previosly);

    return(
        <>  
            {auth.currentUser?.email === email
            ? <>
                {loading 
                ? <Loader /> 
                : <>
                    <LettersContainer>
                        {alphabet.split('')?.map((item) => (
                            <LinkLetter key={item.toLowerCase()} to={`/cocktails/${item.toLowerCase()}`}>
                                {item}
                            </LinkLetter>
                        ))}
                    </LettersContainer>
                    <Cocktails store={cocktailsByLetters} title={`Cocktails by letter ${letter?.toUpperCase()}`}/>
                    {recentlyViewed && 
                        <RecentlyViewed store={recentlyViewed} title='Recently viewed cocktails'/>
                    }
                </>
                }
            </>
            : navigate('/signin')
            }
        </>
    )
}

export default CocktailsPage;