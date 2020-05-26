import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';



const ProyectoState = props =>{

    const proyectos = [
        { id: 1, nombre: 'tienda1' },
        { id: 2, nombre: 'tienda2' },
        { id: 3, nombre: 'tienda3' } 
    ]

    const initialState = {
        proyectos :[],

        formularioProyecto: false
    }

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    //Serie de funciones para el crud del proyecto

    const mostrarFormularioFn = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectosFn = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload : proyectos
        })
    }


    return (
        <proyectoContext.Provider
            value={{
                proyectos : state.proyectos,
                formularioProyecto: state.formularioProyecto,
                mostrarFormularioFn,
                obtenerProyectosFn
            }}
        >

            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
