import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ImagesContainer from './ImagesContainer.js';
import PatientsContainer from './PatientsContainer.js';
import StudiesContainer from './StudiesContainer.js';


class App extends Component {
  constructor(props){
    super(props);
      this.state={
        showPatients: true,
        showStudies: false,
        showImages: false
      };
  }
  onClickHome(){
      this.setState({
          showPatients: true,
          showStudies: false,
          showImages: false
      });
  }
  onPatientSelect(){
      console.log('calling the onpatientselect');
    this.setState({
      showPatients: false,
      showStudies: true
    });
  }
    onStudySelect(){
        console.log('calling the onstudyselect');
        this.setState({
            showStudies: false,
            showImages: true
        });
    }
  render() {
    if(this.state.showPatients==true) {
        return (
            <div className="App">
              <Header onClickHome={this.onClickHome.bind(this)}/>
              <PatientsContainer onPatientSelect={this.onPatientSelect.bind(this)}/>
            </div>
        );
    } else if(this.state.showStudies==true){
        return (
            <div className="App">
                <Header onClickHome={this.onClickHome.bind(this)}/>
                <StudiesContainer onStudySelect={this.onStudySelect.bind(this)}/>
            </div>
        );
    } else if(this.state.showImages==true){
        return (
            <div className="App">
                <Header onClickHome={this.onClickHome.bind(this)}/>
                <ImagesContainer/>
            </div>
        );
    }
  }
}

export default App;
