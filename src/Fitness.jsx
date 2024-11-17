import React from 'react'
import './Blog.css'
import { useContext } from 'react'
import DataContext from './DataContext'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer'
import Loading2 from "./Loading2";

const Fitness = () => {

  const [visible, setVisible] = useState(3);
  const [visibl, setVisibl] = useState(6);
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const data = useContext(DataContext);
  console.log(data);

  const FitnessData = data.filter((item) => item.category === "Fitness");
  console.log(FitnessData);

  const handleLoad = () => {
    setVisible((prev) => prev + 3)
    setVisibl((prev) => prev + 6)
  }
  const Ad = [
    
    
    {
      id: "4",
      ad_img:
        "https://img.freepik.com/premium-photo/realistic-soft-drink-advertisement-text-soft-drinks-soda-poster-generative-ai_1092559-16801.jpg?semt=ais_hybrid",
    },
   
  ];

  return (
    <>
    {loading ? (
     <Loading2 setLoadingComplete={handleLoadingComplete} />
   ) : (
    <>
       <Navigation />
      

      <div className="main-container">
        <div className="bolly-name">
          <h2>Technology</h2>
        </div>



        {FitnessData.slice(0, visible).map((item) => (


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


          {FitnessData.slice(0, visibl).map((item) => (
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
  )}
    </>
  )
}

export default Fitness