import React, {PropTypes} from 'react';
import axios from 'axios';
import Video from 'react-html5video';
const url_root = 'http://api.lvh.me:3000/v1/';
import Study from './Study.js';

class StudiesContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            studies: [],
            isLoading: true
        }
    }

    componentDidMount(){
        axios.get(url_root + 'demographics/2/dicom_studies')
            .then(res => {
                let studies = res.data;
                this.setState({ studies: studies, isLoading: false });
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
                    {this.state.studies.map((study) =>
                    <div key={study.id} className="patient-container">
                        <Study study={study} onClick={this.props.onStudySelect}/>
                    </div>
                    )}
                </div>
            );
    }
}

StudiesContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default StudiesContainer;
