import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: ${ props => props.theme.colors.success };

    color: ${ props => props.theme.colors.white};
    font-weight: 700;

`;