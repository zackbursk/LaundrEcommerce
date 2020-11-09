import React from 'react';
import { Link } from 'react-router-dom';

export const NoMatch = () => {
    return (
        <div>
            <main className="main">
            <div className="header-1">
                <p style={{textAlign:"center"}}>
                    Error 404
                </p>
            </div>
            <div className="header-2">
                <p style={{textAlign:"center"}}>
                    Whoops.  Looks like this page doesn't exist.
                </p>
            </div>
            <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
            </p>
            </main>
        </div>
    );
}

export default NoMatch;