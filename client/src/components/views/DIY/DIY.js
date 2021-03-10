import React from 'react';
import { Route, Link } from 'react-router-dom';
import img from '../images/DIY/DIY.jpg';
import img2 from '../images/DIY/01.jpg';
import img3 from '../images/DIY/03.jpg';
import New from '../New/New';

const text = {
    margin: '50px 100px'
};

const text1 = {
    fontweight: 'bolder',
    color : '#383838'
    
}

const DIYsize = {
    display:'flex',
    margin : '0 180px'
    
}

const DIYsize1 = {
    flex:'1',
    margin : '0 auto',
    padding: '10px'
    
}

const DIYsize2 = {
    flex:'3',
    margin : '0 auto',
    padding: '10px'
    
}

const Logo = {
    margin : '50px 500px',
    height: '400px'
}





const DIY = () => {
    return(
        <>
        <div>
        <img src={img} alt="사진" style={Logo} />
        </div>
        <div style={text}>
            <h2>Do it Yourself </h2>
            <h3>자신이 원하는 꽃과 디자인을 만들어보세요</h3>
        </div>
      
      <div style={DIYsize}>
        <div style={DIYsize1}>
        <Link to='/New'><img src={img2} width='400px' height='400px' alt='사진' /></Link>
        <p> ☞꽃다발 만들어보기</p>
        <p style={text1}>가격 : 50,000원</p>
                   
        </div>
        <div style={DIYsize2}>
        <Link to="/New"><img src={img3} width='400px' height='400px' alt="사진3" /></Link>
            <p > ☞토끼 꽃다발 만들어보기</p>
            <p style={text1}>가격 : 60,000원</p>            
        </div>
        </div>
        <Route path="/New" component={New} />
        </>

    );
}

export default DIY;