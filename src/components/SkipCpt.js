import React from 'react';

const SkipCpt = () => {
  return (
    <React.Fragment>
      <ul id="skip">
        <li><a href="#header" title="메뉴바로가기">메뉴바로가기</a></li>
        <li><a href="#main" title="콘텐츠바로가기">콘텐츠바로가기</a></li>
        <li><a href="#footer" title="하단메뉴바로가기">하단메뉴바로가기</a></li>
      </ul>      
    </React.Fragment>
  );
};

export default SkipCpt;