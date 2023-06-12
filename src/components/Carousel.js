import React from 'react';

const Carousel = () => {
  return (
    <>
      <div
        id='carouselExampleFade'
        class='carousel slide carousel-fade'
        data-ride='carousel'
        style={{ objectFit: 'contain' }}
      >
        <div
          class='carousel-inner'
          id='carousel'
          style={{ maxHeight: '500px' }}
        >
          <div className='carousel-caption'>
            <form
              class='d-flex'
              style={{
                zIndex: '10',
                position: 'relative',
              }}
            >
              <input
                class='form-control mr-sm-2 '
                type='search'
                placeholder='Search'
                aria-label='Search'
                style={{ borderRadius: '10px' }}
              />
              <button
                class='btn btn-outline-success my-2 my-sm-0 rounded'
                type='submit'
                style={{ backgroundColor: '#5A5A5A', color: 'white' }}
              >
                Search
              </button>
            </form>
          </div>
          <div class='carousel-item active'>
            <img
              class='d-block w-100'
              src='https://source.unsplash.com/random/900×700/?pizza'
              alt='First slide'
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
          <div class='carousel-item'>
            <img
              class='d-block w-100'
              src='https://source.unsplash.com/random/900×700/?barbeque'
              alt='Second slide'
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
          <div class='carousel-item'>
            <img
              class='d-block w-100'
              src='https://source.unsplash.com/random/900×700/?pastery'
              alt='Third slide'
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleFade'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleFade'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
