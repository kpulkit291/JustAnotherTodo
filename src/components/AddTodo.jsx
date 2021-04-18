import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import {addTodo} from "../redux/Actions/actions";
function AddTodo({todo, add}) {
    const [val, setState] = React.useState("");
    function createTodo(e) {
        if(val && e.which == 13) {
            add({id: todo.length+1, name: val, state: "active"});
            setState("");
        }
    }
    return (
    <div className="add-todo">
        <div className="icon"><i className="fa fa-angle-down"></i></div>
        <div className="todo-area">
            <input type="text" onKeyDown={createTodo} value={val} onChange={(e) => setState(e.target.value)}  placeholder="Enter todo here"/>
        </div>
    </div>)
}

const mapStateToProps = ({ todo }) => ({
    todo
  });
  
const mapDispatchToProps = dispatch => ({
    add(todo) {
      dispatch(addTodo(todo));
    }
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);