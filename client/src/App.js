import React from 'react';
import { Router } from '@reach/router'
import Main from './views/main'
import ShowOne from './components/DisplayOne';
import Update from './views/update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/' />
        <ShowOne path='/product/:id' />
        <Update path='/update/:id'/>
      </Router>
    </div>
  );
}

export default App;
