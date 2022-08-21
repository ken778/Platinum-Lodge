import React from 'react';
import './Home.css'
import Navbar from './Navbar/Navbar';

import roomImg from '../PLATINUM-LODGE-020gb.jpg'
import Footer from './Footer/Footer';
const Home = () => {
    return (
   
        <>
      
        <div className='banner-container'>
      
            <div className='banner'>
             
            <h1 className='banner-text'>Luxury overnight<br></br> accommodation</h1>
            </div>
        </div>
        <section className='section-1'>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div>
                  
                    <img src={roomImg}/>
                </div>
        </section>
        <section className='section-1 container'>
                
                <div className='a'>
                  
                    <img src={roomImg}/>
                </div>
                <div className='b'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
        </section>

        <Footer/>
        
    </>
    );
}

export default Home;
