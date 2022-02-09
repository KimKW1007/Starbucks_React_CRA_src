import React from 'react';

const FooterCpt = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="container">
            <div className="top">
              <div className="wrap">
                <ul>
                  <li className="mobile">
                    <dl>
                      <dt><a href="#" title="CUSTOMER SERVICE & IDEAS">CUSTOMER SERVICE & IDEAS</a></dt>
                      <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                      <dd><a href="#" title="고객의 소리">고객의 소리</a></dd>
                      <dd className="mobile_arrow"><a href="#" title="스타벅스 이용 팁">스타벅스 이용 팁</a></dd>
                      <dd><a href="#" title="고객 경험 설문조사">고객 경험 설문조사</a></dd>
                      <dd><a href="#" title="비회원 전자영수증 조회">비회원 전자영수증 조회</a></dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt><a href="#" title="COMPANY">COMPANY</a></dt>
                      <dd><a href="#" title="한눈에 보기">한눈에 보기</a></dd>
                      <dd><a href="#" title="스타벅스 사명">스타벅스 사명</a></dd>
                      <dd className="mobile_arrow"><a href="#" title="스타벅스 소개">스타벅스 소개</a></dd>
                      <dd><a href="#" title="국내 뉴스룸">국내 뉴스룸</a></dd>
                      <dd><a href="#" title="세계의 스타벅스">세계의 스타벅스</a></dd>
                      <dd><a href="#" title="글로벌 뉴스룸">글로벌 뉴스룸</a></dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt><a href="#" title="CORPORATE SALES">CORPORATE SALES</a></dt>
                      <dd><a href="#" title="단체 및 기업 구매 안내">단체 및 기업 구매 안내</a></dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt><a href="#" title="PARTNERSHIP">PARTNERSHIP</a></dt>
                      <dd><a href="#" title="신규 입점 제의">신규 입점 제의</a></dd>
                      <dd><a href="#" title="협력 고객사 등록신청">협력 고객사 등록신청</a></dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt><a href="#" title="ONLINE COMMUNITY">ONLINE COMMUNITY</a></dt>
                      <dd><a href="#" title="페이스북">페이스북</a></dd>
                      <dd><a href="#" title="트위터">트위터</a></dd>
                      <dd><a href="#" title="유튜브">유튜브</a></dd>
                      <dd><a href="#" title="인스타그램">인스타그램</a></dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt><a href="#" title="RECRUIT">RECRUIT</a></dt>
                      <dd><a href="#" title="채용 소개">채용 소개</a></dd>
                      <dd><a href="#" title="채용 지원하기">채용 지원하기</a></dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
            <div className="middle">
              <div className="wrap">
                <span><a href="#" title="여성가족부장관상"><img src={"."+process.env.PUBLIC_URL +"/img/footer_award23.jpg"} alt="여성가족부장관상"/></a></span>
                <span><a href="#" title="행정안전부장관 표창"><img src={"."+process.env.PUBLIC_URL +"/img/footer_award24.jpg"} alt="행정안전부장관 표창"/></a></span>
                <span><a href="#" title="농림축산식품부 장관상"><img src={"."+process.env.PUBLIC_URL +"/img/footer_award25.jpg"} alt="농림축산식품부 장관상"/></a></span>
                <span><a href="#" title="국회산업통상자원중소벤처위원회장상"><img src={"."+process.env.PUBLIC_URL +"/img/footer_award26.jpg"} alt="국회산업통상자원중소벤처위원회장상"/></a></span>
                <span><a href="#" title="태통령직속 일자리위원회 부위원장상"><img src={"."+process.env.PUBLIC_URL +"/img/footer_award27.jpg"} alt="태통령직속 일자리위원회 부위원장상"/></a></span>
                <span><a href="#" title="동반성장위원회 위원장상"><img src={"."+process.env.PUBLIC_URL +"/img/footer_award28.jpg"} alt="동반성장위원회 위원장상"/></a></span>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <div>
                    <span><a href="#" title="개인정보처리방침">개인정보처리방침</a></span>
                    <span><i></i></span>
                    <span><a href="#" title="영상정보처리기기 운영관리 방침">영상정보처리기기 운영관리 방침</a></span>
                    <span><i></i></span>
                    <span><a href="#" title="홈페이지 이용약관">홈페이지 이용약관</a></span>
                    <span><i></i></span>
                    <span><a href="#" title="위치정보 이용약관">위치정보 이용약관</a></span>
                    <span><i></i></span>
                    <span><a href="#" title="스타벅스 카드 이용약관">스타벅스 카드 이용약관</a></span>
                    <span><i></i></span>
                    <span><a href="#" title="비회원 이용약관">비회원 이용약관</a></span>
                    <span><i></i></span>
                    <span><a href="#" title="My DT Pass 서비스 이용약관">My DT Pass 서비스 이용약관</a></span>
                    <span><i></i></span>
                    <span><a href="#" title="윤리경영 핫라인">윤리경영 핫라인</a></span>
                  </div>
                </li>
                <li>
                  <div>
                    <span><a href="#" title="찾아오시는 길">찾아오시는 길</a></span>
                    <span><a href="#" title="신규입점제의">신규입점제의</a></span>
                    <span><a href="#" title="사이트 맵">사이트 맵</a></span>
                  </div>
                </li>
                <li>
                  <address>
                    <p>사업자등록번호 : 201-81-21515</p>
                    <p>(주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭</p>
                    <p>TEL : 1522-3232</p>
                    <p>개인정보 책임자 : 하익성</p>
                  </address>
                </li>
                <li>
                  <p>&copy; 2021 Starbucks Coffee Company. All Rights Reserved.</p>
                </li>
              </ul>
            </div>
        </div>
      </footer>      
    </React.Fragment>
  );
};

export default FooterCpt;