import React from 'react'
import './Blog.css'
import { useContext } from 'react'
import DataContext from './DataContext'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer'

const Technology = () => {


  const [visible, setVisible] = useState(8);

  const data = useContext(DataContext);
  console.log(data);

  const TechnologyData = data.filter((item) => item.category === "Technology");
  console.log(TechnologyData);

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

        {TechnologyData.slice(0, visible).map((item) => (
          <div className='container'>
            <Link to={`/detail/${item.id}`} className='nav-link'>
              <div className="data">
                <img src={item.img_url} alt={item.title} className='bollywood-image' />
                <div className="childdata">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                </div>
            </Link>
          </div>

        ))}

        <button onClick={handleLoad} className='button'>LoadMore</button>
      </div>

      <div className="rightside">
        <h2 className='topmovies'>TOP TECHNOLOGY</h2>
        {TechnologyData.slice(8, 11).map((item) => (
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
      <Footer />
    </>
  )
}

export default Technology