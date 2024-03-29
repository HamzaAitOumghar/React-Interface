import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";

export default class AddAppointements extends Component {

    constructor() {
        super();
        this.state = {
            petName: '',
            ownerName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: ''
        }

        this.handelChange = this.handelChange.bind(this);
        this.handelAdd = this.handelAdd.bind(this);

    }

    handelChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handelAdd(e) {
        e.preventDefault();
        let tempApt = {
            petName: this.state.petName,
            ownerName: this.state.ownerName,
            aptDate: this.state.aptDate + ' '+this.state.aptTime,
            aptNotes: this.state.aptNotes
        }
        
        this.props.addAppointement(tempApt);

        this.setState({
            petName: '',
            ownerName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: ''
        })

    }


    render() {
        return (
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-appointment')
            }>
                <div className="apt-addheading card-header bg-primary text-white hover"
                    onClick={() => {
                        this.props.toggleForm()
                    }}>
                    <FaPlus /> Add Appointment
            </div>
                <div className="card-body">
                    <form id="aptForm" noValidate onSubmit={this.handelAdd}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="petName"
                                readOnly>
                                Pet Name
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="petName"
                                    placeholder="Pet's Name"
                                    value={this.state.petName}
                                    onChange={this.handelChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="ownerName"
                            >
                                Pet Owner
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ownerName"
                                    placeholder="Owner's Name"
                                    value={this.state.ownerName}
                                    onChange={this.handelChange}

                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="aptDate"
                            >
                                Date
                  </label>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="aptDate"
                                    id="aptDate"
                                    value={this.state.aptDate}
                                    onChange={this.handelChange}

                                />
                            </div>
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="aptTime"
                            >
                                Time
                             </label>
                            <div className="col-md-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="aptTime"
                                    id="aptTime"
                                    value={this.state.aptTime}
                                    onChange={this.handelChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                                Apt. Notes
                            </label>
                            <div className="col-md-10">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    cols="50"
                                    name="aptNotes"
                                    id="aptNotes"
                                    placeholder="Appointment Notes"
                                    value={this.state.aptNotes}
                                    onChange={this.handelChange}

                                />
                            </div>
                        </div>

                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block ml-auto"
                                >
                                    Add Appointment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
