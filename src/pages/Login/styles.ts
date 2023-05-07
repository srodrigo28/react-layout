import styled from "styled-components";

export const Container = styled.div`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${ props => props.theme.colors.warning };
`;
export const Form = styled.div`
        margin-bottom: 100px;
        display: flex;
        gap: 20px;
        padding: 20px;
        flex-direction: column;
        width: 30%;
        height: 50%;
        border-radius: 20px;
        background: ${ props => props.theme.colors.tertiary};
`;

export const Input = styled.input`
        width: 100%;
        padding: 12px;
        border: none;
        outline: none;
        border-radius: 10px;
        color: ${ props => props.theme.colors.white };
        background-color: ${ props => props.theme.colors.gray};
`;

export const ButtonGruoup = styled.div`
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
`;
export const Button = styled.button`
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        color: ${ props => props.theme.colors.white };
        background: ${ props => props.theme.colors.gray };

        :hover{
                background: ${ props => props.theme.colors.warning};
                color: ${ props => props.theme.colors.white };
        }
`;