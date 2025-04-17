
import {DotLoader} from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loader = ({isLoading}) => {
    return (
        <DotLoader
            color= '#ff0000'
            loading={isLoading}
            cssOverride={override}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Loader;