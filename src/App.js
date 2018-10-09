import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor (props){
    super(props)
    
    this.state = {
      color: [
        {backgroundColor: this.color()}, {backgroundColor: this.color()}, 
        {backgroundColor: this.color()}, {backgroundColor: this.color()}, 
        {backgroundColor: this.color()}, {backgroundColor: this.color()}, 
        {backgroundColor: this.color()}, {backgroundColor: this.color()}, 
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
        {backgroundColor: this.color()}, {backgroundColor: this.color()},
      ],
      
    }

    this.color = this.color.bind(this)
    this.changeColor = this.changeColor.bind(this)
  
  }
  color() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  changeColor(Id){
    let temp = [...this.state.color] //temp = copy of array
    temp[Id] = {backgroundColor: this.color()}
    console.log(Id)
    this.setState({
      color: temp
    });
  }
  drawDiv(){
    let divArray=[]
    // for (var i=0; i < 5; i++)
    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map( (i) =>
    {
      divArray[i] = <div className="box" style={this.state.color[i]} onMouseOver={() => {this.changeColor(i)}}></div>
        
    })}
    return divArray
  }
  

    
  render() {
   
    return (
      <div>
        {this.drawDiv()}
      </div>
    );
  }
}

export default App;
