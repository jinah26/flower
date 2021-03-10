import React from 'react';
import styled from 'styled-components';

const Blockdetail = styled.div`
  width : 100%
  height : 150px;
  background: gray;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const detail = {
    fontsize: '35px',
    color: 'white',
    fontweight: 'bold',
    margin : 'auto 0'
    

}

const name = {
    fontsize: '15px',
    color: 'white',
    margin : 'auto 0'
    

}

const bottom = () => {
    return(
        <>
        <Blockdetail>
        <hr></hr>
        <h3 style={detail}>SUNNY 고객센터 1600 - 0000   평일 : AM 09:00 ~ PM 18:00 </h3>
        <div style={name}>
        <p> 상호명 : SUNNY  대표: 이진아 </p>
        <p>소제지: 서울시 송파구 송파동 00 - 00 </p>
        <p>2021 SUNNNY, Inc All Right Reserved</p>
        </div>
        </Blockdetail>
        </>

    )
}


export default bottom;