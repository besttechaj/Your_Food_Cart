import React, { useState, useRef, useEffect } from 'react';
// import { useCart, useDispatchCart } from './ContextReducer';
import { useCart } from './ContextReducer';
import { useDispatchCart } from './ContextReducer';

const Card = (props) => {
  //getting the state from reducer
  let data = useCart(); //state

  //destructuring
  const { food } = props;
  let options = food.options[0];
  let priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');

  const priceRef = useRef();

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  //using dispatch to give data to the reducer
  let dispatch = useDispatchCart();
  const handleAddtoCard = async () => {
    //sending the data and dispatch type to the reducer
    await dispatch({
      type: 'ADD',
      // payload: food._id,
      id: food._id,
      name: food.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: food.img,
    });

    //checking the response
    console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);
  return (
    <div>
      <div
        className='card mt-1 my-2'
        style={{
          width: '18rem',
          maxHeight: '330px',
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
            height: '190px',
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
                    backgroundColor: 'red',
                    flexBasis: '10%',
                  }}
                  onChange={(e) => setQty(e.target.value)}
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
                    backgroundColor: 'red',
                    flexBasis: '20%',
                  }}
                  onChange={(e) => setSize(e.target.value)}
                  ref={priceRef}
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
                  className='fs-8 rounded'
                  style={{
                    flexBasis: '70%',
                    paddingLeft: '5px',
                    backgroundColor: 'red',
                  }}
                >
                  ${finalPrice}/-
                </div>
              </div>
              <button
                className='btn btn-primary text-center w-100'
                onClick={handleAddtoCard}
                style={{ color: 'white' }}
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
