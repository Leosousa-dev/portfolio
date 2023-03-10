import styled from "styled-components";

export const Container = styled.section`
    margin: 32px 0px;
`
export const FlexContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 24px;
    @media (max-width: 425px){
        flex-direction: column;
        align-items: center;
    }
`
export const Box = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 250px;
`
export const ItemList = styled.li`
    color: #A3AEB1;
    margin-left: 20px;
`
export const Link = styled.a`
    margin-left: 6px;
    text-decoration: underline;
`
export const Tumb = styled.img`
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
`