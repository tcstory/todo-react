import React from 'react';
import AppDispacher from '../dispacher/dispacher.js';

import {STATUS} from '../constants/';
require('./index.scss');
import createScrollBar from '../scrollbar';

const TodoItem = React.createClass({
    handleToggleTodoStatus: function (flag) {
        if (flag) {
            AppDispacher.dispatch({
                type: 'TOGGLE_TODO_STATUS',
                data: {
                    status: STATUS.UNFINISHED,
                    id: this.props.todo.id
                }
            })
        } else {
            AppDispacher.dispatch({
                type: 'TOGGLE_TODO_STATUS',
                data: {
                    status: STATUS.DONE,
                    id: this.props.todo.id
                }
            })
        }
    },
    render: function () {
        let status;
        let checkoutBox;
        if (this.props.todo.status === STATUS.DONE) {
            status = (
                <div className="status-label done">Done</div>
            );
            checkoutBox = (
                <i onClick={this.handleToggleTodoStatus.bind(this,true)} className="fa fa-check-square checkout-icon" aria-hidden="true"/>
            );
        } else if (this.props.todo.status === STATUS.UNFINISHED) {
            status = (
                <div className="status-label cancel">Unfinished</div>
            );
            checkoutBox = (
                <i onClick={this.handleToggleTodoStatus.bind(this,false)} className="unfinished-checkout-icon" aria-hidden="true"/>
            );
        } else if (this.props.todo.status === STATUS.ONGOING) {
            status = (
                <div className="status-label ongoing">Ongoing</div>
            );
        }
        return (
            <div className="todo-item">
                <div className="user-avatar-wrapper">
                    <div className="user-avatar"></div>
                </div>
                <div className="content-wrapper">
                    <div className="todo-item-title">
                        <p className="todo-item-text">{this.props.todo.title}</p>
                        {status}
                    </div>
                    <p className="todo-item-create-time">{this.props.todo.createTime}</p>
                </div>
                <div className="checkout-box">
                    {checkoutBox}
                </div>
            </div>
        )
    }
});


const TodoList = React.createClass({
    getDefaultProps: function () {
        return {
            todoList: []
        }
    },
    componentDidMount: function () {
        createScrollBar({
            target: document.body.querySelector('.todo-list')
        })  
    },
    render: function () {
        return (
            <article className="todo-list">
                {
                    this.props.todoList.map((todo)=>{
                        return (
                            <TodoItem todo={todo} key={todo.id}/>
                        )
                    })
                }
            </article>
        )
    }
});



export default TodoList;