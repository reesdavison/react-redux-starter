import React, {Component } from "react";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.exampleProp);
    return (
      <div>
        
      </div>
    )
  }
}

export default ExampleComponent;
