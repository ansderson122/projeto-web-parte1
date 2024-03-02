import React , {useState , useEffect} from "react";
import {useLocation,Navigate } from "react-router-dom";
  



const Login = (prop)=>{
    const {pathname } = useLocation()


    useEffect(()=>{
        prop.novoPath(pathname)
    },[])

  
    return (
        <section className="conteiner">
           <h1>oi mundo</h1>
        </section>
    )
}

export default Login