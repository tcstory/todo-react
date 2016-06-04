/**
 * Created by tcstory on 6/4/16.
 */

import React from 'react';

require('./index.scss');

const Header = React.createClass({
    render: function () {
        return (
            <header className="header">
                <div className="calender-btn">
                    <i className="fa fa-calendar calender-icon" aria-hidden="true"/>
                </div>
                <div className="input-row">
                    <input type="text" className="todo-input" placeholder="Wednesday, 15th October, 2015"/>
                </div>
                <div className="right-part">
                    <div className="bell-wrapper">
                        <div className="number">5</div>
                        <i className="fa fa-bell-o bell-icon" aria-hidden="true"></i>
                    </div>
                    <div className="add-todo-btn">Add Task</div>
                </div>
            </header>
        )
    }
});

export default Header;