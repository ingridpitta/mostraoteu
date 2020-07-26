import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import {HomeContent} from "../../components/organisms";

class Home extends Component {
  render() {
    return (
      <GeneralTemplate>
      <HomeContent/>
      </GeneralTemplate>
    );
  }
}

export default Home;
