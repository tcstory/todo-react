/**
 * Created by tcstory on 5/27/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

require('../../components/base-css/base-css.css');
require('./app.css');


import Sidebar from '../../components/sidebar/index.jsx';
import Header from '../../components/header/index.jsx';
import TodoList from '../../components/todo-list/index.jsx';
import store from '../../components/store/index.js';


const App = React.createClass({
    getInitialState: function () {
        return {

        }
    },
    componentDidMount: function () {
        let d = store.getAll();
        this.setState({
            todoList: d.todoList,
            userInfo: d.userInfo
        });
        store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        store.removeChangeListener(this._onChange)
    },
    _onChange: function () {
        let d = store.getAll();
        this.setState({
            todoList: d.todoList,
            userInfo: d.userInfo
        });
    },
    render: function () {
        return (
            <article id="App">
                <Sidebar/>
                <main className="main">
                    <Header/>
                    <TodoList todoList={this.state.todoList}/>
                </main>
            </article>
        );
    }
});

ReactDOM.render(<App/>,document.getElementById('page-wrapper'));

