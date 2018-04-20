import React,{Component} from 'react';
import {Form,Button,Label,Input,FormText} from 'reactstrap';
import {connect} from 'react-redux';
import {addTodo,getTodos,toggleCompleted} from '../actions/actions';



class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            title: '',
            todo: ''  
        }
    }


        handleSubmit = () => {
            console.log('before',this.state)
            
            this.props.addTodo(this.state.title,this.state.todo,this.state.id)
            this.setState({
                id: this.state.id += 1
            })
            console.log('after',this.state)
        }

        handleTitleChange = (e) => {
             this.setState({title:e.target.value})
        }

        handleTodoChange = (e) => {
            this.setState({todo:e.target.value})
       }

       toggleCompleted = (id) => {
            console.log(id)
            this.props.toggleCompleted(id)
       }

        render(){
            
            return (
                <div>
                    <Form>
                        <Input  value = {this.state.title} onChange = {this.handleTitleChange} type = "text" name = "title" id = "title"/>
                        <Input value = {this.state.todo} onChange = {this.handleTodoChange} type = "textarea" name = "todo" id = "todo"/>
                        <Button onClick = {this.handleSubmit}>Submit</Button>
                        </Form>
                        <h2> Todos </h2>
                        <ul>

                    {this.props.todos.map((todo,i)=> {
            
                        return (
                            <li key = {i}>
                            <div>
                            <h2 onClick = { () => this.toggleCompleted(todo.id)}>{todo.title}</h2>
                           <p> {todo.todo} </p>
                                </div> 
                            </li>
                            
                        )
                    })}
                    </ul>
                </div>

            )
        }
    }

const mapStateToProps = (state) => {
   
   return  { 
       todos:state
       
    }
}

export default connect(mapStateToProps,{addTodo,getTodos,toggleCompleted})(Todos)