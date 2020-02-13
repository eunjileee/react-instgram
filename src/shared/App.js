import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, Login } from './pages'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path = "/" component = {Login}/>
                <Route path = "/Login" component = {Main}/>
            </div>
        );
    }
}

export default App;