import React from 'react';
import { Route, Link } from 'react-router-dom';
import img from '../images/Bouquet/logo.jpg';
import img1 from '../images/Bouquet/01.jpg';
import img2 from '../images/Bouquet/02.jpg';
import img3 from '../images/Bouquet/03.jpg';
import img4 from '../images/Bouquet/04.jpg';
import img5 from '../images/Bouquet/05.jpg';
import img6 from '../images/Bouquet/06.jpg';
import img7 from '../images/Bouquet/07.jpg';
import img8 from '../images/Bouquet/08.jpg';
import img9 from '../images/Bouquet/09.jpg';
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
        <p> ☞살구 튤립</p>
        <p style={text1}>가격 : 15,000원</p>
        </div>

        <div style={DIYsize2}>
        <Link to='/New'><img src={img2} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞핑크 장미</p>
        <p style={text1}>가격 : 25,000원</p>
        </div>

        <div style={DIYsize3}>
        <Link to='/New'><img src={img3} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞주황 튤립</p>
        <p style={text1}>가격 : 15,000원</p>
        </div>

        <div style={DIYsize4}>
        <Link to='/New'><img src={img4} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞핑크 토끼 다발</p>
        <p style={text1}>가격 : 20,000원</p>
        </div>
        </div>

        <div style={DIYsize}>
        <div style={DIYsize1}>
        <Link to='/New'><img src={img5} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞샤라랄 안개꽃 </p>
        <p style={text1}>가격 : 30,000원</p>
        </div>

        <div style={DIYsize2}>
        <Link to='/New'><img src={img6} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞핑키핑키 꽃다발</p>
        <p style={text1}>가격 : 30,000원</p>
        </div>

        <div style={DIYsize3}>
        <Link to='/New'><img src={img7} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞핑크화이트톤 다발</p>
        <p style={text1}>가격 : 35,000원</p>
        </div>

        <div style={DIYsize4}>
        <Link to='/New'><img src={img8} width='400px' height='400px' alt='사진'  /></Link>
        <p> ☞라넌큘러스</p>
        <p style={text1}>가격 : 10,000원</p>
        </div>
        </div>

        <div style={DIYsize}>
        <div style={DIYsize1}>
        <Link to="/New"><img src={img9} width='400px' height='400px' alt="사진3" /></Link>
            <p > ☞거베라</p>
            <p style={text1}>가격 : 10,000원</p>            
        </div>
        </div>

        <Route path="/New" component={New} />
        </>

    );
}

export default DIY;