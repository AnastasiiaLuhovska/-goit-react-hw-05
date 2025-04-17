const NotFoundPage = ({error}) => {
    return (
        <>
            <h2>
               Something went wrong
            </h2>
            <p>Error: {error}</p>
        </>
    );
};

export default NotFoundPage;