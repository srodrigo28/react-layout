import { Container, Form, Input, ButtonGruoup, Button } from "./styles";

export function Login() {
    return (
        <Container>
            <Form>
                <h1 style={{ 
                    color: 'black',
                    textAlign: 'center',
                    marginBottom: '20px'

                }}>Login</h1>
                <Input 
                    type="text" 
                    placeholder="Nome"    
                />
                <Input 
                    type="text"
                    placeholder="Senha"
                />

                <ButtonGruoup>
                    <Button>
                        Entrar
                    </Button>
                    <Button>
                        Cadastrar
                    </Button>
                </ButtonGruoup>
            </Form>
        </Container>
    )
}