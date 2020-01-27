import React from 'react';
import './App.css';
import Home from './Component/Home';


class App extends React.Component {
  
 render(){
  return (
    <div className="App" >
      <Home />
    </div>
  );
 }
}


export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }
  

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div style={{alignSelf: "center"}}>
//         Stap Watch: {this.state.seconds}
//       </div>
//     );
//     }
// }
// export default App;