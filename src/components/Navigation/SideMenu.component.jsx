import React from 'react';
import { Link } from 'react-router-dom';
import { SideMenuData } from './SideMenuData';
import './SideMenu.styles.scss';


const SideMenu = () => {
    return (
        <>
            <nav className='sidenav rounded'>
                <ul className='nav-menu-items'>
                    {SideMenuData.map((item, index) => {
                        return(
                            <li 
                            key={index} 
                            className={item.cName}
                            id={window.location.pathname === item.path ? 'active' : ''}
                            >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default SideMenu
