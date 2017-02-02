import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Study = ({study, onClick}) => {

  return (
      <Card className="patient-card" onClick={onClick}>
          <CardHeader
          title={study.description + ': ' + study.study_date}
          subtitle={study.modality}
          actAsExpander={false}
          showExpandableButton={false}
          className="patient-header"

          />
      </Card>

  );
};


export default Study;