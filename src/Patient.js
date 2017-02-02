import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Patient = ({patient, onClick}) => {

  return (
      <Card className="patient-card" onClick={onClick}>
          <CardHeader
          title={patient.last_name + ', ' + patient.first_name}
          subtitle={"Study Count: " + patient.dicom_studies.length}
          actAsExpander={false}
          showExpandableButton={false}
          className="patient-header"

          />
          <CardText expandable={true}>
              {patient.dicom_studies.map((study) =>
                  <p key={study.id}>{study.description}: {study.study_date}</p>
              )};
          </CardText>
      </Card>

  );
};


export default Patient;