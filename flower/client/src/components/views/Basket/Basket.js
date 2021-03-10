import React from 'react';
import { Route, Link } from 'react-router-dom';
import img from '../images/Basket/logo.jpg';
import img1 from '../images/Basket/01.jpg';
import img2 from '../images/Basket/02.jpg';
import img3 from '../images/Basket/03.jpg';
import img4 from '../images/Basket/04.jpg';
import img5 from '../images/Basket/05.jpg';
import img6 from '../images/Basket/06.jpg';
import img7 from '../images/Basket/07.jpg';
import img8 from '../images/Basket/08.jpg';
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
        <p> ☞데모르</p>
        <p style={text1}>가격 : 15,000원</p>
        </div>

        <div style={DIYsize2}>
        <Link to='/New'><img src={img2} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞카네이션 바구니</p>
        <p style={text1}>가격 : 50,000원</p>
        </div>

        <div style={DIYsize3}>
        <Link to='/New'><img src={img3} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞주황 바구니</p>
        <p style={text1}>가격 : 30,000원</p>
        </div>

        <div style={DIYsize4}>
        <Link to='/New'><img src={img4} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞핑크 퐁퐁 바구니</p>
        <p style={text1}>가격 : 30,000원</p>
        </div>
        </div>

        <div style={DIYsize}>
        <div style={DIYsize1}>
        <Link to='/New'><img src={img5} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞빨강 장미 바구니 </p>
        <p style={text1}>가격 : 15,000원</p>
        </div>

        <div style={DIYsize2}>
        <Link to='/New'><img src={img6} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞핑키핑키 꽃바구니</p>
        <p style={text1}>가격 : 15,000원</p>
        </div>

        <div style={DIYsize3}>
        <Link to='/New'><img src={img7} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞대형사이즈 꽃바구니</p>
        <p style={text1}>가격 : 100,000원</p>
        </div>

        <div style={DIYsize4}>
        <Link to='/New'><img src={img8} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞라넌큘러스 꽃바구니</p>
        <p style={text1}>가격 : 15,000원</p>
        </div>
        </div>


        <Route path="/New" component={New} />
        </>

    );
}

export default DIY;