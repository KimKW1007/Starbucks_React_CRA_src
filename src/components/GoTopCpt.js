import React from 'react';

const GoTopCpt = () => {
  return (
    <React.Fragment>
    <div className="go_top_box">
      <a href="#" className="go_top_btn"><img src={"."+process.env.PUBLIC_URL +"/img/arrow_right_on.png"} alt="Go Top Button"/></a>
    </div>      
    </React.Fragment>
  );
};

export default GoTopCpt;