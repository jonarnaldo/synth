/* globals console */
"use strict";

class Synth {

  constructor() {
    // create web audio api context
    this.audioCtxt = new window.AudioContext() || window.webkitAudioContext();
    this.type = 'sine';
    this.attack = 1;
    this.release = 100;
    this.volume = 0.5;
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
      C5:  523.25
    };
  }

  gain () {
    const gain = this.audioCtxt.createGain();

    return gain;
  }

  osc () {
    const oscNode = this.audioCtxt.createOscillator();

    return oscNode;
  }

  connectNodes (n1, n2) {
    n1.connect(n2);
  }

    // create Oscillator node
  playFreq (note, duration, gain) {
    var freq = (typeof note === "string") ? this.noteFreq[note] : note;

    // const oscNode = this.audioCtxt.createOscillator();
    const oscNode = this.osc();
    const gainNode = this.gain();
    const destination = this.audioCtxt.destination;

    oscNode.type = this.type;
    oscNode.frequency.value = freq;

    gainNode.gain.value = gain;

    // osc -> gain -> output
    oscNode.connect(gainNode);
    gainNode.connect(destination);

    oscNode.start(this.audioCtxt.currentTime);

    console.log("duration set to " + duration);

    setTimeout(function () {
      oscNode.disconnect(gainNode);
      gainNode.disconnect(destination)
    }, duration)

    oscNode.stop(this.audioCtxt.currentTime + duration);

    oscNode.onended = function () {
      console.log("ended");
    };
  }
}

//////// TODO ////////
// create freq map
// create component plug architecture

