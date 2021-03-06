import React from 'react';
import AppDispacher from '../dispacher/dispacher.js';

import {STATUS} from '../constants/';
import {getEmptyTask} from '../utils/';
require('./index.scss');

const Header = React.createClass({
    handleAddTodo: function () {
        let newTodo = getEmptyTask();
        newTodo.title = this.refs.todoInput.value;
        newTodo.id = Math.random();
        newTodo.createTime = Date.now();
        AppDispacher.dispatch({
            type: 'ADD_TODO',
            data: newTodo
        });
        this.refs.todoInput.value = '';
    },
    render: function () {
        return (
            <header className="header">
                <div className="calender-btn">
                    <i className="fa fa-calendar calender-icon" aria-hidden="true"/>
                </div>
                <div className="input-row">
                    <input ref="todoInput" type="text" className="todo-input"
                        onKeyUp={(ev)=>{
                            if (ev.keyCode == 13) {
                                this.handleAddTodo();
                            }
                        }}
                        placeholder="Wednesday, 15th October, 2015"/>
                </div>
                <div className="right-part">
                    <div className="bell-wrapper">
                        <div className="number">5</div>
                        <i className="fa fa-bell-o bell-icon" aria-hidden="true"/>
                    </div>
                    <div className="add-todo-btn" onClick={this.handleAddTodo}>Add Task</div>
                </div>
            </header>
        );
    }
});

export default Header;
