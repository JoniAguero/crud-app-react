import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="row top">
            <Link to={'/posts'} className="col-6">
                <h2 className="text-center"> All Post </h2>
            </Link>
            <Link to={'/new'} className="col-6"> 
                <h2 className="text-center"> New Post </h2>
            </Link>
        </nav>
    )
}

export default Navigation;
