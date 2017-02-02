import React from 'react';

const ReportListItem = ({client}) => {
    return (
        <li key={client.id}>{client.name}: {client.reports.map(report =>
            <p key={report.id}>{report.name} = {report.value}</p>
        )}</li>
    );
};

ReportListItem.propTypes = {

}
;

export default ReportListItem;