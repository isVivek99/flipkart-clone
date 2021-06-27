import React from 'react';
import Navbar from './navbar/Navbar';
import Mainpage from './mainpage/Mainpage';
import ExitPage from './exitpoint/ExitPage'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return ( 
        <div className="app">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ Mainpage } />
                    <Route path="/cart"  component = {ExitPage} />
                </Switch>    
            </Router>
          
        </div>
     );
}
 
export default App;