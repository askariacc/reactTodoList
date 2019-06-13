import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
export default class TodoDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todolist:[]
        }
    }
    render() {
        return (
            <div className='dashboard'>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}