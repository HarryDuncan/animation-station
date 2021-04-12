import fs from 'fs';


export const play = (file : any, audioContext : any) => {
 
    return new Promise((resolve, reject) => {
      fs.readFile(file.path, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        console.log(data)
        audioContext.decodeAudioData(toArrayBuffer(data), (buffer) => {
          playFromBuffer(buffer);
          resolve();
        });
      });
    });
  }

export const playFromBuffer = (buffer : any , context : any, data : any) => {
    // this.stop(false);
    
    source = initSource();
    // this.offsetTime = 0;
    // this.songDuration = this.buffer.duration;
    // this.songStartingTime = this.context.currentTime;
    // this.playbackTime = 0;
    startPlaying(source, );
  }

const startPlaying = (source : any, data : any) => {
    source.start(0, 0);
  }

const initSource = () => {
    let source = this.context.createBufferSource();
    let gainNode = this.context.createGain();
    let analyser = this.context.createAnalyser();
    source.buffer = this.buffer;
    source.connect(this.gainNode);
    source.connect(this.analyser);
    // gainNode.connect(this.context.destination);
    gainNode.gain.value = this.volume;
    // source.onended = this.onSongFinished;

    return source

  }

const toArrayBuffer = (buffer: any) =>  {
    const ab = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buffer.length; ++i) {
      view[i] = buffer[i];
    }
    return ab;
  }

  // seek(playbackTime) {
  //   if (this.isPlaying) {
  //     this.stop(false);
  //     this.initSource();
  //     this.songStartingTime = this.context.currentTime - playbackTime;
  //     this.playbackTime = playbackTime;
  //     this.startPlaying();
  //   } else {
  //     this.songStartingTime = this.context.currentTime - playbackTime;
  //     this.playbackTime = playbackTime;
  //   }
  // }

  // restart() {
  //   this.seek(0);
  // }

  // getCurrentPlayingTime() {
  //   if (typeof this.songStartingTime !== 'undefined') {
  //     return this.context.currentTime - this.songStartingTime;
  //   }
  // }

  // getSongDuration() {
  //   return this.songDuration;
  // }

  // onSongFinished() {
  //   this.isPlaying = false;
  //   this.songDuration = undefined;
  //   this.songStartingTime = undefined;
  //   this.emit('songFinished');
  // }

  // stop(report = true) {
  //   if (this.source) {
  //     if (!report) {
  //       this.source.onended = undefined;
  //     }
  //     this.source.stop(0);
  //     this.gainNode = null;
  //   }
  // }

  // pause() {
  //   this.isPlaying = false;
  //   this.pausePlaybackTime = this.playbackTime;
  //   this.context.suspend();
  // }

  // resume() {
  //   this.isPlaying = true;
  //   this.context.resume();
  //   if (this.pausePlaybackTime !== this.playbackTime) {
  //     this.seek(this.playbackTime);
  //   }
  // }

  // mute() {
  //   if (this.gainNode) {
  //     this.savedGainValue = this.gainNode.gain.value;
  //     this.gainNode.gain.value = 0;
  //   }
  // }

  // unmute(volume) {
  //   if (this.gainNode) {
  //     this.gainNode.gain.value = volume || this.savedGainValue;
  //   }
  // }

  // setVolume(volume) {
  //   const fraction = parseInt(volume, 10) / MAX_VOLUME;
  //   this.volume = fraction * fraction; // Linear (x) doesn't sound as good
  //   if (this.gainNode) {
  //     this.gainNode.gain.value = this.volume;
  //   }
  // }

 

  // getFrequency(frequencyData) {
  //   if (!this.analyser) {
  //     return;
  //   }
  //   if (!frequencyData) {
  //     frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
  //   }
  //   this.analyser.getByteFrequencyData(frequencyData);
  //   return frequencyData;
  // }

  // frequencyToIndex(frequency, sampleRate, frequencyBinCount) {
  //   const nyquist = sampleRate / 2;
  //   const index = Math.round(frequency / nyquist * frequencyBinCount);
  //   return this.clamp(index, 0, frequencyBinCount);
  // }

  // analyserAverage(frequencies, minHz, maxHz) {
  //   const div = 255;
  //   const sampleRate = this.analyser.context.sampleRate;
  //   const binCount = this.analyser.frequencyBinCount;
  //   let start = this.frequencyToIndex(minHz, sampleRate, binCount);
  //   const end = this.frequencyToIndex(maxHz, sampleRate, binCount);
  //   const count = end - start;
  //   let sum = 0;
  //   for (; start < end; start++) {
  //     sum += frequencies[start] / div;
  //   }
  //   return count === 0 ? 0 : (sum / count);
  // }

  // clamp(value, min, max) {
  //   return Math.min(Math.max(value, min), max);
  // }
