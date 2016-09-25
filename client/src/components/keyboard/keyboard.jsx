import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Synth } from '../../exports/osc.js'

import styles from './keyboard.less';

export default class Keyboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      synth: new Synth()
    };
  }

  playNote(synth) {
    synth.playFreq(this);
  }

  render() {
    return (
      <div className="mono-keys">
        {
          Object.keys(this.state.synth.noteFreq).map((note) => {
            const freq = this.state.synth.noteFreq[note]

            return (
              <button
                type="button"
                id={note} key={note}
                className="mono-key"
                onClick={this.playNote.bind(note, this.state.synth)}
              >{note}
              </button>
            )
          })
        }
      </div>
    )
  }
}
