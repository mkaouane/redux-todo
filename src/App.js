import React from 'react';
import Input from './components/Input'
import './App.css';
import TodoItem from './components/TodoItem';
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'


function App() {

  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
     <div className="app__container">
       <div className="app__todoContainer">
        {todoList.map(index => {
         return <TodoItem item={index.item} done={index.done} id={index.id}/>
        })}
      
      {/* done */}
       </div>
      <Input />
      </div>
    </div>
  );
}

export default App;
