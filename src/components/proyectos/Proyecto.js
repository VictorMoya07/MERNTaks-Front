import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActualFn } = proyectosContext;
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => proyectoActualFn(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;