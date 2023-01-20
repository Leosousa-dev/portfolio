import styled from "styled-components";

export const Container = styled.section`
    
`
export const Wrap = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 8px;
`
export const Circle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #00A4F3;
    margin-right: -10px;
    @media (max-width: 425px){
        width: 12px;
        height: 12px;
    }
`
export const Subtitle = styled.h2`
    font-size: 32px;
    @media (max-width: 425px){
        font-size: 30px;
    }
`