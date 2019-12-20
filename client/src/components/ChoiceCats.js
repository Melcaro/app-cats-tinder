import React, { Component } from "react";
import { getCats } from "../service/data";
import Cats from "./Cats";

export default class ChoiceCats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      picture1: {},
      picture2: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await getCats();
    this.setState(
      {
        cats: data
      },
      this.randomPicture
    );
  };

  randomPicture = () => {
    const { cats } = this.state;
    this.setState({
      picture1: cats[Math.floor(Math.random() * cats.length)],
      picture2: cats[Math.floor(Math.random() * cats.length)]
    });
  };

  render() {
    const { picture1, picture2 } = this.state;
    return (
      <div>
        <Cats img1={picture1} img2={picture2} />
        <button style={{ width: "30%", height: "50%" }}>Random </button>
      </div>
    );
  }
}
