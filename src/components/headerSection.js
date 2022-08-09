import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import logo from '../assets/logo.png';
import searchLogo from '../assets/search-icon.png';

const Headersection = styled.div`
    display: flex;
    padding: 8px 70px;
    .logoImg {
        width: 105px;
        height: 42px;
        margin-right: 477px;
    }
    div {
        font-family: Poppins, sans-serif;
        font-size: 18px;
        font-weight: 500px;
        width: 694px;
        height: 48px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    & span:first-child {
        color: #15e4d0;
    }
    span:hover {
        color: #15e4d0;
        transition: 0.4s;
    }
`;

function HeaderSection() {
    return (
        <Headersection>
            <img className="logoImg" src={logo} alt="" />
            <div>
                <span>Home</span>
                <span>Health</span>
                <span>Medicine</span>
                <span>News</span>
                <span>Client</span>
                <span>Contact Us</span>
                <img className="searchLogo" src={searchLogo} alt="" />
            </div>
        </Headersection>
    );
}

export default HeaderSection;
