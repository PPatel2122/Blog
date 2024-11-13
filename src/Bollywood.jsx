import React from 'react'
import './Blog.css'
import { useContext } from 'react'
import DataContext from './DataContext'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer'

const Bollywood = () => {


  const [visible, setVisible] = useState(7);

  const data = useContext(DataContext);
  console.log(data);

  const bollywoodData = data.filter((item) => item.category === "Bollywood");
  console.log(bollywoodData);

  const handleLoad = () => {
    setVisible((prev) => prev + 5)
  }
  const Ad = [
    
    {
      id: "3",
      ad_img:
        "https://asset.gecdesigns.com/img/social-media-poster-templates/furniture-shop-advertisement-instagram-poster-template-1683124415404-cover.webp",
    },
    {
      id: "4",
      ad_img:
        "https://img.freepik.com/premium-photo/realistic-soft-drink-advertisement-text-soft-drinks-soda-poster-generative-ai_1092559-16801.jpg?semt=ais_hybrid",
    },
   
  ];

  return (
    <>
      <Navigation />
      <div className="main-container">

        {bollywoodData.slice(0, visible).map((item) => (


          <div className='container'>
            <Link to={`/detail/${item.id}`} className='nav-link'>

              <div className="data">
                <div className="bolly-img">
                <img src={item.img_url} alt={item.title} className='bollywood-image' />
                </div>
                <div className="childdata">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}


        <div className="rightside">
          <h2 className='topmovies'>TOP MOVIES</h2>
          {bollywoodData.slice(8, 11).map((item) => (
            <Link to={`/detail/${item.id}`} className='nav-link'>
              <div className='inner-data'>
                <img src={item.img_url} alt={item.title} className='inner-image' />
                <h2>{item.title}</h2>

              </div>
            </Link>

          ))

          }
        </div>
        <div className="ad">
        <div className="AdHeading">
              <p>Advertisement</p>
            </div>

          {Ad.slice(0, visible).map((item) => (


            <div className='container'>
              <Link to={`/detail/${item.id}`}>

                <div className="ad-img">
                  <img src={item.ad_img} alt={item.title} className='ad-image' />
                  
                   
                  
                </div>
              </Link>
            </div>
          ))}


        </div>




        <button onClick={handleLoad} className='button'>👇LoadMore</button>
      </div>



      <Footer />
    </>
  )
}

export default Bollywood

