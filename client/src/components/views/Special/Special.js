import React from 'react';
import { Route, Link } from 'react-router-dom';
import img from '../images/Special/logo.jpg';
import img1 from '../images/Special/01.jpg';
import img2 from '../images/Special/02.jpg';
import New from '../New/New';

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
    flex:'2',
    margin : '0 auto',
    padding: '10px'
    
}

const DIYsize3 = {
    flex:'3',
    margin : '0 auto',
    padding: '10px'
    
}

const DIYsize4 = {
    flex:'4',
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
      
      <div style={DIYsize}>
        <div style={DIYsize1}>
        <Link to='/New'><img src={img1} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞꽃상자</p>
        <p style={text1}>가격 : 20,000원</p>
        </div>

        <div style={DIYsize2}>
        <Link to='/New'><img src={img2} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞어버이날 꽃상자</p>
        <p style={text1}>가격 : 40,000원</p>
        </div>

        <div style={DIYsize3}>
        </div>

        <div style={DIYsize4}>
        </div>



        </div>

        <Route path="/New" component={New} />
        </>

    );
}

export default DIY;