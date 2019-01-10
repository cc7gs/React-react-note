import React from 'react';
import {connect} from 'react-redux'
import { addTodo } from '../actions';

type IState=Readonly<{
    inputValue:string;
}>
type IProps=Readonly<{
    onAdd:(v:string)=>void
}>

 class AddTodo extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            inputValue:''
        };
    }
    onSubmit=(event:React.FormEvent)=>{
        const {inputValue}=this.state;
        const {onAdd}=this.props;

        event.preventDefault();
       if(!inputValue.trim()){
           return;
       }
       onAdd(inputValue);
    }
    handleInputChange=(e:any)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
 
    render(){
        const {inputValue}=this.state;
        return(
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" value={inputValue} onChange={this.handleInputChange} type="text"/>
                    <button className="add-btn" type="submit" >添加</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps={
    onAdd:addTodo
}
export default connect(null,mapDispatchToProps)(AddTodo);