import React ,{ useState, useContext, useEffect }from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer proyecto si esta activo

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;


    const tareasContext = useContext(tareaContext);
    const { actualizarTareaFn, obtenerTareasFn, agregarTareaFn, validarTareaFn, errortarea, tareaseleccionada } = tareasContext;

    // Effect que detecta si hay una tarea seleccionada

    useEffect(()=>{
        if(tareaseleccionada!==null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    }, [tareaseleccionada])




    // STate del formulario

    const [tarea, guardarTarea] = useState({
        nombre:''
    })

    //Extraer el nombre del proyecto

    const { nombre } = tarea; 


    if(!proyecto)return null
    //Array destructuring para extraer el proyecto actual 

    const [proyectoActual] = proyecto;

    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        
        //validar
        if(nombre.trim() === ''){
            validarTareaFn();
            return;
        }
        
        // si es edicion o es nueva tarea

        if(tareaseleccionada === null){
            // agregar la nueva tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTareaFn(tarea);
        }else{
            actualizarTareaFn(tarea)
        }


      

        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareasFn(proyectoActual.id)

        // reiniciar el form
        guardarTarea({
            nombre:''
        })
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea':'Agregar Tarea'}
                    />
                </div>

            </form>
            {errortarea?<p className="mensaje error">El nombre de la tarea es obligatorio</p>   :null}
        </div>
     );
}
 
export default FormTarea;