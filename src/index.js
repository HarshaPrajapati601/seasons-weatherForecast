import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Clock from './Clock';

//app class is borrowing fnt's & methods from base class react.component
class App extends React.Component {
  constructor(props){
      //very frst fn to get called whenever the instance of classs is created
      super(props);
       //super is a refrence to the parents constructor fn
       this.state = {
           latitude: null,
           errorMessage:''
       };
       
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({latitude: position.coords.latitude}), 
        (err) => this.setState({errorMessage: err.message}));
  }
    renderContent(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude){
          return <SeasonDisplay lat={this.state.latitude} />
        }
        return (
        <Spinner message="Please accept the request"/>
        )
    }
  //react says we have to define rednder
    render(){
       return(
        <div className="border red">
            {this.renderContent()}
            <Clock />
        </div>
       )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)