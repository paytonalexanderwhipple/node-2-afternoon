import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import routes from './routes.jsx';
import './App.css';

class App extends Component {


  render() {
    return (
      <div>
        <nav className="nav-bar basic">

          <Link to='/'>
            <button>Home</button>
          </Link>

          <Link to='/display'>
            <button>Display</button>
          </Link>

        </nav>
        
        <div className='content'>
          {routes}
        </div>

      </div>
    );
  }
}

export default App;
