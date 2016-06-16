import React from 'react';
import cx from 'classnames';
import PubSub from 'pubsub-js';
const Immutable = require('immutable');
import AppDispacher from '../dispacher/dispacher.js';


require('./index.scss');
import {STATUS} from '../constants/';
import {getEmptyTask, getEmptySubTask} from '../utils/';


const TagInput = React.createClass({
    propTypes: {
        handleAddTag: React.PropTypes.func,
        curTags: React.PropTypes.array,
        tagLength: React.PropTypes.number
    },
    getDefaultProps: function () {
        return {
            handleAddTag: function () {
            }
        }
    },
    render: function () {
        return (
            <div className="tag-input-wrapper">
                <input type="text" ref="tagInput" className="tag-input" onKeyUp={(ev)=>{
                    if (ev.keyCode == 13) {
                        this.handleAddTag()
                    }
                }}/>
                <div className="confirm-btn" onClick={this.handleAddTag}>添加</div>
            </div>
        )
    },
    handleAddTag: function () {
        if (this.props.tagLength < 3) {
            if (this.refs.tagInput.value !== '') {
                this.props.handleAddTag(this.refs.tagInput.value);
                this.refs.tagInput.value = '';
            }
        }
    }
});

const SubTasks = React.createClass({
    propTypes: {
        subTasks: React.PropTypes.object,
        handleToggleSubTask: React.PropTypes.func,
        handleAddSubTask: React.PropTypes.func,
        handleDeleteSubTask: React.PropTypes.func
    },
    getDefaultProps: function () {
        return {
            subTasks: Immutable.fromJS([]),
            handleToggleSubTask: function () {
            },
            handleAddSubTask: function () {
            },
            handleDeleteSubTask: function () {
            }
        }
    },
    render: function () {
        return (
            <section className="subTasks">
                <div className="inner-row">
                    <div className="input-wrapper">
                        <input type="text"
                               onKeyUp={(ev)=>{
                                    if (ev.keyCode == 13) {
                                        this.handleAddSubTask()
                                    }
                               }}
                               className="subTaskInput" ref="subTaskInput"/>
                        <div className="icon">
                            <i className="fa fa-pencil" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
                <div className="subtask-list">
                    {
                        this.props.subTasks.toJS().map((item) => {
                            if (item.status === STATUS.DONE) {
                                return (
                                    <div className="subtask-item" key={item.id}>
                                        <div className="icon done" onClick={this.handleToggleSubTask.bind(this,item.id)}>
                                            <i className="fa fa-check-square"/>
                                        </div>
                                        <p className="subtask-title">{item.title}</p>
                                        <div className="delete-btn">
                                            <i className="fa fa-times"
                                               onClick={this.handleDeleteSubTask.bind(this,item.id)}/>
                                        </div>
                                    </div>
                                )
                            } else if (item.status === STATUS.UNFINISHED) {
                                return (
                                    <div className="subtask-item" key={item.id}>
                                        <div className="icon unfinished" onClick={this.handleToggleSubTask.bind(this,item.id)}>
                                            <i className="fa fa-square-o"/>
                                        </div>
                                        <p className="subtask-title">{item.title}</p>
                                        <div className="delete-btn">
                                            <i className="fa fa-times"
                                               onClick={this.handleDeleteSubTask.bind(this,item.id)}/>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </section>
        )
    },
    handleAddSubTask: function () {
        this.props.handleAddSubTask(this.refs.subTaskInput.value);
        this.refs.subTaskInput.value = '';
    },
    handleToggleSubTask: function (id) {
        this.props.handleToggleSubTask(id);
    },
    handleDeleteSubTask: function (id) {
        this.props.handleDeleteSubTask(id);
    }
})

const TodoCard = React.createClass({
    getInitialState: function () {
        return {
            showTodoCard: false,
            curTodo: Immutable.fromJS(getEmptyTask())
        };
    },
    componentDidMount: function () {
        PubSub.subscribe('openTodoCard', (eventStr, todo)=> {
            this._openTodoCard(todo);
        });
        PubSub.subscribe('closeTodoCard', ()=> {
            this._closeTodoCard();
        });
    },
    render: function () {
        return (
            <article className={cx('todo-card-wrapper',{
                'open': this.state.showTodoCard,
                'close': !this.state.showTodoCard
            })}>
                <div className="todo-card">
                    <div className="close-btn" onClick={this.handleCloseTodoCard}>
                        <i className="fa fa-times close-btn-icon"/>
                    </div>
                    <section className="row todo-input-row">
                        <header className="row-header">待办</header>
                        <div className="inner-row">
                            <input type="text" className="todo-input" ref="todoInput"
                                   onBlur={this.handleChangeTodoTitle}/>
                        </div>
                    </section>
                    <section className="row tag-input-row">
                        <header className="row-header">标签</header>
                        <div className="inner-row">
                            <TagInput handleAddTag={this.handleAddTag} tagLength={this.state.curTodo.get('tags').size}/>
                        </div>
                        <div className="tags-wrapper">
                            {
                                this.state.curTodo.get('tags').map((item, index)=> {
                                    return (
                                        <div className="tag-item" key={index}>
                                            <span className="tag-item-text">{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className="row">
                        <header className="row-header">子项目</header>
                        <SubTasks handleAddSubTask={this.handleAddSubTask}
                                  handleDeleteSubTask={this.handleDeleteSubTask}
                                  handleToggleSubTask={this.handleToggleSubTask}
                                  subTasks={this.state.curTodo.get('subTasks')}/>
                    </section>
                    <section className="row delete-todo-btn-row">
                        <div className="delete-todo-btn" onClick={this.handleDeleteTodo}>Delete Todo</div>
                    </section>
                </div>
            </article>
        );
    },
    handleAddSubTask: function (title) {
        let newCurTodo = this.state.curTodo.updateIn(['subTasks'], (subTasks) => {
            let newSubTask = getEmptySubTask();
            newSubTask.title = title;
            newSubTask.id = Math.random();
            newSubTask.status = STATUS.UNFINISHED;
            return subTasks.push(newSubTask)
        });
        this.setState({
            curTodo: newCurTodo
        })
    },
    handleDeleteSubTask: function (id) {
        let newCurTodo = this.state.curTodo.updateIn(['subTasks'], (subTasks) => {
            let result = subTasks.toJS().filter((item)=>{
                if (item.id === id) {
                    return false;
                }
                return true;
            })
            return Immutable.List(result);
        });
        this.setState({
            curTodo: newCurTodo
        })
    },
    handleToggleSubTask: function (id) {
        let newCurTodo = this.state.curTodo.updateIn(['subTasks'], (subTasks) => {
            let result =  subTasks.toJS().map((item)=>{
                if (item.id === id) {
                    if (item.status === STATUS.UNFINISHED) {
                        item.status = STATUS.DONE;
                    } else if (item.status === STATUS.DONE) {
                        item.status = STATUS.UNFINISHED;
                    }
                }
                return item;
            })
            return Immutable.List(result);
        });
        this.setState({
            curTodo: newCurTodo
        })
    },
    handleAddTag: function (tag) {
        let newCurTodo = this.state.curTodo.updateIn(['tags'], (tags) => {
            return tags.push(tag);
        });
        this.setState({
            curTodo: newCurTodo
        })
    },
    handleChangeTodoTitle: function () {
        let newCurTodo = this.state.curTodo.updateIn(['title'], ()=> {
            return this.refs.todoInput.value;
        });
        this.setState({
            curTodo: newCurTodo
        })
    },
    handleCloseTodoCard: function () {
        this.setState({
            showTodoCard: false
        });
        this.updateTodo();
    },
    updateTodo: function () {
        AppDispacher.dispatch({
            type: 'UPDATE_TODO',
            data: this.state.curTodo.toJS()
        });
    },
    handleDeleteTodo: function () {
        AppDispacher.dispatch({
            type: 'DELETE_TODO',
            data: {
                id: this.state.curTodo.get('id')
            }
        });
        this._closeTodoCard();
    },
    _openTodoCard: function (todo) {
        this.setState({
            showTodoCard: true,
            curTodo: todo
        });
        this.refs.todoInput.value = todo.get('title');
    },
    _closeTodoCard: function () {
        this.setState({
            showTodoCard: false,
            curTodo: Immutable.fromJS(getEmptyTask())
        })
    }
});

export default TodoCard;