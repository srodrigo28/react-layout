import styled from "styled-components";

export const Container = styled.div`
    background-color: ${ props => props.theme.colors.success };
    height: 50px;
    width: 100%;

    bottom:0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;

    > h3{
        position: fixed; 
        color: ${ props => props.theme.colors.white };    
    }
`;