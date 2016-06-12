import React from 'react';
import ReactDOM from 'react-dom';

require('../../components/base-css/base-css.css');
require('./app.css');
import {STATUS} from '../../components/constants/';


import Sidebar from '../../components/sidebar/index.jsx';
import Header from '../../components/header/index.jsx';
import TodoList from '../../components/todo-list/index.jsx';
import store from '../../components/store/index.js';


const App = React.createClass({
    getInitialState: function () {
        return {
            todoType: STATUS.ALL,
            todoList: [],
            userInfo: {
                userName: '',
                userId: '',
                userAvatar: ''
            }
        };
    },
    componentWillMount: function () {
        let d = store.getAll();
        this.setState({
            todoList: d.todoList,
            userInfo: d.userInfo
        });
    },
    componentDidMount: function () {
        store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        store.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        let d = store.getAll();
        this.setState({
            todoList: d.todoList,
            userInfo: d.userInfo
        });
    },
    __changeTodoType: function (type) {
        this.setState({
            todoType: type
        });
    },
    render: function () {
        let todos = [];
        if (this.state.todoType === STATUS.ALL) {
            todos = this.state.todoList;
        } else if (this.state.todoType === STATUS.DONE) {
            todos = this.state.todoList.filter((item)=>{
                if (item.status === STATUS.DONE) {
                    return true;
                }
            });
        } else if (this.state.todoType === STATUS.UNFINISHED) {
            todos = this.state.todoList.filter((item)=>{
                if (item.status === STATUS.UNFINISHED) {
                    return true;
                }
            });
        } else if (this.state.todoType === STATUS.ONGOING) {
            todos = this.state.todoList.filter((item)=>{
                if (item.status === STATUS.ONGOING) {
                    return true;
                }
            });
        }
        return (
            <article id="App">
                <Sidebar __changeTodoType={this.__changeTodoType}/>
                <main className="main">
                    <Header/>
                    <TodoList todoList={todos}/>
                </main>
            </article>
        );
    }
});

ReactDOM.render(<App/>,document.getElementById('page-wrapper'));
