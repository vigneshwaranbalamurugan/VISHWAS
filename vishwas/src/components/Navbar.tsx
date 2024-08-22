import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Navbars = () => {
    const navbarHeight = '54px';
    const fontSize = '18px';
    const navbarColor = '#262626';
    const log = localStorage.getItem('islog');

    const handleLogout = () =>{
        localStorage.clear();
        window.location.href='/login';
    };
    return (
        <Navbar
            style={{
                backgroundColor: navbarColor,
                height: navbarHeight,
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000 // Ensure it stays above other content
            }}
        >
            <NavbarContent>
                <NavbarBrand>
                    <p className="font-bold text-inherit" style={{ margin: 0, paddingLeft: '26px', fontSize, color: 'white' }}>
                        VISHWAS
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
               
                {log && (<NavbarItem>
                    <Link color="foreground" href="/market" style={{ fontSize, color: 'white' }}>
                        Market
                    </Link>
                </NavbarItem>)
                }
            </NavbarContent>
            {!log && (
                <NavbarContent justify="end" style={{ marginRight: '26px' }}>

                    <NavbarItem>
                        <Button
                            as={Link}
                            style={{ color: 'white', backgroundColor: '#82b440', borderRadius: '5px', height: 'auto', fontSize, padding: '7px 25px' }}
                            href="/login"
                            variant="flat"
                        >
                            Login
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="hidden sm:flex gap-4">
                        <Button
                            as={Link}
                            style={{ color: 'white', backgroundColor: '#82b440', borderRadius: '5px', height: 'auto', fontSize, padding: '5px 20px' }}
                            href="/signup"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>

                </NavbarContent>)}
            {log && <NavbarContent justify="end" style={{ marginRight: '26px' }}>
            <NavbarItem>
            <Button
              as={Link}
              style={{ color: 'white', backgroundColor: '#82b440', borderRadius: '5px', height: 'auto', fontSize, padding: '7px 25px' }}
              href="/contracts"
              variant="flat"
            >
              Contract
            </Button>
          </NavbarItem>

                <NavbarItem><a href='/profile'><p style={{color:'white'}}>Welcome Farmer</p></a>
                </NavbarItem>
                <NavbarItem>
                        <Button
                        onClick={handleLogout}
                            style={{ color: 'white', backgroundColor: '#82b440', borderRadius: '5px', height: 'auto', fontSize, padding: '7px 25px' }}
                            variant="flat"
                        >
                           Logout
                        </Button>
                    </NavbarItem>
            </NavbarContent>}
        </Navbar>
    );
};

export default Navbars;
