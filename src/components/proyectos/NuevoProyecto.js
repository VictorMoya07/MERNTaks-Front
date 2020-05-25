import React, {Fragment, useState} from 'react';

const NuevoProyecto = () => {

    //State para Proyecto

    const [proyecto, guardarProyecto] = useState({
        nombre:''
    })

    //Extraer el nombre del proyecto

    const {nombre}=proyecto;
    
    // Lee los contenidos del input
    
    const onChangeProyecto=e=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }
    
    //Cuando el usuario envia un proyecto
    
    const onSubmitProyectos = e =>{
        e.preventDefault();

        //VAlidar el proyecto


        //Agregar al state

        //limpiar el form 
    }
    return ( 
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"    
                >Nuevo Proyecto </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyectos}
            >
                <input
                     type="text"
                     className="input-text"
                     placeholder="Nombre Proyecto"
                     name="nombre"
                     value={nombre}
                     onChange={onChangeProyecto}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyectos "

                />
                

            </form>

        </Fragment>    
     );
}
 
export default NuevoProyecto;