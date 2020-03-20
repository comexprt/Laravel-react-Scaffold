import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from './ContactFunction/Home';
import Add from './ContactFunction/Add';
import Edit from './ContactFunction/Edit';


function App() {
    return (
        <Router>
             <Switch>
                   <Route path="/" exact component={Home} />
                   <Route path="/add" exact component={Add} />
                   <Route path="/:id/edit" exact component={Edit} />
                   
             </Switch>
        </Router>
        
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
