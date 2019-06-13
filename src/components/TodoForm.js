import React from 'react';

export default class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todo: {}
        }
    }
    
    render(){
        return(
            <div>
                <form onSubmit={(e)=> {e.preventDefault();console.log('submitted')}}>
                    <input type='text' placeholder='enter a todo'></input>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}