import React from "react";
import ReactDOM from "react-dom/client";
import styled, {
  createGlobalStyle,
  keyframes,
} from "styled-components";
import img1 from "../assets/img1.png";

const Slidersection = styled.div`
  display: flex;
  justify-content: center;
  font-family:Poppins,sans-serif;
  .text {
    height:432px;
    width:570px;
    padding : 0 15px;
    h1 {
      margin-top:120px;
      font-size:60px;
      width:180px;
      line-height: 1.1;
      span{
        color: #15E4D0;
        display: block;
      }
    }
    p{
      margin-top:10px;
      font-size:16px;
      margin-bottom:30px;
    }
    .twoButtons{
      display: flex;
      gap:10px;
      font-size:18px;
      span{
        width:170px;
        height:52.55px;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #4bc5b8;
      }
      & span:last-child {
        background-color: #252525;
        transition: .4s;
      }
      & span:last-child:hover{
        background-color: #4bc5b8;
        transition: .4s;
      }
    }
  }
  img {
    width:540px;
    height:432px;
    margin: 0 15px;
  }
  
`;

function SliderSection() {
  return (
    <Slidersection>
      <div className="text">
        <h1>
          <span>Health</span>
          Care
        </h1>
        <p>There are many variations of passages of Lorem Ipsum</p>
        <div className="twoButtons">
          <span primary>
            Contact Now
          </span>
          <span secondary>
            Get A Quote
          </span>
        </div>
      </div>
      <img src={img1} alt="" />
    </Slidersection>
  );
}

export default SliderSection;
