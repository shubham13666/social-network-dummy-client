import React, { useState } from 'react'
import { Container, Menu, Sticky } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

const MenuHeader = () => {
    let location = useLocation().pathname;
    location = location === '/' ? 'home' : location.substr(1);
    let [activeItem, setActiveItem] = useState(location);
    const handleItemClick = (e, { name }) => setActiveItem(name);
    return (
        <Sticky>
            <Menu style={{ backgroundColor: "white" }} color='brown' size="massive" pointing secondary>
                <Container>
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
                </Container>
            </Menu>
        </Sticky>
    )
}

export default MenuHeader;