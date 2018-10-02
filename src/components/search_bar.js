import React, { Component } from 'react';

class SearchBar extends Component {

// constructor method is how we initialize/define state in class based component (functional components = NO STATE)
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

// ***************
//   render() {
//     return <input onChange={this.onInputChange} />
//   }
// }
// (below is onInputChange method defined within the class)
// onInputChange(event){
//   console.log(event.target.value);
// }
// ***************
// refactored with ES6 below:


// First Refactor:
//   render() {
//     return <input onChange= {(event) => {console.log(event.target.value)}}/>
//   }


// Further refactor - if there is a single argument in a SINGLE LINE arrow fn,
// you can drop the "( )" around the argument as well as the {} around the function body

// render() {
//   return <input onChange={event => console.log(event.target.value)}/>
// }

  render() {
    return (
      <div>
          <input
            value = {this.state.term} //this addition creates controlled component
            onChange={event => this.setState({ term : event.target.value})}/>
      </div>
    );
  }
}


export default SearchBar;
