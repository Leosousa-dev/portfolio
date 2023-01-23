import styled from "styled-components";

export const Container = styled.section`
    margin-top: 28px;
`
export const FlexBox = styled.div`
    display: flex;
    gap: 48px;
    padding-left: 12px;
    margin-top: 24px;
    @media (max-width: 425px){
        flex-direction: column;
        gap: 20px;
    }
`
export const BoxCol = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 425px){
        font-size: 20px;
        color: #A3AEB1;
    }
`
export const Title = styled.h3`
    margin-bottom: 6px;
    color: #fff;
`
export const List = styled.ul`
    margin-left: 20px;
`