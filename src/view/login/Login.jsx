import React , {useState , useEffect} from "react";
import {useLocation } from "react-router-dom";
  



const Login = (prop)=>{
    const {pathname } = useLocation()

    useEffect(()=>{
        prop.novoPath(pathname)
    },[])


    return (
        <h1>oi mundo </h1>
    )
}

export default Login