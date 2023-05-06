import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    > ul{
        gap: 10px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
    > ul > li {
        width: 200px;
        padding: 10px;
        text-align: center;
        border-radius: 10px;

        :hover { 
            background-color: yellow;
            cursor: pointer;
        }
    }
`;