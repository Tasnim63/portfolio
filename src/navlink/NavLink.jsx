import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const NavLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{ borderBottom: match ? "2px solid #5BE4A8 " : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
};

export default NavLink;
