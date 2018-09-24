import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="row top">
            <a className="col-6">
                <Link to={'/posts'}>
                    <h2 className="text-center"> All Post </h2>
                </Link>
            </a>
            <a className="col-6">
                <Link to={'/new'}>
                    <h2 className="text-center"> New Post </h2>
                </Link>
            </a>
        </nav>
    )
}

export default Navigation;
