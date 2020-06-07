
import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';



import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
 } from '../../types';



const TareaState = props =>{
    const inicialState ={
        tareas:[
            {id:1,nombre: 'Elegir plataforma1', estado:true, proyectoId:1},
            {id:2,nombre: 'Elegir plataforma2', estado:false, proyectoId:2},
            {id:3,nombre: 'Elegir plataforma3', estado:false, proyectoId:3},
            {id:4,nombre: 'Elegir plataforma1', estado:true, proyectoId:3},
            {id:5,nombre: 'Elegir plataforma2', estado:false, proyectoId:2},
            {id:6,nombre: 'Elegir plataforma3', estado:false, proyectoId:3}
    
        ],
        tareasproyecto:null,
        errortarea:false,
        tareaseleccionada:null
    }

    // crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, inicialState);

    //Obtener las tareas de un proyecto
    const obtenerTareasFn = proyectoId =>{
        dispatch({
            type:TAREAS_PROYECTO,
            payload:proyectoId
        })
    }

    //Agregar una tarea al proyecto
    const agregarTareaFn = tarea =>{
       tarea.id = uuidv4();
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
    }
    //valida y muestra un error 
    
    const validarTareaFn = ()=>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    const eliminarTareaFn = id =>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload:id
        })
    }

    const cambiarEstadoTareaFn = tarea =>{
        dispatch({
            type:ESTADO_TAREA,
            payload:tarea
        })
    }

    const guardarTareaActualFn = tarea =>{
        dispatch({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }

    const actualizarTareaFn = tarea =>{
        dispatch({
            type:ACTUALIZAR_TAREA,
            payload:tarea
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                errortarea:state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareasFn,
                agregarTareaFn,
                validarTareaFn,
                eliminarTareaFn,
                cambiarEstadoTareaFn,
                guardarTareaActualFn,
                actualizarTareaFn 
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;