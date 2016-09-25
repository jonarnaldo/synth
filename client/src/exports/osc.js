/* globals console */
"use strict";

class Synth {

  constructor() {
    // create web audio api context
    this.audioContext = new window.AudioContext() || window.webkitAudioContext();

    // set defaults
    this.oscDefaults = {
      type: 'sine'
    };

    this.noteFreq = {
      C4:  261.63,
      C4s: 277.18,
      D4:  293.66,
      D4s: 311.13,
      E4:  329.63,
      F4:  349.23,
      F4s: 369.99,
      G4:  392.00,
      G4s: 415.30,
      A4:  440.00,
      A4s: 466.16,
      B4:  493.88,
      C5:  523.25,
      C5s: 554.37,
      D5:  587.33,
      D5s: 622.25,
      E5:  659.25,
      F5:  698.46,
      F5s: 749.99
    };
  }

    // create Oscillator node
  playFreq (note, duration = 0.5) {
    const freq = (typeof note === "string") ? this.noteFreq[note] : note;
    const destination = this.audioContext.destination;
    const oscNode = this.audioContext.createOscillator();

    oscNode.frequency.value = freq;
    oscNode.type = this.oscDefaults.type;

    oscNode.connect(destination);
    oscNode.start(this.audioContext.currentTime);

    console.log("currentTime:" + this.audioContext.currentTime + "duration:" +  duration);

    oscNode.stop(this.audioContext.currentTime + duration);

    oscNode.onended = function () {
      oscNode.disconnect(destination);
      console.log("ended");
      // do something here
    };
  }

  connectNodes (n1, n2) {
    n1.connect(n2);
  }
}

class Gain {
  constructor(volume) {
    const gainNode = this.audioCtxt.createGain();

    gainNode.gain.volume = volume || 1;
  }
}

//////// TODO ////////
// create freq map
// create component plug architecture

export { Synth, Gain };
