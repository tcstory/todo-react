import React from 'react';
import cx from 'classnames';
import PubSub from 'pubsub-js';
const Immutable = require('immutable');
import AppDispacher from '../dispacher/dispacher.js';


require('./index.scss');


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

const TodoCard = React.createClass({
    getInitialState: function () {
        return {
            showTodoCard: false,
            curTodo: Immutable.fromJS({
                title: '',
                id: -1,
                createTime: -1,
                status: -1,
                time: [],
                tags: []
            })
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
                        <header className="row-header">时间</header>
                    </section>
                    <section className="row delete-todo-btn-row">
                        <div className="delete-todo-btn" onClick={this.handleDeleteTodo}>Delete Todo</div>
                    </section>
                </div>
            </article>
        );
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
            curTodo: Immutable.fromJS({
                title: '',
                id: -1,
                createTime: -1,
                status: -1,
                time: [],
                tags: []
            })
        })
    }
});

export default TodoCard;