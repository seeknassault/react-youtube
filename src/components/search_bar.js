import React,{ Component } from 'react';

/*const SearchBar = ()=>{
  return <input />;
};*/
//We will be using class componenet with functional(dumb) component
//Every class must have render function and it shuld reutun jsx



//Only Class based components have state no functional based componenets
class SearchBar extends Component{
//Each time a object of this class is called constructor will be initialised
//All javascript classes has constructor
  constructor(props){
    super(props);
    //THis is for recording
    //A State is basically a plain javascript object that exist on any componenet that is a class based component
    //Whenever we use state we initialize it by creating a new object and assigning it to this.state
    //THe object we pass also contains prperties that we want to record on the state
    //term is the property name
    //In construct only we use this.state= elsewhere we use this.setState
    this.state={ term: ''};
  }

  /*/////////////THe original simple render
    render(){
      return <input onChange={(event)=>  console.log(event.target.value)} />;
    }
*/


//Render is now updating as we are chaning our entry in Search bar
/*
  //Whenever we are using a jsx terms in html use curly braces
  Value of the Input:{this.state.term}

  */


render(){
  return(
    <div className='search-bar'>
  <input
  value={this.state.term}
  onChange={(event)=> this.onInputChange(event.target.value)} />

  </div>
);
}
onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
}
  /*  onInputChange(event) {
      console.log(event.target.value);
    }*/
}
//Handling events is two step
//1st Adding Event Handler
//2nd pass the event handler to monitor that want this events
//For importing componenets to index.js
export default SearchBar;


//A state a javascript object that is used to record and react to user events
//Each class based componenets that we define has it's own state
//Whenever a class based componenet changes state forces that class to re-render
//along with it's childs




/*
//Controlled Field::-
it's a formelement like input whose value is set by the state rather than other way around
Until now our changing input was changing the state but now state is changing the input

Until now chaning input was not chaning the value it was just triggering an event
but now as the state changes value of input also changes
*/
