import React , {useState , useEffect} from "react";
import {useLocation,Navigate } from "react-router-dom";
  



const Login = (prop)=>{
    const {pathname } = useLocation()
    const [emailUsuario, setEmailUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")
    const [formularioEnviado, setFormularioEnviado] = useState(false)
    const [erro, setErro] = useState("")

    useEffect(()=>{
        prop.novoPath(pathname)
    },[])

    const validarEmail = (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validarEmail(emailUsuario)){ 
           setErro("Digite um endereço de e-mail válido")
        }else if (senhaUsuario === "") {
            setErro("Digite a senha")
        } else {
            try {
                const response = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: emailUsuario,
                        senha: senhaUsuario
                })})
                
                if (!response.ok) {
                    throw new Error('Credenciais inválidas. Por favor, tente novamente.');
                }
            
                console.log('Login bem-sucedido');
                setFormularioEnviado(true)
            } catch (error) {
                console.error('Erro ao fazer login:', error.message);
                setErro(error.message)
            }
        }
    };

    if (formularioEnviado) {
        return <Navigate to="/principal" />;
    }

    return (
        <section className="conteiner">
            <h1>Login</h1>

            <form  onSubmit={handleSubmit} className="formulario">

                <div className="formulario-linha">
                    <p>Email:</p>
                    <input
                        type="email"
                        name="emailUsuario"
                        value={emailUsuario}
                        onChange={(e) => setEmailUsuario(e.target.value)}
                    />
                </div>

                <div className="formulario-linha">
                    <p>Senha:</p>
                    <input
                        type="password"
                        name="senhaUsuario"
                        value={senhaUsuario}
                        onChange={(e) => setSenhaUsuario(e.target.value)}
                    />
                </div>

                <button type="submit" className="quadro vermelho">Entra</button>

                {erro && <p style={{ color: "red" }}>{erro}</p>}

            </form>
        </section>
    )
}

export default Login