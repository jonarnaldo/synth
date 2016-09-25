import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Keyboard from './components/keyboard/keyboard.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="module-container">
        <Keyboard/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
