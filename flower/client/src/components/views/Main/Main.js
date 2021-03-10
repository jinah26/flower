import React from 'react';
import images from '../images/main.jpg';
import Birth from './Slider';
import Best from './Best';


const Main = () => {
    return(
        <>
        <img src={images}
        width="100%"
        height='800px'
        alt='flower'
        />
        <Birth />
        <Best />
       
        </>

    );
};

export default Main;