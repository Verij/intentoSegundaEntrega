import React from 'react'
import { TodoFormContainer } from './TodoFormStyles'


export const TodoForm = () => {


  return (
    <TodoFormContainer>
      <div>
      <form> <input type="text"  />
        <button>Agregar Tarea</button>
        <button>Borrar</button>
        </form>
    </div>
    </TodoFormContainer>
  )
}
