import React , {useState , useEffect} from "react";
import {useLocation,Navigate } from "react-router-dom";
import './Cadastro.css'


const Cadastro = (prop)=>{
    const {pathname } = useLocation()

    const [nomeUsuario, setNomeUsuario] = useState("")
    const [sobrenomeUsuario, setSobrenomeUsuario] = useState("")
    const [emailUsuario, setEmailUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")
    const [repetirSenha, setRepetirSenha] = useState("")
    const [erro, setErro] = useState("")
    const [formularioEnviado, setFormularioEnviado] = useState(false)

    useEffect(()=>{
        prop.novoPath(pathname)
    },[])

    const validarEmail = (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(nomeUsuario === "" ||  sobrenomeUsuario === ""){
            setErro("Digite um Nome e Sobrenome")
        }else if (!validarEmail(emailUsuario)) {
            setErro("Digite um endereço de e-mail válido")
        }
        // Realize suas verificações e validações aqui
        else if (senhaUsuario !== repetirSenha) {
          setErro("As senhas não coincidem")
        } else {
            try {
            const response = await fetch('http://localhost:3001/usuarios', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                nome: nomeUsuario,
                sobrenome: sobrenomeUsuario,
                email: emailUsuario,
                senha: senhaUsuario
              })
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log(data.message);
              setFormularioEnviado(true)
            } else {
              console.error('Erro ao cadastrar usuário:', response.statusText);
              setErro(response.statusText)
            }
            } catch (error) {
            console.error('Erro ao cadastrar usuário:', error.message);
            setErro(error)
            }
        }

        
    };

    if (formularioEnviado) {
        return <Navigate to="/principal" />;
    }


    return (
        <section className="conteiner">
             <h1>Cadastra</h1>
            <form onSubmit={handleSubmit} className="formulario">
                <div className="formulario-linha">
                    <p>Nome:</p>
                    <input
                        type="text"
                        name="nomeUsuario"
                        value={nomeUsuario}
                        onChange={(e) => setNomeUsuario(e.target.value)}
                    />
                </div>
   

                <div className="formulario-linha">
                    <p>Sobrenome:</p>
                    <input
                        type="text"
                        name="sobrenomeUsuario"
                        value={sobrenomeUsuario}
                        onChange={(e) => setSobrenomeUsuario(e.target.value)}
                    />
                </div>

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

                <div className="formulario-linha">
                    <p>Repita a senha:</p>
                    <input
                        type="password"
                        name="repetirSenha"
                        value={repetirSenha}
                        onChange={(e) => setRepetirSenha(e.target.value)}
                    />
                </div>

                <button type="submit" className="quadro vermelho">Cadastrar</button>

                {erro && <p style={{ color: "red" }}>{erro}</p>}
            </form>
        </section>
    )
}

export default Cadastro