/**
 * Created by tcstory on 6/1/16.
 */

import React from 'react';

require('./index.scss');


const Sidebar = React.createClass({
    render: function () {
        return (
            <aside className="sidebar">
                <div className="header-row">
                    <div className="setting-btn">
                        <i className="fa fa-cog" aria-hidden="true"/>
                    </div>
                </div>
                <div className="info-card">
                    <div className="user-avatar"></div>
                    <div className="user-name">中华田园犬</div>
                </div>
                <div className="search-row">
                    <div className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></div>
                    <input type="text" className="search-input" placeholder="Search"/>
                </div>
                <div className="category-list">
                    <div className="category-item">
                        <div className="icon-wrapper">
                            <div className="icon">
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        <p className="category-text">All Tasks</p>
                    </div>
                    <div className="category-subitem completed-tasks">
                        <div className="icon"></div>
                        <p className="subitem-text">Completed Tasks</p>
                    </div>
                    <div className="category-subitem unfinished-tasks">
                        <div className="icon"></div>
                        <p className="subitem-text">Unfinished Tasks</p>
                    </div>
                </div>
            </aside>
        )
    }
});

export default Sidebar;