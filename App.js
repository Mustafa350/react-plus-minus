import React, {Component} from 'react';


class Counter extends Component {
state = {
  number:0
};
eksi = () => {
  this.setState({
    number: --this.state.number
  });
};
artı = () => {
  this.setState({
    number: ++this.state.number
  });
}
 render(){
   return(
   <div>
   <h1>{this.state.number}</h1>
   <button onClick={this.artı}>+</button>
   <button  onClick={this.eksi}>-</button>
    </div>


  );
 }
}

export default Counter;
