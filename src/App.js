import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';
import img4 from './assets/icon-1.png';
import img5 from './assets/knowledge-bg.png';
import img6 from './assets/play-icon.png';
import img7 from './assets/icon-2.png';
import HeaderSection from './components/headerSection';
import SliderSection from './components/sliderSection';

const fadeEffect = keyframes`
    0%{transform:translate(-50%,-50%) scale(1);opacity:1}
    100%{transform:translate(-50%,-50%) scale(1.2);opacity:0}
`;
const Header = styled.div`
    height: 637px;
    background-color: rgb(206, 235, 239);
    padding-top: 10px;
    margin-bottom: 90px;
`;

const Layout = styled.div`
    width: 100%;
    height: 800px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Poppins, sans-serif;
    margin-bottom: 60px;
    h1 {
        width: 1170px;
        font-size: 40px;
        line-height: 1.15;
        margin-bottom: 10px;
    }
    p {
        width: 1170px;
        font-size: 16px;
        margin-bottom: 90px;
    }
    h6 {
        width: 1170px;
        height: 47px;
        span {
            height: 100%;
            width: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-family: Poppins, sans-serif;
            color: #fff;
            background-color: #15e4d0;
            font-weight: 500;
            margin-top: 100px;
        }
    }
    .line {
        width: 1170px;
        height: 50px;
        div {
            width: 240px;
            height: 50px;
            background-color: rgb(206, 235, 239);
        }
    }
    .twoPictures {
        width: 1170px;
        display: flex;
        height: 366px;
        .nice-div {
            width: 50px;
            height: 100%;
            background-color: rgb(206, 235, 239);
        }
        .first-div {
            height: 100%;
            width: 622px;
            margin-right: 20px;
            position: relative;
            div {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #15e4d0;
                top: 0%;
                opacity: 0;
            }
            h5 {
                position: absolute;
                top: 38%;
                left: 40%;
                opacity: 0;
                width: 100px;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #000;
                border-radius: 100px;
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
        .first-div:hover {
            div {
                opacity: 0.6;
            }
            h5 {
                opacity: 1;
            }
        }
        img {
            height: 100%;
            width: 622px;
        }
    }
`;

const Knowledge = styled.div`
    width: 100%;
    height: 550px;
    padding: 180px 0px 240px;
    display: flex;
    justify-content: center;
    background-image: url(${img5});

    div {
        font-family: Poppins, sans-serif;
        color: #fff;
        width: 777px;
        height: 153px;
        h1 {
            font-size: 40px;
        }
    }
    h4 {
        width: 333px;
        height: 130px;
        img {
            position: absolute;
        }
        position: relative;
        z-index: 1;
        &:before {
            content: '';
            position: absolute;
            top: 52%;
            left: 20%;
            width: 132px;
            height: 132px;
            transform: translate(-50%, -50%);
            background-color: #f2f2f2;
            border-radius: 100%;
            z-index: -1;
            animation: ${fadeEffect} 1.3s infinite ease;
            box-shadow: 0 0 10px 0;
        }
    }
`;

const Lastblock = styled.div`
    height: 760px;
    padding: 90px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Poppins, sans-serif;
    h1 {
        width: 1170px;
        font-size: 40px;
        line-height: 1.5;
        margin-bottom: 10px;
    }
    p {
        width: 1170px;
        line-height: 1.5;
        margin-bottom: 90px;
    }
    .block3 {
        width: 1170px;
        height: 295px;
        display: flex;
        justify-content: space-between;
        color: #fff;
        div {
            background-color: #252525;
            width: 350px;
            height: 295px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h3 {
                font-size: 24px;
                text-align: center;
                width: 100px;
            }
        }
        & div:nth-child(2) {
            background-color: #1becde;
        }
        & div:nth-child(1):hover {
            background-color: #1becde;
            transition: 0.4s;
        }
        & div:nth-child(3):hover {
            background-color: #1becde;
            transition: 0.4s;
        }
    }
    h2 {
        margin-top: 50px;
        width: 180px;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1becde;
        span {
            font-weight: 300;
            font-size: 18px;
            color: #fff;
        }
    }
`;
function App() {
    return (
        <div className="App">
            <Header>
                <HeaderSection />
                <SliderSection />
            </Header>
            <Layout>
                <h1>Best Of Health care for you</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                </p>
                <div className="line">
                    <div />
                </div>
                <div className="twoPictures">
                    <div className="nice-div" />
                    <div className="first-div">
                        <img src={img2} alt="" />
                        <div />
                        <h5>
                            <img src={img4} alt="" />
                        </h5>
                    </div>
                    <img src={img3} alt="" />
                </div>
                <div className="line">
                    <div />
                </div>
                <h6>
                    <span>Read More</span>
                </h6>
            </Layout>
            <Knowledge>
                <div>
                    <h1>Knowledge of center</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
                <h4>
                    <img src={img6} />
                </h4>
            </Knowledge>
            <Lastblock>
                <h1>Why choose 24hr home care</h1>
                <p>labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="block3">
                    <div>
                        <img src={img7} />
                        <h3>Daily care experts</h3>
                    </div>
                    <div>
                        <img src={img7} />
                        <h3>Daily care experts</h3>
                    </div>
                    <div>
                        <img src={img7} />
                        <h3>Daily care experts</h3>
                    </div>
                </div>
                <h2>
                    <span>Get A Quote</span>
                </h2>
            </Lastblock>
        </div>
    );
}

export default App;
