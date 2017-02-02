import React, {PropTypes} from 'react';
import axios from 'axios';
import Video from 'react-html5video';
const url_root = 'http://api.lvh.me:3000/v1/';
import Patient from './Patient.js';

class PatientsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            patients: [],
            isLoading: true
        }
    }

    componentDidMount(){
        axios.get(url_root + 'demographics')
            .then(res => {
                let patients = res.data;
                this.setState({ patients: patients, isLoading: false });
                console.log(this.state);
            });
    }

    render() {
        if(this.state.isLoading==true)
            return (
                <div className="image-container">
                </div>
            );
        else
            return (
                <div className="image-container">
                    {this.state.patients.map((patient) =>
                    <div key={patient.id} className="patient-container">
                        <Patient patient={patient} onClick={this.props.onPatientSelect}/>
                    </div>
                    )}
                </div>
            );
    }
}

PatientsContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default PatientsContainer;
