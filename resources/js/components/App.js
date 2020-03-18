import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
           This is a sample component - run watch
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
