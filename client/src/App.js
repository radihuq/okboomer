import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './cssreset.css';
import './App.css';

import Home from './Components/Home/Home';
import Input from './Components/Input/Input';

const App = () => {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/input" exact component={Input} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;