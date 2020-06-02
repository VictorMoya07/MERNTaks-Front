import React, {useReducer} from 'react';

//import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
     AGREGAR_PROYECTOS,
     VALIDAR_FORMULARIO,
     PROYECTO_ACTUAL,
     ELIMINAR_PROYECTO
     } from '../../types';



const ProyectoState = props =>{

    const proyectos = [
        { id: 1, nombre: 'tienda1' },
        { id: 2, nombre: 'tienda2' },
        { id: 3, nombre: 'tienda3' } 
    ]

    const initialState = {
        proyectos :[],
        formularioProyecto: false,
        errorformulario:false,
        proyecto: null
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

    //Agregar nuevo proyecto

    const agregarProyectoFn = proyecto =>{
        proyecto.id = uuidv4();

        //Insertar el proyecto en el state

        dispatch({
            type:AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }

    // Valida el formulario por errores
    
    const mostrarErrorFn = () =>{
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto que el usuario dio click

    const proyectoActualFn = proyectoId =>{
        dispatch({
            type:PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }


    //Elimina un proyecto
    const eliminarProyectoFn = proyectoId =>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:proyectoId
        })
    }


    return (
        <proyectoContext.Provider
            value={{
                proyectos : state.proyectos,
                errorformulario:state.errorformulario,
                formularioProyecto: state.formularioProyecto,
                proyecto: state.proyecto,
                mostrarFormularioFn,
                obtenerProyectosFn,
                agregarProyectoFn,
                mostrarErrorFn,
                proyectoActualFn,
                eliminarProyectoFn
                
            }}
        >

            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
