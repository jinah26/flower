import React from 'react';
import { Route, Link } from 'react-router-dom';
import img from '../images/Pollen/logo.jpg';
import img1 from '../images/Pollen/01.jpg';
import img2 from '../images/Pollen/02.jpg';
import img3 from '../images/Pollen/03.jpg';
import img4 from '../images/Pollen/04.jpg';
import img5 from '../images/Pollen/05.jpg';
import img6 from '../images/Pollen/06.jpg';
import img7 from '../images/Pollen/07.jpg';
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
        <p> ☞라넌큘러스</p>
        <p style={text1}>가격 : 12,000원</p>
        </div>

        <div style={DIYsize2}>
        <Link to='/New'><img src={img2} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞꼬마 선인장</p>
        <p style={text1}>가격 : 7,000원</p>
        </div>

        <div style={DIYsize3}>
        <Link to='/New'><img src={img3} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞괴마옥</p>
        <p style={text1}>가격 : 20,000원</p>
        </div>

        <div style={DIYsize4}>
        <Link to='/New'><img src={img4} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞만세선인장</p>
        <p style={text1}>가격 : 30,000원</p>
        </div>
        </div>

        <div style={DIYsize}>
        <div style={DIYsize1}>
        <Link to='/New'><img src={img5} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞중간 선인장 </p>
        <p style={text1}>가격 : 15,000원</p>
        </div>

        <div style={DIYsize2}>
        <Link to='/New'><img src={img6} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞금사철</p>
        <p style={text1}>가격 : 12,000원</p>
        </div>

        <div style={DIYsize3}>
        <Link to='/New'><img src={img7} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞수국</p>
        <p style={text1}>가격 : 10,000원</p>
        </div>

        <div style={DIYsize4}>
        </div>

        
        </div>


        <Route path="/New" component={New} />
        </>

    );
}

export default DIY;