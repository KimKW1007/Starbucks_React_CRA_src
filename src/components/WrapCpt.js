import React from 'react';
import HeaderCpt from './HeaderCpt';
import MainCpt from './MainCpt';
import FooterCpt from './FooterCpt';

const WrapCpt = () => {
  return (
    <React.Fragment>
      <div id='wrap'>
        <HeaderCpt/>
        <MainCpt/>
        <FooterCpt/>
      </div>
    </React.Fragment>
  );
};

export default WrapCpt;