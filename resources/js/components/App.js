import React from 'react';
import ReactDOM from 'react-dom';
import DataFetching from './DataFetching';
// import PostList from './PostList';

function App() {
    return (
        <div className="container">
            <DataFetching />
            {/* <PostList /> */}
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
