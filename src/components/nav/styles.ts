import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    background-color: ${ props => props.theme.colors.success };
`;
export const Menu = styled.nav`
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;
export const MenuItem = styled.a`
    width: 200px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    background-color: ${ props => props.theme.colors.primary };

    color: ${ props => props.theme.colors.white };

    :hover { 
        background-color: ${ props => props.theme.colors.warning};
        cursor: pointer;
    }
`;