import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

const MenuHeader = () => {
    let location = useLocation().pathname;
    location = location === '/' ? 'home' : location.substr(1);
    let [activeItem, setActiveItem] = useState(location);
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return (
        <div>
            <Menu color='brown' size="massive" pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/"
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/login"
                    />
                    <Menu.Item
                        name='register'
                        active={activeItem === 'register'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/register"
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default MenuHeader;