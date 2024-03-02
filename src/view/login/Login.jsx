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


    const handleSubmit = (e) => {
        e.preventDefault();

        if(senhaUsuario === ""){
            setErro("Digite a senha")
        }else if (!validarEmail(emailUsuario)) {
            setErro("Digite um endereço de e-mail válido")
        } else {
            setFormularioEnviado(true)
        }
    };

    if (formularioEnviado) {
        return <Navigate to="/" />;
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