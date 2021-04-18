import React from "react";
import "./menu.css";
import {connect} from  "react-redux";
import  {toBeShown} from "../redux/Actions/actions"
function Menu({todo,changeList,show}) {
    return (
        <div className="menu">
        <div className="item-no">{todo.filter(elem => elem.state == "active").length} Items Left</div>
        <div className="nav">
            <a className={show == "all" ? "active" : ""} onClick={() => changeList("all")}>All</a>
            <a className={show == "active" ? "active" : ""} onClick={() => changeList("active")}>Active</a>
            <a className={show == "complete" ? "active" : ""} onClick={() => changeList("complete")}>Completed</a>
        </div>
        <div className="clear-com">Clear Completed</div>
    </div>);
}

const mapStateToProps = ({ todo, show }) => ({
    todo,
    show
  });
  
const mapDispatchToProps = dispatch => ({
    changeList(type) {
        dispatch(toBeShown(type));
    }
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);