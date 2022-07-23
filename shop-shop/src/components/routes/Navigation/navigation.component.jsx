import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div classname= "navigation">
                <div className= "pg-title">Page Title</div>
                <Link className="logo-container" to= '/'>
                    <div className="logo" >LOGO</div>
                </Link>
                <div className="nav-links-container">
                    <Link classname="nav-link" to='/lifestyle'>LIFESTYLE</Link>
                    <Link className="nav-link" to= '/blog'>BLOG</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation