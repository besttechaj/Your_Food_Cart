import React from 'react';

const Carousel = (props) => {
  const { value, handleChange } = props;
  return (
    <>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-ride='carousel'
        style={{ objectFit: 'contain' }}
      >
        <div
          className='carousel-inner'
          id='carousel'
          style={{ maxHeight: '500px' }}
        >
          <div className='carousel-caption'>
            <form
              className='d-flex'
              style={{
                zIndex: '10',
                position: 'relative',
              }}
            >
              <input
                className='form-control mr-sm-2 '
                type='search'
                value={value}
                onChange={handleChange}
                placeholder='Search'
                aria-label='Search'
                style={{ borderRadius: '10px' }}
              />
            </form>
          </div>
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              src='https://source.unsplash.com/random/900×700/?pizza'
              alt='First slide'
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://source.unsplash.com/random/900×700/?barbeque'
              alt='Second slide'
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://source.unsplash.com/random/900×700/?pastery'
              alt='Third slide'
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleFade'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleFade'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
