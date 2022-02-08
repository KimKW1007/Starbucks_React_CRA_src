import React from 'react';

const MainCpt = () => {
  return (
    <React.Fragment>
      <main id="main">
        <section id="section1">
          <h2 className="hide">메인 베너 Carry Merry</h2>
          <div className="container">
            <span className="star star1">
              <img src="./img/2021_chiristmas2_bg_left.png" alt="별모양이미지1"/>
            </span>
            <span className="star star2">
              <img src="./img/2021_chiristmas2_bg_right.png" alt="별모양이미지2"/>
            </span>
           <span className="img img1">
             <img src="./img/2021_chiristmas2_slogan.png" alt="메인슬로건"/>
           </span>
           <span className="img img2">
             <img src="./img/2021_christmas2_drink.png" alt="메인이미지1"/>
           </span>
           <span className="img img3">
             <img src="./img/2021_christmas2_drink2.png" alt="메인이미지2"/>
           </span>
           <span className="img img4">
             <img src="./img/2021_christmas2_drink3.png" alt="메인이미지3"/>
           </span>
           <span className="img img5">
             <a href="#" className="detail_btn" title="자세히 보기">자세히 보기</a>
           </span>
          </div>
        </section>
        <section id="section2">
          <div id="notice">
            <div className="container">
              <div className="notice_box">
                <div className="notice_title">
                  <h2>
                    <span>
                      <img src="./img/notice_ttl.png" alt="Notice Title"/>
                      <img src="./img/icon_board_speaker.png" alt="Notice Title"/>
                    </span>
                  </h2>
                </div>
                <div className="notice_list">
                  <ul>
                    <li className="notice"><a href="#" title="스타벅스커피 코리아 원산지 오표시 관련 고객설명문">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                    <li className="notice"><a href="#" title="사이렌 오더 주문 건수 제한 안내(11/2~12/31)">사이렌 오더 주문 건수 제한 안내(11/2~12/31)</a></li>
                    <li className="notice"><a href="#" title="2021 플래너 쿠폰 3종 유효 기간 연장 안내">2021 플래너 쿠폰 3종 유효 기간 연장 안내</a></li>
                    <li className="notice"><a href="#" title="시스템 개선 및 점검 안내">시스템 개선 및 점검 안내</a></li>
                    <li className="notice"><a href="#" title="시스템 개선 및 점검 안내">시스템 개선 및 점검 안내</a></li>
                  </ul>
                </div>
                <div className="notice_detail">
                  <a href="#" title="더보기버튼"><img src="./img/btn_notice_plus.png" alt="더보기버튼"/></a>
                </div>
              </div>
              <div className="prom_box">
                <div>
                  <a href="#" className="prom_btn blind" title="스타벅스 프로모션">스타벅스 프로모션</a>
                </div>
              </div>
            </div>
          </div>
          <div id="slide">
            <div className="container2">
              <div className="slide_container">
                <div className="slide_view">
                  <ul className="slide_wrap clearfix">
                    <li className="slide slide3"><img src="./img/slide3.jpg" alt="메인슬라이드3"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                    <li className="slide slide1 on"><img src="./img/slide1.jpg" alt="메인슬라이드1"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                    <li className="slide slide2"><img src="./img/slide2.jpg" alt="메인슬라이드2"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                    <li className="slide slide3"><img src="./img/slide3.jpg" alt="메인슬라이드3"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                    <li className="slide slide1 on"><img src="./img/slide1.jpg" alt="메인슬라이드1"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                  </ul>
                </div>
             {/*  <!-- Next & Prev Button --> */}
                <span className="next_btn_box"><a href="#" className="next_btn blind" title="Next Button">Next Button</a></span>
                <span className="prev_btn_box"><a href="#" className="prev_btn blind" title="Prev Button">Prev Button</a></span>
                {/* <!-- Indicator --> */}
                <div className="page_btn_box">
                  <span><a href="#" className="play_btn on" title="Play & Pause Button"><img src="./img/main_prom_stop.png" alt="Play & Pause Button"/></a></span>
                  <span><a href="#" className="page_btn" title="Page1 Button"><img src="./img/main_prom_on.png" alt="Page1 Button"/></a></span>
                  <span><a href="#" className="page_btn" title="Page2 Button"><img src="./img/main_prom_off.png" alt="Page2 Button"/></a></span>
                  <span><a href="#" className="page_btn" title="Page3 Button"><img src="./img/main_prom_off.png" alt="Page3 Button"/></a></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section3">
          <div className="container">
            <div className="left">
              <div className="gap">
                <div className="content">
                  <h2><img src="./img/rewards-logo.png" alt="리워드 로고"/></h2>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="top">
                <div className="top_left">
                  <div className="content">
                    <h3>스타벅스만의 특별한 혜택,<br/><strong> 스타벅스 리워드</strong></h3>
                    <p><strong>스타벅스 회원이세요?</strong><br className="las_br"/> 로그인을 통해<br className="fir_br"/> 나만의 리워드를 확인해보세요.</p>
                    <p><strong>스타벅스 회원이 아니세요?</strong><br/> 가입을 통해 리워드 혜택을 즐기세요.</p>
                  </div>
                </div>
                <div className="top_right">
                  <div className="content">
                    <a href="#" className="signup_btn" title="회원가입">회원가입</a>
                    <a href="#" className="login_btn" title="로그인">로그인</a>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="bot_left">
                  <div className="content">
                    <p>회원 가입 후, 스타벅스 e-Gift Card를<strong><br/> "나에게 선물하기"로 구매하시고,<br className="las_br"/> 편리하게 등록하세요!</strong>
                      </p>
                    <p>
                      카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                    </p>
                  </div>
                </div>
                <div className="bot_right">
                  <div className="content">
                    <a href="#" className="gift_btn" title="e-Gift Card 선물하기">e-Gift Card 선물하기</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section4">
          <div className="container">
            <div className="img_box">
              <div className="wrap">
                <h2><img src="./img/2021_chrsitmas_bean.png" alt="블론드 이미지"/></h2>
              </div>
            </div>
            <div className="txt_box">
              <div className="wrap">
                <h2><img src="./img/2021_chrsitmas_bean_txt.png" alt="블론드 텍스트"/></h2>
                <p><a href="#" title="자세히 보기">자세히 보기</a></p>
              </div>
            </div>
          </div>
        </section>
        <section id="section5">
          <div className="container">
            <div className="title">
              <h2><img src="./img/reserve_christmas_bean_title_211018.png" alt="Reserve The Merry"/></h2>
              <p><a href="#" title="자세히 보기">자세히 보기</a></p>
            </div>
          </div>
        </section>
        <section id="section6">
          <div className="container">
            <div className="left">
              <h2><img src="./img/fav_prod_txt01.png" alt="Pick Your..."/></h2>
              <h3><img src="./img/fav_prod_txt02.png" alt="다양한 메뉴를..."/></h3>
              <p><a href="#" title="자세히 보기">자세히 보기</a></p>
            </div>
            <div className="right">
              <img src="./img/2021_christmas2_fav.png" alt="Pick Your..."/>
            </div>
          </div>
        </section>
        <section id="section7">
          <div className="container">
            <div className="left">
              <h2><img src="./img/reserve_text_pc.png" alt="Reserve Magazine"/></h2>
              <p><a href="#" title="자세히 보기">자세히 보기</a></p>
            </div>
            <div className="right">
              <img src="./img/reserve_visual_pc.png" alt="Reserve Magazine Image"/>
            </div>
          </div>
        </section>
        <section id="section8">
          <div className="container">
            <div className="wrap">
              <div className="left">
                <span><img src="./img/store_exp_img01.png" alt="커피이미지"/></span>
              </div>
              <div className="right">
                <h2><img src="./img/store_txt01.png" alt="store_txt"/></h2>
                <h3><img src="./img/store_txt02.png" alt="store_txt"/></h3>
                <p><a href="#" title="매장 찾기">매장 찾기</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>      
    </React.Fragment>
  );
};

export default MainCpt;