import { useEffect } from "react";
import { useAppDispatch } from "../common/hooks";
import { LettersContainer, LinkLetter } from "./lettersList.styles";

const LettersList: React.FC = () => {

    return(
        <LettersContainer>
            <LinkLetter></LinkLetter>
        </LettersContainer>
    )
}

export default LettersList;