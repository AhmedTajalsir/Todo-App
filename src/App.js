import './App.css';
import { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import { db } from './firebase';
import firebase from 'firebase'
function App() {
  const [todos , setTodos] = useState ([]);
  const [input , setInput] = useState ('');
  console.log(input);
   useEffect(()=>{
    // This  Code Will Fire When The App.js Load
    db.collection('todos').orderBy('timestamp','decs').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
      // Here it is deffrinet becouse we have a to get thr id also so we need bring it like an object
      // setTodos(snapshot.docs.map(doc => ({
      //   id: doc.id,
      //   todo : doc.data().todo
      // })))
    })
   },[]);

  const AddTodo = (event) => {
    event.preventDefault();   // Stop Reloading The Page
    setTodos([...todos , input]);
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');             // Clean The Input Box
  } 
  return (
    <div className="App">
      <h1> Hello AH M ED 🤦‍♀️ </h1>
        <form>
        <FormControl>
          <InputLabel > ✔  Write a Something  </InputLabel>
          <Input value={input} onChange={ event => setInput(event.target.value) }/> 
          {/* variant="contained" */}
          <Button type="submit" disabled={!input}  onClick={AddTodo} color="primary"  >
              Add TODO
            </Button>
       </FormControl>
        </form>


        <ul>
            {todos.map(todo =>(
             <Todo text={todo}/>
          ))}
        
      </ul>
    </div>
  );
} 

export default App;
