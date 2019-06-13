import React from 'react';
import './TodoList.css'

 const TodoList = (props) => {
    return(
        <div className='todo-item'>
            <p>a todo</p>
            <div className='features'>
                <button>edit</button>
                <button>delet</button>
            </div>
        </div>
    )
}
export default TodoList;