import React from 'react';

const Card = (props) => {
  //destructuring
  const { food } = props;
  let options = food.options[0];
  let priceOptions = Object.keys(options);

  const handleAddtoCard = () => {};

  return (
    <div>
      <div
        className='card mt-1 my-2'
        style={{
          width: '18rem',
          maxHeight: '350px',
          backgroundColor: 'green',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={food.img}
          className='card-img-top'
          alt='...'
          style={{ height: '140px', width: '100%', marginBottom: '2px' }}
        />
        <div
          className='container card-body'
          style={{
            height: '222px',
            backgroundColor: 'green',
          }}
        >
          <div
            className='innerContent container'
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'green',
              padding: '2px',
              width: '100%',
              marginTop: '-10px',
            }}
          >
            <h5 className='card-title' style={{ marginBottom: '2px' }}>
              {food.name}
            </h5>
            <p
              className='card-text'
              style={{ backgroundColor: 'green', marginBottom: '3px' }}
            >
              {food.description}
            </p>
            <div
              className='container'
              style={{
                width: '100%',
                padding: '0px',
              }}
            >
              <div
                className='inner'
                style={{
                  backgroundColor: 'green',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <select
                  className='m-2   rounded'
                  style={{
                    color: 'white',
                    backgroundColor: 'green',
                    flexBasis: '10%',
                  }}
                >
                  {/* syntax-> Array.from(OBJECT,MAPfunction          define) //return an 
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
                  className='m-2   rounded'
                  style={{
                    color: 'white',
                    backgroundColor: 'green',
                    flexBasis: '20%',
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
                <div
                  className='fs-8'
                  style={{ flexBasis: '70%', paddingLeft: '5px' }}
                >
                  $Total Price
                </div>
              </div>
              <button
                className='btn btn-danger text-center w-100'
                onClick={handleAddtoCard}
              >
                Add Item to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
