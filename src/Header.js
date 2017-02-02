import React from 'react';

const Header = ({onClickHome}) => {

    return (
    <div>
        <div className="App-header">
            <img onClick={onClickHome} src='https://media.glassdoor.com/sqll/155178/lumedx-squarelogo-1373582727679.png' className="App-logo" alt="logo" />
            <h2>HealthView CardioPACS</h2>
        </div>
        <p className="App-intro">
        </p>
    </div>
    );
};


export default Header;