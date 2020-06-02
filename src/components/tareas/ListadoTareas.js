import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

    //Extraer proyectos de state inicial

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyectoFn } = proyectosContext;

    // SI no hay proyecto seleccionado

    if(!proyecto)return <h2>Selecciona un proyecto</h2>
    //Array destructuring para extraer el proyecto actual 

    const [proyectoActual] = proyecto;

    const tareasProyectos =[
        {nombre: 'Elegir plataforma', estado:true},
        {nombre: 'Elegir plataforma', estado:false},
        {nombre: 'Elegir plataforma', estado:false},
        {nombre: 'Elegir plataforma', estado:true},

    ]

    //Eliminar el proyecto

    const onClickEliminar = () =>{
        eliminarProyectoFn(proyectoActual.id)
    }


    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyectos.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyectos.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                
                
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>


            
        </Fragment>
     );
}
 
export default ListadoTareas;