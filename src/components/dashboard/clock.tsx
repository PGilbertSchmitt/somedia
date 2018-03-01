import React, { Component } from "react";

interface IClockState {
  currentTime: Date;
}

class Clock extends Component<{}, IClockState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTime: new Date()
    };

    this.setCurrentTime = this.setCurrentTime.bind(this);
  }

  componentDidMount() {
    // I could save the id, but I won't need to turn the clock off, so I won't bother
    window.setTimeout(this.setCurrentTime, 60000);
  }

  setCurrentTime() {
    let currentTime = new Date();
    this.setState({ currentTime });
  }

  formatTime(time: Date): string {
    let timeString = time.toLocaleTimeString();
    return timeString.slice(0, 5);
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
