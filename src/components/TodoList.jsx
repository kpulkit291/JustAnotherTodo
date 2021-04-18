import React from "react";
import { connect } from "react-redux";
import {addTodo, completeTodo, deleteTodo} from "../redux/Actions/actions";

function TodoList({todo, delTodo, compTodo, show}) {
    function changeTaskState(e, ind) {
        if(e.target.checked) {
            compTodo(ind, "complete")
        }
        else {
            compTodo(ind, "active");
        }
    }
    return (
    <div>
            {
                todo.map((val, ind) => {
                    return val.state == show || show == "all" ? (<div className="todo-list" key={ind}>
                    <div className="todo-check">
                        <input type="checkbox" id={"check-"+ind} checked={val.state == "complete"}  onClick={(e) => changeTaskState(e, ind)}/>
                        <label for={"check-"+ind}></label>
                    </div>
                    <div className="todo-name">
                        <div className={val.state == "complete" ? "cut-thru" : ""}>{val.name}</div>
                        <i className="fa fa-times" onClick={(e) => {e.stopPropagation();delTodo(ind)}}></i>
                    </div>
                </div>) : "";
                })
            }
    </div>);
}

const mapStateToProps = ({ todo, show }) => ({
    todo,
    show
  });
  
const mapDispatchToProps = dispatch => ({
    delTodo(index) {
        dispatch(deleteTodo(index))
    },
    compTodo(index, currState) {
        dispatch(completeTodo(index, currState));
    }
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);