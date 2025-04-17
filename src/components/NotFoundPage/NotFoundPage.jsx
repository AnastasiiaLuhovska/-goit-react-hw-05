import {Link} from "react-router-dom";

const NotFoundPage = ({error}) => {
    return (
        <>
            <h2>
               Something went wrong
            </h2>
            <p>Error: {error}</p>
            <Link to={'/'}>Home Page</Link>
        </>
    );
};

export default NotFoundPage;