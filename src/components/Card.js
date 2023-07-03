import React from 'react';

const Card = () => {
  return (
    <div>
      <div
        className='card mt-3 '
        style={{
          width: '18rem',
          maxHeight: '360px',
          backgroundColor: 'gray',
          color: 'white',
        }}
      >
        <img
          src='https://www.railrecipe.com/images/eatmake/1642686721.webp'
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>I am a new cart item</p>
          <div className='container  w-100' style={{ backgroundColor: 'gray' }}>
            <select className='m-2 h-100  rounded' style={{ color: 'red' }}>
              {/* syntax-> Array.from(OBJECT,MAPfunction define) //return an
          array */}
              {Array.from(Array(6), (ele, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            {/* Another select for volume */}
            <select className='m-2 h-100  rounded' style={{ color: 'red' }}>
              <option value='half'>Half</option>
              <option value='full'>Full</option>
            </select>
            <div className='d-inline h-100 fs-5'>$Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
