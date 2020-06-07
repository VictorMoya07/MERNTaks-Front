import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActualFn } = proyectosContext;
    
    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareasFn } = tareasContext;

    // Función para agregar el proyecto actual 
    const seleccionarProyectoFn = id =>{
        proyectoActualFn(id);// Fijar un proyecto actual
        obtenerTareasFn(id); // FIltrar las tareas cuando se de click
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyectoFn(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;