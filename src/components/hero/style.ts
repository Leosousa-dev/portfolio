import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 36px;
`

export const Divider = styled.div`
    position: relative;
    height: 0.25rem;
    width: 128px;
    margin: 12px 0px;
    border-radius: 6px;
    background-color: #fff;
    ::before{
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 6px;
        background: linear-gradient(90deg, #FFFFFF 0%, #71CEEC 31.16%, #03B0F2 55.22%, #2FEB9C 100%);
        animation: animate 20s linear infinite;
        background-size: 500%;
        
    }
    ::after{
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 6px;
        background: linear-gradient(90deg, #2FEB9C 4.69%, #FFFFFF 23.96%, #3CC0EF 46.35%, #03B0F2 73.44%, #2FEB9C 100%);
        animation: animate 15s linear infinite;
        background-size: 500%;
    }
    @keyframes animate {
        0%{
            background-position: 0 0;
        }
        0%{
            background-position: 0 0;
        }
        0%{
            background-position: 500% 0;
        }
    }

`

export const Logo = styled.img`
    width: 48px;
    border-radius: 50%;
    background-color: #fff;
`
export const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    padding: 0px 68px;
    @media (max-width: 425px){
        font-size: 2rem;
        padding: 10px;
    }
    
`
export const Resume = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: #A3AEB1;
    @media (max-width: 425px){
        font-size: 1.125rem;
    }
  
`
export const Welcome = styled.span`
    margin: 48px 0px;
  
`
export const Button = styled.button`
    color: #fff;
    margin: 1.9375rem 0px;
    padding: 1px 10px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #fff;

    @media (max-width: 768px){
        font-size: 0.875rem;
    }
  
`
