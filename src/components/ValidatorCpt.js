import React from 'react';

const ValidatorCpt = () => {
  return (
    <React.Fragment>
      <div className="validator">
        <p className="validator_html">
          <a href="http://validator.kldp.org/check?uri=referer">
            <img src="http://validator.kldp.org/w3cimgs/validate/html5-blue.png" alt="Valid HTML 5" height="15" width="80" />
          </a>
        </p>
        <p className="validator_css">
          <a href="http://jigsaw.w3.org/css-validator/check/referer">
            <img style={{ border: '0', width: '80px', height: '15px' }} src="http://validator.kldp.org/w3cimgs/validate/css-blue.png" alt="올바른 CSS입니다!" />
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default ValidatorCpt;
