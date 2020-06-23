import React from 'react';
import Todos from '../components/Todos';
import { RootState } from '../modules';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return <Todos
    todos={todos}
    onCreate={onCreate}
    onToggle={onToggle}
  />
}

export default TodosContainer;