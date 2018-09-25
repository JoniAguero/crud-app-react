import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="row top text-center">
            <Link to={'/posts'} className="col-6">
                <span> All Post </span>
            </Link>
            <Link to={'/new'} className="col-6"> 
                <span> New Post </span>
            </Link>
        </nav>
    )
}

export default Navigation;
