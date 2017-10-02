import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main.js';

const App = (props) => {
    return (
        <Main />
    )
}

ReactDOM.render(
    <App />,
    document.querySelector(".app")
);