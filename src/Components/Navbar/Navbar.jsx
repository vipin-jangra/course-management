import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
import Search from './Searchbar'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../AppSlice";
function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    

    const handleClick = () => setClick((prev) => !prev)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerwidth < 960) {
            setButton(false)

        } else {
            setButton(true)
        }
    }

    // useEffect(() => {
    //     window.addEventListener('resize', showButton);

    //     return () => {
    //         window.removeEventListener('resize', showButton);
    //     };
    // }, []);

    // useEffect(() => {
    //     showButton();
    // }, []);

    

    return (
        <>
            <navbar className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" >CM</Link>
                </div>
                {user &&
                    <div className='SearchBar'>
                    <Search /> 
                    </div>
                }

                <div className='menu-icon' onClick={handleClick}>
                    <i className={ click? 'fas fa-times':'fas fa-bars'} />

                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>

                    </li>
                    
                    <li className='nav-item'>
                    { user &&
                        <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                            Dashboard
                        </Link>
                    }
                    </li>
                    
                    
                    <li className='nav-item'>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign-Up
                        </Link>

                    </li>
                </ul>
                { 
                    user && <Button buttonStyle='btn--outline' onclick={() => {
                        dispatch(logout())
                    }}>Logout</Button>}
            </navbar>
        </>
        )

}
export default Navbar