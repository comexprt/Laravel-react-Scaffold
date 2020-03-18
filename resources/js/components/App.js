import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

function App() {
    return (
        <div className="container">
            <Home />
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
