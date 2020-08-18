import React, { Component } from "react";
import { PreLaunchContent } from "../../components/organisms";

class PreLaunch extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <main style={{ maxWidth: "100vw", width: "100%" }}>
        <PreLaunchContent />
      </main>
    );
  }
}

export default PreLaunch;
