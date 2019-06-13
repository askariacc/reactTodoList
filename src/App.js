import React from 'react';
import TodoForm from './components/TodoForm'
export default class TodoDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todolist:[]
        }
    }
    render() {
        return (
            <div>
                <TodoForm />
            </div>
        )
    }
}