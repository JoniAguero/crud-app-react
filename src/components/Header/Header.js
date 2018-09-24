import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="row top">
            <header className="col-12">
                <Link to={'/'}>
                    <h1 className="text-center"> React Blog </h1>
                </Link>
            </header>
        </div>
    )
}

export default Header;
