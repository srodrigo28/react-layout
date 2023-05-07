import { Outlet } from "react-router-dom";
import { Nav } from "../nav";
import { Container } from "./styles";
import { Rodape } from "../rodape";

interface ChildrenProps {
    children?: React.ReactNode
}
const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <Container>
                <Nav />
                <Rodape />
                {children}
            <Outlet />
        </Container>
    )
}
export default Layout;