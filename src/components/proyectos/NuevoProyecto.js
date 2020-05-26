import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formularioProyecto, mostrarFormularioFn } = proyectosContext;
    
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
                onClick ={()=>mostrarFormularioFn()} 
                >Nuevo Proyecto </button>

            {formularioProyecto ?
                    (
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
                    ): null
             }

        </Fragment>    
     );
}
 
export default NuevoProyecto;