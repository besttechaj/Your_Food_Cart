import React from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className='m-3'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='container m-3'>
        <Footer />
      </div>
    </>
  );
};

export default Home;
