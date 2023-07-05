import React from 'react';

const Card = (props) => {
  //destructuring
  const { food } = props;
  let options = food.options[0];
  let priceOptions = Object.keys(options);
  return (
    <div>
      <div
        className='card mt-1 '
        style={{
          width: '18rem',
          maxHeight: '350px',
          backgroundColor: 'green',
          color: 'white',
          // display: 'flex',
          // flexWrap: 'inherit',
          // flexDirection: 'column',
        }}
      >
        <img
          src={food.img}
          className='card-img-top'
          alt='...'
          style={{ height: '140px', width: '100%' }}
        />
        <div className='card-body' style={{ height: '300px' }}>
          <h5 className='card-title'>{food.name}</h5>
          <p className='card-text'>{food.description}</p>
          <div
            className='container'
            style={{
              backgroundColor: 'green',
              width: '100%',
              objectFit: 'fill',
            }}
          >
            <select
              className='m-2 h-100  rounded'
              style={{ color: 'white', backgroundColor: 'green' }}
            >
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
            <select
              className='m-2 h-100  rounded'
              style={{
                color: 'white',
                backgroundColor: 'green',
              }}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className='d-inline h-100 fs-6'>$Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
