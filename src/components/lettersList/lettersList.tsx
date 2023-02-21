import { useEffect } from "react";
import { useAppDispatch } from "../common/hooks";
import { LettersContainer, LinkLetter } from "./lettersList.styles";

const LettersList = () => {

    return(
        <LettersContainer>
            <LinkLetter></LinkLetter>
        </LettersContainer>
    )
}

export default LettersList;