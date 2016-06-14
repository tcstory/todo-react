import React from 'react';
import AppDispacher from '../dispacher/dispacher.js';
import cx from 'classnames';

require('./index.scss');

const TodoCard = React.createClass({
    getInitialState: function () {
        return null;
    },
    render: function () {
        return (
            <article className="todo-card-wrapper">
                <div className="todo-card">
                    <div className="close-btn">
                        <i className="fa fa-times close-btn-icon"/>
                    </div>
                    <section className="row">
                        <header className="row-header">标签</header>
                        <div className="tag-input-row">
                            <div className="tag-input-wrapper">
                                <input type="text" className="tag-input"/>
                                <div className="confirm-btn">添加</div>
                            </div>
                        </div>
                        <div className="tags-wrapper">
                            <div className="tag-item">
                                <span className="tag-item-text">
                                    工作
                                </span>
                            </div>
                            <div className="tag-item">
                                <span className="tag-item-text">
                                    生活
                                </span>
                            </div>
                            <div className="tag-item">
                                <span className="tag-item-text">
                                    变成猫
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <header className="row-header">时间</header>
                    </section>
                    <section className="row delete-todo-btn-row">
                        <div className="delete-todo-btn">Delete Todo</div>
                    </section>
                </div>
            </article>
        );
    }
});

export default TodoCard;