import React from 'react'
import Navigation from './Navigation'
import './Blog.css'
import { useContext } from 'react'
import DataContext from './DataContext'
import { Link } from 'react-router-dom';
import Footer from './Footer'


const Home = () => {
  const data = useContext(DataContext);
  const HollywoodData = data.filter((item) => item.category === "Hollywood");
  const bollywoodData = data.filter((item) => item.category === "Bollywood");
  const TechnologyData = data.filter((item) => item.category === "Technology");
  const FitnessData = data.filter((item) => item.category === "Fitness");
  const FoodData = data.filter((item) => item.category === "Food");
  const SelectedArray = [1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 31, 32, 35, 36, 45, 51, 53, 62, 65, 66, 67, 69, 70, 73, 75, 76, 77, 83, 84
  ]

  const img1 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[Math.round((Math.random() * SelectedArray.length - 2) + 1)])
  );
  const img2 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[Math.round((Math.random() * SelectedArray.length - 2) + 1)])
  );
  const img3 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[Math.round((Math.random() * SelectedArray.length - 2) + 1)])
  );




  return (
    <>

      <Navigation />
      <div className="home-main-container">
        <div className="header-container">
          <div className="box box1">
            <div className='inner-data'>
              <img src={img1.img_url} alt="img1.title" className='box1img' />

              <p className="headerbox-text">{img1.description}</p>

            </div>


          </div>
          <div className="right-side">
          <div className="box box2">
            <div className='inner-data'>
              <img src={img2.img_url} alt="img2.title" className='inner-image box1img' />

              <p className="headerbox-text">{img2.description}</p>

            </div>
          </div>
          <div className="box box3">
            <div className='inner-data'>
              <img src={img3.img_url} alt="img3.title" className='inner-image box1img' />

              <p className="headerbox-text">{img3.description}</p>

            </div>
          </div></div>
        </div>
      </div>





      {/* second step */}
      <div className="secondpage">
        <div className="topthree">
          <div className="one-topthree">
            {FitnessData.slice(8, 9).map((item) => (
              <Link to={`/detail/${item.id}`} className='nav-link'>
                <div className='inner-data'>
                  <img src={item.img_url} alt={item.title} className='inner-image' />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>

                </div>
              </Link>

            ))

            }




          </div>
          <div className="two-topthree">
            {TechnologyData.slice(8, 9).map((item) => (
              <Link to={`/detail/${item.id}`} className='nav-link'>
                <div className='inner-data'>
                  <img src={item.img_url} alt={item.title} className='inner-image' />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>

                </div>
              </Link>

            ))

            }






          </div>
          <div className="three-topthree">
            {FoodData.slice(8, 9).map((item) => (
              <Link to={`/detail/${item.id}`} className='nav-link'>
                <div className='inner-data'>
                  <img src={item.img_url} alt={item.title} className='inner-image' />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>

                </div>
              </Link>

            ))

            }
          </div>
        </div>
      </div>




      {/* third step */}
      <div className="third-step">
        <div className="third-left">
          {HollywoodData.slice(8, 9).map((item) => (
            <Link to={`/detail/${item.id}`} className='nav-link'>
              <div className='inner-data'>
                <h2 className='third-left-h2'>{item.title}</h2>
                <img src={item.img_url} alt={item.title} className='third-left-image' />
                <p className='third-left-pera'>{item.description}</p>

              </div>
            </Link>


          ))

          }
        </div>
        <div className="third-right">
          {HollywoodData.slice(4, 7).map((item) => (
            <Link to={`/detail/${item.id}`} className='nav-link'>
              <div className='inner-data'>
                <img src={item.img_url} alt={item.title} className='third-right-image' />
              </div>
            </Link>

          ))

          }
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home