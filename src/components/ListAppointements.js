import React, { Component } from 'react';

import { FaTrashAlt ,FaClock} from "react-icons/fa";
import Moment from 'react-moment';


export default class ListAppointements extends Component {
    render() {
        return (
            this.props.appointments.map((item, i) => {
                return (
                    <div className="row my-1" key={i}>

                        <React.Fragment >
                            <div className="col-3 col-md-3">
                                <button className="btn btn-outline-danger" onClick={()=>{this.props.deleteAppointment(item)}}><FaTrashAlt /></button>
                            </div>
                            <div className="col-6 col-md-6">
                                <h5>{item.petName}</h5>
                                <p>{item.ownerName}</p>
                                <p>{item.aptNotes}</p>
                            </div>
                            <div className="col-3 col-md-3">
                                <Moment  parse="YYYY-MM-DD HH:mm" format="MMM-D h:mma">{item.aptDate}</Moment>
                            </div>
                        </React.Fragment>
                    </div>
                )
            })
        );
    }
}
