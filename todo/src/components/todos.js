import React,{Component} from 'react';
import {Form,Button,Label,Input,FormText} from 'reactstrap';
import {connect} from 'react-redux';
import {addTodo,getTodos,toggleCompleted} from '../actions/actions';



class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            todo: ''  
        }
    }


        handleSubmit = () => {
            this.props.addTodo(this.state.title,this.state.todo)
        }

        handleTitleChange = (e) => {
             this.setState({title:e.target.value})
        }

        handleTodoChange = (e) => {
            this.setState({todo:e.target.value})
       }

       toggleCompleted = (index) => {
           console.log(index)
            this.props.toggleCompleted(index)
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
                            <div onClick = {(i) => this.toggleCompleted(i)}>
                            {console.log(i)}
                            <h2>{todo.title}</h2>
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