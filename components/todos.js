import React from 'react';
import {connect} from 'react-redux';

class Todos extends React.Component{
  renderTodoList(){
    return this.props.todos.map((todo) =>{
      return(
        <li key={todo}>
        {todo}
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <h1>Todos</h1>
        <ul>  {this.renderTodoList() } </ul>
        </div>
      );
  }
}

function mapStateToProps(todos) {
  return {
    todos
  }
}



export default connect(mapStateToProps)(Todos);
