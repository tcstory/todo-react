import React from 'react';

require('./index.scss');

import createScrollBar from '../scrollbar';

const TodoList = React.createClass({
    componentDidMount: function () {
        createScrollBar({
            target: document.body.querySelector('.todo-list')
        })  
    },
    render: function () {
        return (
            <article className="todo-list">
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                            <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
                <div className="todo-item">
                    <div className="user-avatar-wrapper">
                        <div className="user-avatar"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="todo-item-title">
                            <p className="todo-item-text">Landing page for Secret Project</p>
                            <div className="status-label">Done</div>
                        </div>
                        <p className="todo-item-create-time">2016.05.24</p>
                    </div>
                    <div className="checkout-box">
                        <i className="fa fa-check-square checkout-icon" aria-hidden="true"/>
                    </div>
                </div>
            </article>
        )
    }
});



export default TodoList;