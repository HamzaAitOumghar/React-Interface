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
      orderBy: 'petName',
      queryText:'pe',
      orderDir: 'asc',
      formDisplay: false
    }
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointement = this.addAppointement.bind(this);
    this.changeOrder=this.changeOrder.bind(this);
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
  changeOrder(oBy,oDir){
    this.setState({
      orderBy: oBy,
      orderDir: oDir,
    });
  }

  render() {

    let order;
    let filteredApts = this.state.myAppointments;
    if (this.state.orderDir === 'asc') {
      order = 1;
    }
    else {
      order = -1;
    }

    filteredApts=filteredApts.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      }
      else {
        return 1 * order;
      }
    }).filter(item=>{
      return (item['petName'].toLowerCase().includes(this.state.queryText.toLowerCase())||
      item['ownerName'].toLowerCase().includes(this.state.queryText.toLowerCase())||
      item['aptNotes'].toLowerCase().includes(this.state.queryText.toLowerCase()));
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointements formDisplay={this.state.formDisplay} toggleForm={this.toggleForm} addAppointement={this.addAppointement} />
                <SearchAppointements orderBy={this.state.orderBy} orderDir={this.state.orderDir} changeOrder={this.changeOrder} />
                <ListAppointements deleteAppointment={this.deleteAppointment} appointments={filteredApts} />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
