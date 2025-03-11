import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleAddTask = () => {
        if(newTask.trim() === '') return
        setListaTareas(tareaAnterior => [...tareaAnterior, newTask])
        setNewTask('')
    }
    const handleDeleteTask = (index:number) => {
        setListaTareas(tareasActuales => tareasActuales.filter((_,i) => i!==index))
    }
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
                <ListaTareas listaTareas={listaTareas} borrarTarea={handleDeleteTask}></ListaTareas>
            </div>
        </div>
    )
}