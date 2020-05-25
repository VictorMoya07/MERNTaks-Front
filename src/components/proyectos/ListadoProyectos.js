import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre:'tienda1'},
        {nombre: 'tienda2'},
        {nombre: 'tienda3'}
    ]
    return ( 

        <ul className="listado-proyectos">
            {proyectos.map( proyecto =>( 
                <Proyecto
                    proyecto = { proyecto }
                />
                ))}
        </ul>

     );
}
 
export default ListadoProyectos;