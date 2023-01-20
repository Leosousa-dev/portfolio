import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        font-family: 'Nunito', sans-serif;
    }
    body{
        background-color: #070713;
        color: #ffff;
        width: 100%;
    }
    button{
        background-color: transparent;
    }
    a{
        cursor: pointer;
        color: #ffff;
    }
    strong{
        color: #fff;
    }
    p {
        color: #A3AEB1;
    }
`
export const MainContainer = styled.main`
    max-width: 700px;
    margin: auto;
    position: relative;
    padding: 0px 14px;
`
export const Containercircle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
`
export const Circle = styled.div`
    width: 500px;
    height: 500px;
    background: #22475D;
    filter: blur(143.963px);
    margin-top: -350px;
  
`