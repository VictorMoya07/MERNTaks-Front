import React, {Fragment} from 'react';
import Tarea from './Tarea';


const ListadoTareas = () => {

    const tareasProyectos =[
        {nombre: 'Elegir plataforma', estado:true},
        {nombre: 'Elegir plataforma', estado:false},
        {nombre: 'Elegir plataforma', estado:false},
        {nombre: 'Elegir plataforma', estado:true},

    ]


    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

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
            >Eliminar Proyecto &times;</button>


            
        </Fragment>
     );
}
 
export default ListadoTareas;