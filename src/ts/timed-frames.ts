export class TimedFrames {
  reset: boolean;
  tPrev: number;
  renderCallback: (dt: number) => void;

  constructor(renderCallback: (dt: number) => void){
    this.reset = true
    this.tPrev = 0
    this.renderCallback = renderCallback
  }

  requestReset(){
    this.reset = true
  }

  requestFrame(){
    window.requestAnimationFrame(this._renderFrame.bind(this))
  }

  _renderFrame(t: number) {
    if (this.reset) {
      this.reset = false
      this.tPrev = t
    }

    const dt = (t - this.tPrev) / 1000 // in seconds
    // console.log('dt', dt)
    this.renderCallback(dt)

    this.tPrev = t
  }
}
