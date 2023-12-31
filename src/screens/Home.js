import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const [search, setSearch] = useState([]);
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  //creating an api to get the data from the backend
  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });
    //converting the response into json format
    response = await response.json();
    // console.log(response[0], response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };
  //useEffect:
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Carousel value={search} handleChange={onChange} />
      </div>
      <div className='container'>
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-5 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          // fetching all the result
                          item.CategoryName === data.CategoryName &&
                          //fetching result based on search query
                          item.name.toLowerCase().includes(search)
                      )
                      .map((filterItem, index) => {
                        return (
                          <div
                            key={filterItem._id}
                            className='col-12 col-md-6 col-lg-3'
                            style={{
                              margin: '20px',
                            }}
                          >
                            <Card food={filterItem} />
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ''}
      </div>
      <div className='container m-3'>
        <Footer />
      </div>
    </>
  );
};

export default Home;
