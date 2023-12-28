import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "./wrap2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export default function WrapComponent() {
  return (
    <div id="wrap2">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="row1">
              <div className="back-img"></div>
            </div>
            <div className="row2">
              <div className="face-img"></div>
              <div className="subject">
                <h1>체력이 좋은 개발자, 김범조입니다.</h1>
              </div>
              <div className="introduction">
                <div className="int-row1">
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <h2>Introduction</h2>
                </div>
                <ul>
                  <li>안녕하세요! 만 28세 신입 개발자 김범조입니다.</li>
                  <li>
                    요식업과 목수일로 신체를 단련하고 개발자라는 전환점 앞에서
                    달려가기 위해 단단히 준비를 하고 있습니다.
                  </li>
                  <li>
                    난관을 새로운 것을 배울 수 있는 기회라 생각하고, 문제를
                    직시하는 것을 즐깁니다.
                  </li>
                  <li>
                    스스로 한 선택을 돌아보고 더 나은 방법이 없을까 늘
                    고민합니다.
                  </li>
                  <li>Email | rlaqjawh46@naver.com</li>
                  <li>
                    Skills | Java, Spring Boot, React, Javascript, Mysql, EC2,
                    RDS, Express
                  </li>
                  <li>Phone | 010-9057-9585</li>
                </ul>
              </div>
              <div className="portfolio">
                <div className="por-row1">
                  <FontAwesomeIcon icon={faFile} />
                  <h2>Portfolio</h2>
                </div>
                <div className="portfolio1">
                  <ul>
                    <li>
                      <h3>Portfolio 1</h3>
                    </li>
                    <li>주제 : KREAM 쇼핑몰 클론코딩 팀프로젝트</li>
                    <li>
                      사용 기술 : Spring Boot, React, EC2, RDS, JPA, JWT, Spring
                      Security
                    </li>
                    <li>
                      <a href="http://carlnathal.shop">
                        URL : http://carlnathal.shop
                      </a>
                    </li>
                    <li>
                      참여도 및 기획의도 : React를 사용해 회원가입, 로그인,
                      로그아웃, 마이페이지 화면을 만들고, AWS EC2와 Express를
                      이용해 웹서버를 구축했습니다. AWS RDS와 Mysql로 회원정보를
                      저장할 데이터베이스를, Spring Boot, JWT, Spring security로
                      백엔드 서버를 만들었습니다. <br />
                      개인정보를 다뤄야 하는 파트이다 보니 1차적으로 보안이 가장
                      큰 고민거리였습니다. 아직 부족한 부분이 많지만 KREAM
                      쇼핑몰처럼 유저편의성과 보안 두가지를 모두 놓치지 않아야
                      하는 경우에, 개발자가 어떤 것들을 고민해야 하는지
                      간접적으로나마 경험해볼 수 있는 시간이었습니다.
                      <br />또 프론트 서버 백엔드 서버를 직접 구축하던 중, 크롬
                      브라우저에서 같은 도메인이 아니라면 쿠키를 주고 받지
                      못한다던지 하는 등의, 실제로 해보지 않으면 겪을 수 없는
                      변수들을 직면했습니다. 변수들을 해결하면서 도메인도
                      구입해보고 하위 도메인 설정하는 등 문제에서 새로운 경험을
                      할 수 있었습니다.하나하나 직접해본다는 것이 얼마나 큰
                      가치를 지니는 지 느낄 수 있었고, 로그인이라는 하나의 작은
                      파트에 웹이 돌아가는 체계가 숨어있고, 그것을 전반적으로
                      훑어볼 수 있었습니다.
                    </li>
                    <li>
                      <div className="pic-row1">
                        <div className="pic1">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/img/portfolio1_img1.jpg"
                            }
                            alt=""
                          />
                          <p>로그인 과정 1</p>
                        </div>
                        <div className="pic2">
                        <img
                        src={
                          process.env.PUBLIC_URL + "/img/portfolio1_img2.jpg"
                        }
                        alt=""
                      />
                      <p>로그인 과정 2</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/portfolio1_img3.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>로그인 후 마이페이지에 회원정보 바인딩</li>
                    <li>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/portfolio1_img4.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>회원가입시 정보 유효성 검사</li>
                    <li>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/portfolio1_img5.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>카카오 주소검색 API 사용</li>
                    <li>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/portfolio1_img6.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      회원정보 AWS RDS에 저장, Spring Security 사용해 비밀번호
                      암호화 저장
                    </li>
                  </ul>
                </div>
                
                <div className="portfolio2">
                  <ul>
                    <li>
                      <h3>Portfolio 2</h3>
                    </li>
                    <li>주제 : 롯데 호텔 사이트 클론코딩 개인 프로젝트</li>
                    <li>사용 기술 : React</li>
                    <li>
                      <a href="http://lotte.cafe24app.com/">
                        URL : http://lotte.cafe24app.com/
                      </a>
                    </li>
                    <li>
                      기획의도 : React를 이용해 롯데 호텔 사이트 UI를 제작하는
                      것을 목표로 했습니다. 메인 슬라이드나 상단
                      네비게이션바처럼 동적으로 움직이는 애니메이션들이 많았고,
                      달력 알고리즘 등 단순하지 않은 요소들이 있었습니다.<br />테스트
                      시 사용자들의 예상치 못한 클릭이나 움직임에 버그가
                      발생하는 것을 보고 치밀하게 화면을 구성하는 것이 쉬운 일이
                      아님을 느꼈습니다. 또한 디바이스 크게에 따라 사용자가
                      불편함을 느끼지 않게 하려면 고려해야 하는 부분들이 많음을
                      배웠습니다.
                    </li>
                    <li>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/portfolio2_img1.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>롯데 클론코딩 사이트 화면</li>
                  </ul>
                </div>
                <div className="portfolio3">
                  <ul>
                    <li>
                      <h3>Portfolio 3</h3>
                    </li>
                    <li>주제 : Themezaa ARCHITECTURE 예시 사이트 클론코딩</li>
                    <li>사용 기술 : HTML, CSS, JS, Jquery</li>
                    <li>
                      <a href="http://rlaqjawh46.dothome.co.kr/">
                        URL : http://rlaqjawh46.dothome.co.kr/
                      </a>
                    </li>
                    <li>
                      기획의도 : 웹의 근간이 되는 HTML과 CSS, JavaScript를
                      배우기 위해 비교적 간단한 예시 사이트를 클론 코딩했습니다.
                      지금 돌아보면 말도 안 되는 코드이지만 하나하나 하드
                      코딩하는 시간이 없었더라면 React나 Spring같은 프레임워크를
                      이해하기 어려웠을 것입니다. <br />웹호스팅 사이트를 이용해
                      배포하면서, 기본이 되는 서버와 클라이언트 개념을 알게
                      되었습니다. 또한 정적인 HTML을 동적으로 만들어주는 JS,
                      JS를 조금 더 손 쉽게 사용하게 만들어주는 라이브러리인
                      Jquery까지 배워볼 수 있었습니다.
                    </li>
                    <li>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/portfolio3_img1.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>예시사이트 클론코딩 화면</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
