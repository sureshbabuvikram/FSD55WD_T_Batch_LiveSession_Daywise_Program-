import React,{useState} from 'react';
import InputComponent from './Components/InputComponent';
import TodoDisplay from './Components/TodoDisplay';
// import LifeCycle from './Components/LifeCycle';

const App = () => {
  const[todos, setTodos]= useState([]) // [{},{},{}]
  const addTodoData=(newTitle, newDesc)=>{
    let newData={
      id: todos.length+1,
      title: newTitle,
      description:newDesc,
      completed:'false'
    }
    setTodos([...todos, newData])
    console.log("added");
  }
  console.log(todos);

  const deletetodoItem=(id)=>{
      setTodos(todos.filter((todo)=>todo.id !== id))
  }

  return (
    <div>
      <h1>App Comp</h1>
      
      {/* <LifeCycle  /> */}
      <InputComponent addTodoData={addTodoData} />

      {todos.map((item,index)=>{
        return(
          <>
            <TodoDisplay item={item} index={index} deletetodoItem={deletetodoItem}/>
            
          </>
        )
      })}      
    </div>
  );
};

export default App;