import { Container, Menu, MenuItem } from "./styles";

export function Nav() {
    return( 
        <Container>
            <Menu>
                <MenuItem href="/login">Login</MenuItem>
                <MenuItem href="/registro">Registro</MenuItem>
            </Menu>
        </Container>
    )
}