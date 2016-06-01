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
            </aside>
        )
    }
});

export default Sidebar;