import React, { Component } from 'react'
import '../css/App.css';
import AddAppointements from './AddAppointements';
import ListAppointements from './ListAppointements';
import SearchAppointements from './SearchAppointments';
import { without } from 'lodash';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      myName: 'HAMZA',
      myAppointments: [],
      formDisplay: false
    }
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointement = this.addAppointement.bind(this);
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        });
        this.setState({
          myAppointments: apts
        });
      });

  }

  deleteAppointment(apt) {
    let tempApp = this.state.myAppointments;
    tempApp = without(tempApp, apt);
    this.setState({
      myAppointments: tempApp
    });
    this.props.toggleForm();

  }

  addAppointement(appnointement) {
    let tempApts = this.state.myAppointments;
    tempApts.push(appnointement);
    this.setState({
      myAppointments: tempApts
    });
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    }
    );
  }


  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointements formDisplay={this.state.formDisplay} toggleForm={this.toggleForm} addAppointement={this.addAppointement} />
                <ListAppointements deleteAppointment={this.deleteAppointment} appointments={this.state.myAppointments} />
                <SearchAppointements />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
