import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src='images/green-gallery.svg' />
            <NavMenu>
                <a>
                    <img src='images/palette.svg' />
                    <span>Palette</span>
                </a>
                <a>
                    <img src='images/fill.svg' />
                    <span>Colors</span>
                </a>
                <a>
                    <img src='images/broom.svg' />
                    <span>Clear</span>
                </a>
            </NavMenu>
            <UserImg src='images/user.svg' />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height : 70px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x : hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display:flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display:flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
    
        img {
            height: 20px;
            margin-right: 10px; 
        }
        
        span {
            font-size : 13px;
            letter-spacing: 1.42px;
            position: relative;
            text-transform: uppercase;
            font-weight: 300;

            &:after{
                content: "";
                height: 2px;
                background: #DCD9D4;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px; 
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
        height: 28px;
        width: 28px;
        border-radius: 50px;
        cursor: pointer;
`