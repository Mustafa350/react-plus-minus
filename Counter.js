import React, {Component} from 'react';
import './style.css';

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
topla = () => {
  this.setState({
    number: -+this.state.number
  });
}
toplas = () => {
  this.setState({
     number: 0

  });
}

 render(){
   return(
   <div>
   <h1>{this.state.number}</h1>
   <button className="button1" onClick={this.artı}>+</button>
   <button className="button2" onClick={this.eksi}>-</button>
   <button className="button3" onClick={this.topla}>Sayıları Eksi Yap</button>
   <button className="button4" onClick={this.toplas}>Sayıları Sıfırla</button>


    </div>


  );
 }
}



export default Counter;
