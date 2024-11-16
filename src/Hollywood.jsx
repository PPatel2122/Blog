import React from 'react'
import './Blog.css'
import { useContext } from 'react'
import DataContext from './DataContext'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer'

const Hollywood = () => {


  const [visible, setVisible] = useState(3);
  const [visibl, setVisibl] = useState(6);
  const data = useContext(DataContext);
  console.log(data);

  const HollywoodData = data.filter((item) => item.category === "Hollywood");
  console.log(HollywoodData);

  const handleLoad = () => {
    setVisible((prev) => prev + 3)
    setVisibl((prev) => prev + 6)

  }
  const Ad = [
    
    {
      id: "3",
      ad_img:
        "https://asset.gecdesigns.com/img/social-media-poster-templates/furniture-shop-advertisement-instagram-poster-template-1683124415404-cover.webp",
    },
   
   
  ];

  return (
    <>
       <Navigation />
      

      <div className="main-container">
        <div className="bolly-name">
          <h2>Technology</h2>
        </div>



        {HollywoodData.slice(0, visible).map((item) => (


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
          <div className="top-movie-name">
            <h2 className='top-move'>Top_Technology</h2>

          </div>


          {HollywoodData.slice(0, visibl).map((item) => (
            <Link to={`/detail/${item.id}`} className='nav-link'>
              <div className='inner-data'>
                <img src={item.img_url} alt={item.title} className='inner-image' />
                {/* <h2>{item.title}</h2> */}


              </div>
            </Link>

          ))

          }

        </div>






        <button onClick={handleLoad} className='button'>👇LoadMore</button>

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

      </div>



      <Footer />
    </>
  )
}

export default Hollywood