import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react";
import "./css/navbar.css";

const Container=styled.div`
background-color: khaki;
`
export function Navbar(){
const navigate=useNavigate();
const [inputValue,setInputValue]=useState("");
return<>
<Container>
    <nav className="nav">
        <div className="nav-brand">
            <div className="brand-icon">HP</div>
            <h2>병원 예약시스템</h2>
        </div>
            <ul >
                <li ><Link to="./home"className="navmenu">진료예약</Link>              
                    <ul>
                        <li><Link to="./reservation"className="navmenu">예약하기</Link></li>
                        <li><Link to="./reservationConfirm"className="navmenu">예약확인</Link></li>
                        <li><Link to="./reservationStatus"className="navmenu">예약자현황</Link></li>
                        <li><Link to="./hospitalInformation"className="navmenu">병원정보</Link></li>
                    </ul>
                </li>
                <li><Link to="./mg"className="navmenu">나의 관리</Link>
                    <ul>
                        <li><Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank"className="navmenu">병원내역조회</Link></li>
                        <li><Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank"className="navmenu">건강검진</Link></li>
                        <li><Link to="./BmiMeasurement"className="navmenu">BMI측정</Link></li>
                    </ul>
                </li>
                <li><Link to="./sc"className="navmenu">검색</Link>
                    <ul>
                        <li><Link to="./hospitalInformation"className="navmenu">내가 가본병원</Link></li>
                        <li><Link to="./nearestHospital"className="navmenu">가까운병원</Link></li>
                        <li><Link to="./popularHospitals"className="navmenu">인기병원</Link></li>
                    </ul>
                </li>
                <li><Link to="./faq"className="navmenu">FAQ</Link></li>
            </ul> 
            
            <div className="search">
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="검색어를 입력하세요." className="inputsearch"/>
                <button className="searchbtn"onClick={()=>{
                    setInputValue("");
                    navigate(`/search?keyword=${inputValue}`);
                }}>검색</button>
            </div>            
        </nav>
    </Container>
<Outlet/>
</>
}