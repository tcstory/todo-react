/**
 * Created by tcstory on 5/27/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

require('../../components/base-css/base-css.css');
require('./app.css');


import Sidebar from '../../components/sidebar/index.jsx';
import Header from '../../components/header/index.jsx';

const App = React.createClass({
    render: function () {
        return (
            <article id="App">
                <Sidebar/>
                <main className="main">
                    <Header/>
                </main>
            </article>
        );
    }
});

ReactDOM.render(<App/>,document.getElementById('page-wrapper'));

