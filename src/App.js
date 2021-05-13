import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Main from './components/main/Main';

function App() {
    return (
      <div className="App">
        <div className="title">
          <h1><u><strong>IronNutrition</strong></u></h1>
        </div>
        <Main />
      </div>
    );
}

export default App;
