import React from 'react';
import AppDispacher from '../dispacher/dispacher.js';
// import PubSub from 'pubsub-js';

import {STATUS} from '../constants/';
require('./index.scss');
import createScrollBar from '../scrollbar';

import DateFormater from '../date-formater';


const TodoItem = React.createClass({
    propTypes: {
        todo: React.PropTypes.object,
        todoList: React.PropTypes.array
    },
    handleToggleTodoStatus: function (flag) {
        if (flag) {
            AppDispacher.dispatch({
                type: 'TOGGLE_TODO_STATUS',
                data: {
                    status: STATUS.UNFINISHED,
                    id: this.props.todo.id
                }
            });
        } else {
            AppDispacher.dispatch({
                type: 'TOGGLE_TODO_STATUS',
                data: {
                    status: STATUS.DONE,
                    id: this.props.todo.id
                }
            });
        }
    },
    // handleModifyTodo: function () {
        // PubSub.publish('modifyTodo', {
            // title: this.props.todo.title,
            // id: this.props.todo.id,
            // createTime: this.props.todo.createTime,
            // status: this.props.todo.status
        // });
    // },
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
                <div className="status-label unfinished">Unfinished</div>
            );
            checkoutBox = (
                <i onClick={this.handleToggleTodoStatus.bind(this,false)} className="fa fa-square-o checkout-icon unfinished" aria-hidden="true"/>
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
                    <p className="todo-item-create-time">
                        {
                            (new DateFormater(this.props.todo.createTime)).format('yyyy年MM月dd日 hh时mm分')
                        }
                    </p>
                </div>
                {/*<div className="modify-todo-btn">*/}
                {/*<i onClick={this.handleMOdifyTodo} className="fa fa-pencil-square-o modify-todo-btn-icon" aria-hidden="true"></i>*/}
                {/*</div>*/}
                <div className="checkout-box">
                    {checkoutBox}
                </div>
            </div>
        );
    }
});


const TodoList = React.createClass({
    propTypes: {
        todoList: React.PropTypes.array
    },
    getDefaultProps: function () {
        return {
            todoList: []
        };
    },
    componentDidMount: function () {
        createScrollBar({
            target: document.body.querySelector('.todo-list')
        });
    },
    render: function () {
        return (
            <article className="todo-list">
                {
                    this.props.todoList.map((todo)=>{
                        return (
                            <TodoItem todo={todo} key={todo.id}/>
                        );
                    })
                }
            </article>
        );
    }
});



export default TodoList;
