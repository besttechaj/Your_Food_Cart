import React from 'react';

const Card = (props) => {
  //destructuring
  const { food } = props;
  let options = food.options[0];
  let priceOptions = Object.keys(options);
  return (
    <div>
      <div
        className='card mt-3 '
        style={{
          width: '18rem',
          maxHeight: '360px',
          backgroundColor: 'gray',
          color: 'white',
          border: '2px solid red',
        }}
      >
        <img src={food.img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{food.name}</h5>
          <p className='card-text'>{food.description}</p>
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
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className='d-inline h-100 fs-5'>$Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
