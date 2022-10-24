import React from 'react'
import { TodoForm } from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';
import { StyledContainer, TareasListaContainer } from '../../components/todoList/TodoListStyles';
import TodoProvider from '../../providers/TodoProvider';



export const Todo = () => {
  return (
       <StyledContainer>
    <h1>Todo List</h1> 
    <TodoForm></TodoForm>
        <TareasListaContainer>
          <TodoProvider>
        <TodoList /> 
        </TodoProvider>
        </TareasListaContainer>
    </StyledContainer>
  )
}
export default Todo;
