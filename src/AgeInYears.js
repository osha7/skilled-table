import React from "react";

class AgeInYears extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <td>{this.props.data} in Years</td>;
  }
}

export default AgeInYears;
