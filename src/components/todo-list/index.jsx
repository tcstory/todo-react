import React from 'react';
import AppDispacher from '../dispacher/dispacher.js';
import PubSub from 'pubsub-js';
const Immutable = require('immutable');

import {STATUS} from '../constants/';
require('./index.scss');
import createScrollBar from '../scrollbar';
import DateFormater from '../date-formater';


const TodoItem = React.createClass({
    propTypes: {
        todo: React.PropTypes.object
    },
    handleToggleTodoStatus: function (status) {
        if (status === STATUS.UNFINISHED) {
            AppDispacher.dispatch({
                type: 'TOGGLE_TODO_STATUS',
                data: {
                    status: STATUS.UNFINISHED,
                    id: this.props.todo.id
                }
            });
        } else if (status === STATUS.ONGOING) {
            AppDispacher.dispatch({
                type: 'TOGGLE_TODO_STATUS',
                data: {
                    status: STATUS.ONGOING,
                    id: this.props.todo.id
                }
            });
            AppDispacher.dispatch({
                type: 'RECORD_START_TIME',
                data: {
                    time: Date.now(),
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
            AppDispacher.dispatch({
                type: 'RECORD_END_TIME',
                data: {
                    time: Date.now(),
                    id: this.props.todo.id
                }
            });
        }
    },
    handleTodoClick: function () {
        PubSub.publish('openTodoCard', Immutable.fromJS(this.props.todo));
    },
    render: function () {
        let status;
        let checkoutBox;
        if (this.props.todo.status === STATUS.DONE) {
            status = (
                <div className="status-label done">Done</div>
            );
            checkoutBox = (
                <i onClick={(ev)=>{
                    ev.stopPropagation();
                    this.handleToggleTodoStatus(STATUS.UNFINISHED)
                }} className="fa fa-check-square checkout-icon" aria-hidden="true"/>
            );
        } else if (this.props.todo.status === STATUS.UNFINISHED) {
            status = (
                <div className="status-label unfinished">Unfinished</div>
            );
            checkoutBox = (
                <i onClick={(ev)=>{
                    ev.stopPropagation();
                    this.handleToggleTodoStatus(STATUS.ONGOING)
                }} className="fa fa-square-o checkout-icon unfinished" aria-hidden="true"/>
            );
        } else if (this.props.todo.status === STATUS.ONGOING) {
            status = (
                <div className="status-label ongoing">Ongoing</div>
            );
            checkoutBox = (
                <i onClick={(ev)=>{
                    ev.stopPropagation();
                    this.handleToggleTodoStatus(STATUS.DONE)
                }} className="fa fa-circle-o-notch checkout-icon ongoing" aria-hidden="true"/>
            );
        }
        return (
            <div className="todo-item" onClick={this.handleTodoClick}>
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
