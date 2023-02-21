import { ThreeCircles } from "react-loader-spinner"
import { color } from "../common/styles"
import { LoaderContainer } from "./loader.styles"

const Loader: React.FC = () => {
    return(
        <LoaderContainer>
            <ThreeCircles
                height="200"
                width="200"
                color={color.headerBgLight}
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