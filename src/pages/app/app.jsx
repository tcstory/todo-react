/**
 * Created by tcstory on 5/27/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

require('../../components/base-css/base-css.css');
require('./app.css');

const App = React.createClass({
    render: function () {
        return (
            <article id="App">
            </article>
        );
    }
});

ReactDOM.render(<App/>,document.getElementById('page-wrapper'));

