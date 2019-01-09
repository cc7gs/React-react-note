import React from 'react';
import {connect} from 'react-redux'
import { addTodo } from '../actions';
 class AddTodo extends React.Component<any>{
    input:any;
    onSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        const input=this.input;
        if(!input.value.trim()){
            return;
        }
        console.log(input.value);
        //将输入的内容 传递父组件
        this.props.onAdd(input.value);
        //清空文本框
        input.value='';
    }
    refInput=(node:HTMLInputElement)=>{
        this.input=node;
    }
    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} type="text"/>
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