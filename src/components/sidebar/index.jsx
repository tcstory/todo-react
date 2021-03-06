import React from 'react';
import cx from 'classnames';

import {STATUS} from '../constants/';
require('./index.scss');
const Sidebar = React.createClass({
    propTypes: {
        __changeTodoType: React.PropTypes.func
    },
    getInitialState: function() {
        return {selectedItem: -1, selectedSubItem: -1};
    },
    handleItemClick: function(which) {
        if (which === 0) {
            if (this.state.selectedItem === 0) {
                this.setState({
                    selectedItem: -1,
                    selectedSubItem: -1
                });
                this.props.__changeTodoType(STATUS.ALL);
            } else {
                this.setState({selectedItem: 0});
            }
        }
    },
    handleSubItemClick: function(which) {
        this.setState({selectedSubItem: which});
        switch (which) {
            case 0:
                this.props.__changeTodoType(STATUS.DONE);
                return;
            case 1:
                this.props.__changeTodoType(STATUS.ONGOING);
                return;
            case 2:
                this.props.__changeTodoType(STATUS.UNFINISHED);
                return;
            default:
        }
    },
    render: function() {
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
                    <div className="search-icon">
                        <i className="fa fa-search" aria-hidden="true"/>
                    </div>
                    <input type="text" className="search-input" placeholder="Search"/>
                </div>
                <div className="category-list">
                    <div className={cx('category-item-wrapper', {
                        'open': this.state.selectedItem === 0
                    })}>
                        <div className="category-item" onClick={this.handleItemClick.bind(this, 0)}>
                            <div className="icon-wrapper">
                                <div className="icon">
                                    <i className="fa fa-star-half-o" aria-hidden="true"/>
                                </div>
                            </div>
                            <p className="category-text">All Tasks</p>
                        </div>
                        <div className="category-subitem-wrapper">
                            <div className={cx('category-subitem', 'completed-tasks', {
                                selected: this.state.selectedSubItem === 0
                            })} onClick={this.handleSubItemClick.bind(this, 0)}>
                                <div className="icon"></div>
                                <p className="subitem-text">Completed Tasks</p>
                            </div>
                            <div className={cx('category-subitem', 'ongoing-tasks', {
                                selected: this.state.selectedSubItem === 1
                            })} onClick={this.handleSubItemClick.bind(this, 1)}>
                                <div className="icon"></div>
                                <p className="subitem-text">Ongoing Tasks</p>
                            </div>
                            <div className={cx('category-subitem', 'unfinished-tasks', {
                                selected: this.state.selectedSubItem === 2
                            })} onClick={this.handleSubItemClick.bind(this, 2)}>
                                <div className="icon"></div>
                                <p className="subitem-text">Unfinished Tasks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
});

export default Sidebar;
