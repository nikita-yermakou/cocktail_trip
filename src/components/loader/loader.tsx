import { ThreeCircles } from "react-loader-spinner";
import { LoaderContainer } from "./loader.styles";
import { useTheme } from '../../components/header/switcher/context'

const Loader: React.FC = () => {
    const currentContext = useTheme();

    return(
        <LoaderContainer>
            <ThreeCircles
                height="200"
                width="200"
                color={currentContext.theme.color.titleText}
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </LoaderContainer>
    )
}

export default Loader;