import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import './TodoItem.css'
import {useDispatch} from 'react-redux'
import {setCheck} from '../features/todoSlice'

function TodoItem({item, done, id}) {
    const dispatch = useDispatch()
    const handleCheck = () => {
dispatch(setCheck(id))
    }
    return (
        <div className="todoItem">
             <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
            <p className={done && 'todoItem--done'}>{item}</p>
        </div>
    )
}

export default TodoItem
