import { Component } from 'react';
import QuoteBox from '../QuoteBox/QuoteBox';
import Info from '../Info/Info';
import './App.styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#fff',
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const { color } = this.state;
    let newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    while (color === newColor) {
      newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    this.setState({ color: newColor });
  }

  render() {
    const { color } = this.state;
    return (
      <div id="container" style={{ backgroundColor: color, color }}>
        <QuoteBox bgColor={color} changeColor={this.changeColor} />
        <Info />
      </div>
    );
  }
}

export default App;
