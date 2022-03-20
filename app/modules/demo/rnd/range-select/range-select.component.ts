import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-select',
  templateUrl: './range-select.component.html',
  styleUrls: ['./range-select.component.css']
})
export class RangeSelectComponent implements OnInit {
 
  propTypes:any = {
    min: 0,
    max: 0,
    minValue: 0,
    maxValue: 0,
  };
  state = {
    which: null,
    minPos:0,
    maxPos:0,
  }
  @Input() min
  @Input() max
  @Output() change
  //<RangeSlider min={40} max={380} onChange={this.onChange} />
  constructor() { 
    /*const { min, max, minValue, maxValue } = {min,max };
    const minV = minValue || min;
    const maxV = maxValue || max;
    const total = max - min;

    const minPos = (minV - min) / total;
    const maxPos = (maxV - min) / total;

    this.state = {
      which: null,
      minPos,
      maxPos,
    }*/
  }

  ngOnInit() {
    const {minPos, maxPos} = this.state;
  const minPosition = `${minPos * 100}%`;
  const maxPosition = `${maxPos * 100}%`;
  const tWidth = `${(maxPos - minPos) * 100}%`;

  /*
  return(
      <div className="rangeslider">
      <div className="rangeslider-label">foo</div>
      <div ref={r => this.track = r} className="rangeslider-track">
        <div className="rangeslider-track-active" style={{
          left: minPosition,
          width: tWidth,
        }} />
        <div
          className="rangeslider-track-button-min"
          onMouseDown={e => this.onMouseDown(e, 'minPos')}
          style={{left:minPosition}}
        />
        <div
          className="rangeslider-track-button-max"
          onMouseDown={e => this.onMouseDown(e, 'maxPos')}
          style={{left:maxPosition}}
        />
      </div>
      <div className="rangeslider-label">foo</div>
    </div>
    );*/
  }/*
  getMousePosition = e => {
    const trackRect = this.track.getBoundingClientRect();
    const x = (e.clientX - trackRect.left) / trackRect.width;
    return x;
  };

  onMouseDown = (e, which) => {
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);
    this.setState({which});
  };

  onMouseMove = e => {
    const { which, minPos, maxPos } = this.state;
    let newPos = this.getMousePosition(e);

    if(which === "minPos"){
      if(newPos < 0){
        newPos = 0;
      }else if(newPos > maxPos){
        newPos = maxPos;
      }
    }else{
      if(newPos > 1){
        newPos = 1;
      }else if(newPos < minPos){
        newPos = minPos;
      }
    }
    if(this.state[which] !== newPos){
      this.setState({[which]:newPos}, this.onChange);
    }
  };

  onMouseUp = e => {
    this.cleanUp();
    this.setState({which: null});
  };

  componentWillUnmount(){
    this.cleanUp();
  };

  cleanUp = () => {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);
  };

  onChange = () => {
    const {minPos, maxPos} = this.state;
    const {min, max} = this.props;
    const total = max - min;
    const minVal = (total * minPos) + min;
    const maxVal = (total * maxPos) + min;
    this.props.onChange({min:minVal, max: maxVal, target:{min:minVal, max: maxVal}})
  }*/

  render(){

    

    
  }

}
//https://stackblitz.com/edit/rangeslider?file=RangeSlider%2Findex.js