import { Helmet } from "react-helmet"

const NotFound = () => {
    return (
        <>
        <Helmet>
        <meta name="description" content="Oops! The page could not found" />
        <title>404 Not Found!</title>
      </Helmet>
        <div className="notFound" style={{marginTop:"100px"}}>
            <div className="notFound_container">
                <h1 className="notFound_container_h1">404</h1>
                <p className="notFound_container_p">Oops! The page could not found</p>
            </div>
        </div>
        </>
    )
}

export default NotFound
