import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { 
    Container,
    Wrapper,
    LogoContainer, 
    Menu, MenuItem, 
    MenuItemLink,
    MobileIcon } from './Navbar.elements'

import { 
    FaHandshake,
    FaBriefcase,
    FaQuestionCircle,
    FaMap,
    FaBars,
    FaTimes,
    FaUserAlt,
 } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div>
            <Container>
                <Wrapper>
                <IconContext.Provider value={{ style: {fontSize: "2em"}}}>
                    <LogoContainer>
                    <Link className="logo" to="/">
                        <img className="img-navbar no-margin centrar-texto" src={require('../../img/LOGO_COOPERATIVA.png')} alt="Logotipo"/>
                    </Link>

                    </LogoContainer>
                    <MobileIcon onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <Menu open = {showMobileMenu}>
                        <MenuItem>
                            <Link to="/cooperativa">
                                <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                    <div>
                                        <FaHandshake/>
                                        Nuestra Cooperativa
                                    </div>
                                </MenuItemLink>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link to="/servicios">
                                <MenuItemLink  onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                    <div>
                                        <FaUserAlt/>
                                        Servicios
                                    </div>
                                </MenuItemLink>
                            </Link>
                        </MenuItem>

                        {/*<MenuItem>
                            <Link to="/asociarse">
                                <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                    <div>
                                        <FaBriefcase/>
                                        ¿Como Asociarse?
                                    </div>
                                </MenuItemLink>
                            </Link>
                        </MenuItem>*/}

                        <MenuItem>
                            <Link to="/contacto">
                                <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                    <div>
                                        <FaMap/>
                                        Contacto
                                    </div>
                                </MenuItemLink>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link to="/pqrfs">
                                <MenuItemLink onClick = {() => setShowMobileMenu(!showMobileMenu)}>
                                    <div>
                                        <FaQuestionCircle/>
                                        PQRFS
                                    </div>
                                </MenuItemLink>
                            </Link>
                        </MenuItem>
                    </Menu>
                    </IconContext.Provider>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar;