import { Outlet } from "react-router-dom";
import { Menu } from "../menu";
import { Container } from "./styles";

interface ChildrenProps {
    children?: React.ReactNode
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <Container>
            <Menu />
                {children}
            <Outlet />
        </Container>
    )
}

export default Layout;