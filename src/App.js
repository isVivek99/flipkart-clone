import React from 'react';
import Navbar from './navbar/Navbar';
import Mainpage from './mainpage/Mainpage'; 

const App = () => {
    return ( 
        <div className="app">
            <Navbar />
            <Mainpage/>
        </div>
     );
}
 
export default App;