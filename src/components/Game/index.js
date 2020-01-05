import React, { Component } from "react";
import Card from "../Card";
import data from "../../data.json";


class Game extends Component {
    state = {
      data
    };
  
    componentDidMount() {
      this.setState({data: data});
    }


    render() {
        return (
          <div>         
            {this.state.data.map(item => (
                <Card
                  imageInfo={item.imageURL}
                />
              ))}        
          </div>
        );
      }
    }
    
    export default Game;