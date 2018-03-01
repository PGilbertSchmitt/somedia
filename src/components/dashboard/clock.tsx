import React, { Component } from "react";

interface IClockState {
  currentTime: Date;
}

class Clock extends Component<{}, IClockState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTime: new Date()
    }

    this.setCurrentTime = this.setCurrentTime.bind(this);
  }

  setCurrentTime() {
    let currentTime = new Date();
    this.setState({ currentTime });
  }

  render() {
    return (
      <div className="simple-clock">
        5:23
      </div>
    );
  }
}

export default Clock;
