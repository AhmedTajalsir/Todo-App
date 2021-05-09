import React from 'react'
import {List, ListItem, ListItemAvatar, ListItemText, Button} from '@material-ui/core'
import './Todo.css'
import {db} from './firebase'
function Todo(props) {
    return (
             <List className="todo_list">
                <ListItem >
                    <ListItemAvatar >
                    </ListItemAvatar>
                        <ListItemText primary={props.text}  secondary="Dummy deadline ⏰⏰"/>
                        {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()} >Delete</Button> */}
                </ListItem>
            </List>


    )
}

export default Todo
