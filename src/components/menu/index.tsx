import { Container } from "./styles";

export function Menu() {
    return <Container>
        <ul>
            <li><a href="/">Login</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/registro">Registro</a></li>
        </ul>
    </Container>
}