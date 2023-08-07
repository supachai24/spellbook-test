import React, { Fragment } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Fragment>
            <div className="container m-auto" style={{ height: '100vh' }}>
                <div className="grid lg:grid-cols-1 grid-cols-1 gap-4" style={{ textAlign: 'center', height: '100%' }}>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <p>404 Not Found.</p>
                            <hr className="my-4" />
                            <Link to={'/products'}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};

export default NotFound;