import React from 'react';
import './App.css';
import DisplaySimpsons from './components/DisplaySimpsons';
//import axios from 'axios';

/*const exSimpson = {
quote:"Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
character:"Comic Book Guy",
image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
characterDirection:"Right"
}*/

class App extends React.Component{
  constructor (props){
    super(props)
    this.state={
      exSimpson:[]
    }
    this.componentDidMount = this.GetNewQuote();
    this.GetNewQuote=this.GetNewQuote.bind(this)
  }
  GetNewQuote() {
    // Send the request
    fetch('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.json())

      // Use this data to update the state
      .then(data => {
        this.setState({
          exSimpson: data,
        });
    });
  }
  render(){
    return (
      <div className="App">
        {
          this.state.exSimpson
            ? <DisplaySimpsons exSimpson={this.state.exSimpson} />
            :<p>In Progress</p>
        }
        
        <button type="button" onClick={this.GetNewQuote}>Get new quote</button>
      </div>
    );
  }
}

export default App;
