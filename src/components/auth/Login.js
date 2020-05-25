import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''     
    });

    //extraer de usuario

    const {email, password} = usuario;

    const onChange = (e)=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:[e.target.value]
        })
    };

    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e =>{
        e.preventDefault();

        //Validar que no haya campos vacios


        

    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                            
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="Password"
                            id="Password"
                            name="Password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
                <Link 
                    to={'/nueva-cuenta'} 
                    className="enlace-cuenta"    
                >
                    Crear Usuario
                </Link>
            </div>
        </div>
     );
}
 
export default Login;