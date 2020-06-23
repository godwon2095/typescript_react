import React, { useState } from 'react';
import { TodoState } from '../modules/todos';

type TodoProps = {
  todo: TodoState;
  onToggle: (id: number) => void;
};
type TodoListProps = {
  todos: TodoState[];
  onToggle: (id: number) => void;
};
type todosProps = {
  todos: TodoState[];
  onToggle: (id: number) => void;
  onCreate: (text: string) => void;
}

const TodoItem = function TodoItem({ todo, onToggle }: TodoProps) {
  return (
    <li
      style={{
        textDecoration: todo.done ? 'line-through' : 'none'
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
};
const TodoList = function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <ul>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />)
      }
    </ul>
  );
};

function Todos({ todos, onToggle, onCreate }: todosProps) {
  const [text, setText] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(text);
    setText('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} placeholder="할 일을 입력하세요..." />
        <button>등록</button>
      </form>
      <TodoList 
        todos={todos}
        onToggle={onToggle}
      />
    </div>
  )
}

export default React.memo(Todos);