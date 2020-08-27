import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state={
    items:[{id:1,title:"wake up"},{id:2,title:"make breakfast"}],
    id:uuidv4(),
    item:'',
    editItem:false
  };
  handleChange= (e)=>{
    console.log("handleChange");
  }
  handleSubmit= (e)=>{
    console.log("handleSubmit");
  }
  clearList= ()=>{
    console.log("clearList");
  }
  handleDelete= (id)=>{
    console.log(`handle delete ${id}`);
  }
  handleEdit= id=>{
    console.log(`handle edit ${id}`);
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
        <div className="col-10.mx-auto.col-md-8">
          <h3 className="text-capitalize text-center">Todo Input</h3>
        <TodoInput 
          item={this.state.item} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          editItem={this.editItem}/> 
        <TodoList 
          items={this.state.items} 
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          /> 
        </div>
        </div>
      </div>
    )
  }
}


 