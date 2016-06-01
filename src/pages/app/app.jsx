/**
 * Created by tcstory on 5/27/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

require('../../components/base-css/base-css.css');
require('./app.css');


import Sidebar from '../../components/sidebar/index.jsx';

const App = React.createClass({
    render: function () {
        return (
            <article id="App">
                <Sidebar/>
            </article>
        );
    }
});

ReactDOM.render(<App/>,document.getElementById('page-wrapper'));

