import React, {PropTypes} from 'react';
import axios from 'axios';
import ReportListItem from './ReportListItem.js';
import Video from 'react-html5video';
const url_root = 'http://api.lvh.me:3000/v1/';

class ImagesContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            studies: [],
            isLoading: true
        }
    }

    componentDidMount(){
        axios.get(url_root + 'demographics/5/dicom_studies/2')
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
                <p>{this.state.studies.description}</p>
                <p>{this.state.studies.modality}</p>
                {this.state.studies.dicom_series.map((series) =>
                <div key={series.id}>
                    {series.dicom_images.map((image) =>
                    <div key={image.id} className="image">
                        <video autoPlay loop>
                            <source type="video/mp4" src={image.image_uri}/>
                        </video>
                    </div>
                    )}
                </div>
                )}
            </div>
        );
    }
}

ImagesContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default ImagesContainer;
