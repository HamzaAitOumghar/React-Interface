import React, { Component } from 'react'
import '../css/App.css';
import AddAppointements from './AddAppointements';
import ListAppointements from './ListAppointements';
import SearchAppointements from './SearchAppointments';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      myName: 'HAMZA',
      myAppointments: []
    }
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
        console.log(this.state);

      });

  }

  render() {

    const listItems = this.state.myAppointments.map(item => {
      return (<div>
        <div>{item.petName}</div>
        <div>{item.ownerName}</div>
      </div>)

    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {listItems}
                <AddAppointements />
                <ListAppointements />
                <SearchAppointements />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
