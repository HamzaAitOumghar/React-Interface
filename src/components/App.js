import React from 'react';
import '../css/App.css';
import AddAppointements from './AddAppointements';
import ListAppointements  from './ListAppointements';
import SearchAppointements from './SearchAppointments';


function App() {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointements />
              <ListAppointements />
              <SearchAppointements />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
