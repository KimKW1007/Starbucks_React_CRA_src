import React from 'react';

const HeaderCpt = () => {
  return (
    <React.Fragment>
      <header id="header">
        <div className="container">
          <div id="logo_box">
            <h1>
              <a href="#" title="logo"><img src={"."+process.env.PUBLIC_URL +"/img/logo.png"} alt="logo" /></a>
            </h1>
          </div>
          <div id="nav_box">
            <aside id="aside">
              <ul>
                <li><a href="#" title="Sign In">Sign In</a></li>
                <li><a href="#" title="My Starbucks">My Starbucks</a></li>
                <li><a href="#" title="Customer Service & Ideas">Customer Service & Ideas</a></li>
                <li><a href="#" title="Find a Store">Find a Store</a></li>
                <li>
                  <div className="search">
                    <input type="text" name="searchBox" id="searchBox" placeholder="통합 검색" />
                    <a href="#" title="통합 검색">
                      <img src={"."+process.env.PUBLIC_URL +"/img/icon_magnifier_black.png"} alt="통합 검색" />
                    </a>
                  </div>
                </li>
              </ul>
            </aside>
            <nav id="nav">
              <ul>
                <li>
                  <a href="#" className="main_menu" title="COFFEE">COFFEE</a>
                  <div className="sub sub1">
                    <div className="sub_top">
                      <div className="sub_container">
                        <ul className="clearfix">
                          <li>
                            <dl>
                              <dt><a href="#" title="커피">커피</a></dt>
                              <dd><a href="#" title="스타벅스 원두">스타벅스 원두</a></dd>
                              <dd><a href="#" title="스타벅스 비아">스타벅스 비아</a></dd>
                              <dd><a href="#" title="스타벅스앳홈 by 캡슐">스타벅스앳홈 by 캡슐</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="나와 어울리는 커피">나와 어울리는 커피</a></dt>
                              <dd></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="스타벅스 리저브™">스타벅스 리저브™</a></dt>
                              <dd><a href="#" title="RESERVE MAGAZINE">RESERVE MAGAZINE</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="에스프레소 음료">에스프레소 음료</a></dt>
                              <dd><a href="#" title="도피오">도피오</a></dd>
                              <dd><a href="#" title="에스프레소 마키아또">에스프레소 마키아또</a></dd>
                              <dd><a href="#" title="아메리카노">아메리카노</a></dd>
                              <dd><a href="#" title="마키아또">마키아또</a></dd>
                              <dd><a href="#" title="카푸치노">카푸치노</a></dd>
                              <dd><a href="#" title="라떼">라떼</a></dd>
                              <dd><a href="#" title="모카">모카</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="최상의 커피를 즐기는 법">최상의 커피를 즐기는 법</a></dt>
                              <dd><a href="#" title="커피 프레스">커피 프레스</a></dd>
                              <dd><a href="#" title="푸어 오버">푸어 오버</a></dd>
                              <dd><a href="#" title="아이스 푸어 오버">아이스 푸어 오버</a></dd>
                              <dd><a href="#" title="커피 메이커">커피 메이커</a></dd>
                              <dd><a href="#" title="리저브를 매장에서 다양하게 즐기는 법">리저브를 매장에서 다양하게 즐기는 법</a></dd>
                            </dl>
                          </li>
                        </ul>
                        <ul className="clearfix supply">
                          <li>
                            <dl>
                              <dt><a href="#" title="커피 이야기">커피 이야기</a></dt>
                              <dd><a href="#" title="농장에서 우리의 손으로">농장에서 우리의 손으로</a></dd>
                              <dd><a href="#" title="최상의 아라비카 원두">최상의 아라비카 원두</a></dd>
                              <dd><a href="#" title="스타벅스 로스트 스펙트럼">스타벅스 로스트 스펙트럼</a></dd>
                              <dd><a href="#" title="스타벅스 디카페인">스타벅스 디카페인</a></dd>
                              <dd><a href="#" title="클로버® 커피 추출 시스템">클로버® 커피 추출 시스템</a></dd>
                            </dl>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sub_bottom">
                      <div className="sub_container">
                        <dl>
                          <dt><a href="#" title="나와 어울리는 커피 찾기">나와 어울리는 커피 찾기</a></dt>
                          <dd>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</dd>
                        </dl>
                        <dl>
                          <dt><a href="#" title="최상의 커피를 즐기는 법">최상의 커피를 즐기는 법</a></dt>
                          <dd>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="main_menu" title="MENU">MENU</a>
                  <div className="sub sub2">
                    <div className="sub_top">
                      <div className="sub_container">
                        <ul className="clearfix">
                          <li>
                            <dl>
                              <dt><a href="#" title="음료">음료</a></dt>
                              <dd><a href="#" title="콜드 브루">콜드 브루</a></dd>
                              <dd><a href="#" title="브루드 커피">브루드 커피</a></dd>
                              <dd><a href="#" title="에스프레소">에스프레소</a></dd>
                              <dd><a href="#" title="프라푸치노">프라푸치노</a></dd>
                              <dd><a href="#" title="블렌디드">블렌디드</a></dd>
                              <dd><a href="#" title="스타벅스 피지오">스타벅스 피지오</a></dd>
                              <dd><a href="#" title="티(티바나)">티(티바나)</a></dd>
                              <dd><a href="#" title="기타 제조 음료">기타 제조 음료</a></dd>
                              <dd><a href="#" title="스타벅스 주스(병음료)">스타벅스 주스(병음료)</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="푸드">푸드</a></dt>
                              <dd><a href="#" title="브레드">브레드</a></dd>
                              <dd><a href="#" title="케이크">케이크</a></dd>
                              <dd><a href="#" title="샌드위치 & 샐러드">샌드위치 & 샐러드</a></dd>
                              <dd><a href="#" title="따뜻한 푸드">따뜻한 푸드</a></dd>
                              <dd><a href="#" title="과일 & 요거트">과일 & 요거트</a></dd>
                              <dd><a href="#" title="스낵 & 미니 디저트">스낵 & 미니 디저트</a></dd>
                              <dd><a href="#" title="아이스크림">아이스크림</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="상품">상품</a></dt>
                              <dd><a href="#" title="머그">머그</a></dd>
                              <dd><a href="#" title="글라스">글라스</a></dd>
                              <dd><a href="#" title="플라스틱 텀블러">플라스틱 텀블러</a></dd>
                              <dd><a href="#" title="스테인리스 텀블러">스테인리스 텀블러</a></dd>
                              <dd><a href="#" title="보온병">보온병</a></dd>
                              <dd><a href="#" title="액세서리">액세서리</a></dd>
                              <dd><a href="#" title="커피 용품">커피 용품</a></dd>
                              <dd><a href="#" title="패키지 티(티바나)">패키지 티(티바나)</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="카드">카드</a></dt>
                              <dd><a href="#" title="실물카드">실물카드</a></dd>
                              <dd><a href="#" title="e-Gift 카드">e-Gift 카드</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="메뉴 이야기">메뉴 이야기</a></dt>
                              <dd><a href="#" title="나이트로 콜드브루">나이트로 콜드브루</a></dd>
                              <dd><a href="#" title="콜드 브루">콜드 브루</a></dd>
                              <dd><a href="#" title="스타벅스 티바나">스타벅스 티바나</a></dd>
                            </dl>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sub_bottom">
                      <div className="sub_container">
                        <dl>
                          <dt><a href="#" title="나이트로 콜드 브루">나이트로 콜드 브루<img src={"."+process.env.PUBLIC_URL +"/img/icon_gnb_new.png"} alt="새로운메뉴"/></a></dt>
                          <dd>나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="main_menu" title="STORE">STORE</a>
                  <div className="sub sub3">
                    <div className="sub_top">
                      <div className="sub_container">
                        <ul className="clearfix">
                          <li>
                            <dl>
                              <dt><a href="#" title="매장 찾기">매장 찾기</a></dt>
                              <dd><a href="#" title="퀵 검색">퀵 검색</a></dd>
                              <dd><a href="#" title="지역 검색">지역 검색</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="드라이브 스루 매장">드라이브 스루 매장</a></dt>
                              <dd></dd>
                             
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="스타벅스 리저브™ 매장">스타벅스 리저브™ 매장</a></dt>
                              <dd></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="커뮤니티 스토어 매장">커뮤니티 스토어 매장</a></dt>
                              <dd></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="매장 이야기">매장 이야기</a></dt>
                              <dd><a href="#" title="티바나 바 매장">티바나 바 매장</a></dd>
                            </dl>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sub_bottom">
                      <div className="sub_container">
                        <dl>
                          <dt><a href="#" title="매장찾기">매장찾기</a></dt>
                          <dd>보다 빠르게 매장을 찾아보세요.</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="main_menu" title="RESPONSIBILITY">RESPONSIBILITY</a>
                  <div className="sub sub4">
                    <div className="sub_top">
                      <div className="sub_container">
                        <ul className="clearfix">
                          <li>
                            <dl>
                              <dt><a href="#" title="사회공헌 캠페인 소개">사회공헌 캠페인 소개</a></dt>
                              <dd></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="지역 사회 참여 활동">지역 사회 참여 활동</a></dt>
                              <dd><a href="#" title="희망배달 캠페인">희망배달 캠페인</a></dd>
                              <dd><a href="#" title="재능기부 카페 소식">재능기부 카페 소식</a></dd>
                              <dd><a href="#" title="커뮤니티 스토어">커뮤니티 스토어</a></dd>
                              <dd><a href="#" title="청년 지원 프로그램">청년 지원 프로그램</a></dd>
                              <dd><a href="#" title="우리 농산물 사랑 캠페인">우리 농산물 사랑 캠페인</a></dd>
                              <dd><a href="#" title="우리 문화 지키기">우리 문화 지키기</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="환경보호 활동">환경보호 활동</a></dt>
                              <dd><a href="#" title="친환경 활동">친환경 활동</a></dd>
                              <dd><a href="#" title="일회용 컵 없는 매장">일회용 컵 없는 매장</a></dd>
                              <dd><a href="#" title="커피 원두 재활용">커피 원두 재활용</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="윤리 구매">윤리 구매</a></dt>
                              <dd><a href="#" title="윤리적 원두 구매">윤리적 원두 구매</a></dd>
                              <dd><a href="#" title="공정무역 인증">공정무역 인증</a></dd>
                              <dd><a href="#" title="커피 농가 지원 활동">커피 농가 지원 활동</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="글로벌 사회 공헌">글로벌 사회 공헌</a></dt>
                              <dd><a href="#" title="윤리경영 보고서">윤리경영 보고서</a></dd>
                              <dd><a href="#" title="스타벅스 재단">스타벅스 재단</a></dd>
                              <dd><a href="#" title="지구촌 봉사의 달">지구촌 봉사의 달</a></dd>
                            </dl>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sub_bottom">
                      <div className="sub_container">
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="main_menu" title="STARBUCKS REWARDS">STARBUCKS REWARDS</a>
                  <div className="sub sub5">
                    <div className="sub_top">
                      <div className="sub_container">
                        <ul className="clearfix">
                          <li>
                            <dl>
                              <dt><a href="#" title="스타벅스 리워드">스타벅스 리워드</a></dt>
                              <dd><a href="#" title="스타벅스 리워드 소개">스타벅스 리워드 소개</a></dd>
                              <dd><a href="#" title="등급 및 혜택">등급 및 혜택</a></dd>
                              <dd><a href="#" title="스타벅스 별">스타벅스 별</a></dd>
                              <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="스타벅스 카드">스타벅스 카드</a></dt>
                              <dd><a href="#" title="스타벅스 카드 소개">스타벅스 카드 소개</a></dd>
                              <dd><a href="#" title="스타벅스 카드 갤러리">스타벅스 카드 갤러리</a></dd>
                              <dd><a href="#" title="등록 및 조회">등록 및 조회</a></dd>
                              <dd><a href="#" title="충전 및 이용안내">충전 및 이용안내</a></dd>
                              <dd><a href="#" title="분실신고/환불신청">분실신고/환불신청</a></dd>
                              <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="스타벅스 e-Gift Card">스타벅스 e-Gift Card</a></dt>
                              <dd><a href="#" title="스타벅스 e-Gift Card 소개">스타벅스 e-Gift Card 소개</a></dd>
                              <dd><a href="#" title="이용안내">이용안내</a></dd>
                              <dd><a href="#" title="선물하기">선물하기</a></dd>
                              <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                            </dl>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sub_bottom">
                      <div className="sub_container">
                        <dl>
                          <dt><a href="#" title="스타벅스 카드 등록하기">스타벅스 카드 등록하기</a></dt>
                          <dd>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="#" className="main_menu" title="WHAT'S NEW">WHAT'S NEW</a>
                  <div className="sub sub6">
                    <div className="sub_top">
                      <div className="sub_container">
                        <ul className="clearfix">
                          <li>
                            <dl>
                              <dt><a href="#" title="이벤트">이벤트</a></dt>
                              <dd><a href="#" title="전체">전체</a></dd>
                              <dd><a href="#" title="스타벅스 카드">스타벅스 카드</a></dd>
                              <dd><a href="#" title="스타벅스 리워드">스타벅스 리워드</a></dd>
                              <dd><a href="#" title="온라인">온라인</a></dd>
                              <dd><a href="#" title=" e-프리퀀시 증정품"> e-프리퀀시 증정품</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="뉴스">뉴스</a></dt>
                              <dd><a href="#" title="전체">전체</a></dd>
                              <dd><a href="#" title="상품 출시">상품 출시</a></dd>
                              <dd><a href="#" title="스타벅스와 문화">스타벅스와 문화</a></dd>
                              <dd><a href="#" title="스타벅스 사회공헌">스타벅스 사회공헌</a></dd>
                              <dd><a href="#" title="스타벅스 카드출시">스타벅스 카드출시</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="매장별 이벤트">매장별 이벤트</a></dt>
                              <dd><a href="#" title="일반 매장">일반 매장</a></dd>
                              <dd><a href="#" title="신규 매장">신규 매장</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="e-프리퀀시">e-프리퀀시</a></dt>
                              <dd><a href="#" title="이용안내">이용안내</a></dd>
                              <dd><a href="#" title="이용현황">이용현황</a></dd>
                            </dl>
                          </li>
                          <li>
                             <dl>
                              <dt><a href="#" title="공지사항">공지사항</a></dt>
                              <dd></dd>
                            </dl>
                          </li>
                        </ul>
                        <ul className="clearfix supply">
                          <li>
                            <dl>
                              <dt><a href="#" title="월페이퍼">월페이퍼</a></dt>
                              <dd></dd>
                            </dl>
                          </li>
                          </ul>
                      </div>
                    </div>
                    <div className="sub_bottom">
                      <div className="sub_container">
                        <dl>
                          <dt><a href="#" title="매장별 이벤트">매장별 이벤트</a></dt>
                          <dd>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</dd>
                        </dl>
                        <dl>
                          <dt><a href="#" title="월페이퍼">월페이퍼</a></dt>
                          <dd>매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div id="mob_nav_box">
              <ul>
                <li><a href="#" className="user_btn"><img src={"."+process.env.PUBLIC_URL +"/img/icon_user_m.png"} alt="user icon"/></a></li>
                <li><a href="#" className="map_btn"><img src={"."+process.env.PUBLIC_URL +"/img/icon_spot_m.png"} alt="map icon"/></a></li>
                <li><a href="#" className="berger_menu_btn"><img src={"."+process.env.PUBLIC_URL +"/img/btn_berger_m.png"} alt="berger menu"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>     
    </React.Fragment>
  );
};

export default HeaderCpt;