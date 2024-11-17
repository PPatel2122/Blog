import React, {useState, useContext } from "react";
import Navigation from "./Navigation";
import DataContext from "./DataContext";
import "./Blog.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";
  



const Home = () => {
  const [loading, setLoading] = useState(true);
  const data = useContext(DataContext);


  const handleLoadingComplete = () => {
    setLoading(false);
  };


  const AdData = [
    {
      id: "1",
      ad_img:
        "https://coreldrawdesign.com/resources/previews/preview-creative-burger-food-restaurant-poster-advertisement-template-1650387145.jpg",
    },
    {
      id: "2",
      ad_img:
        "https://img.freepik.com/premium-psd/advertisement-advertisement-adidas-brand_987701-2530.jpg?w=740",
    },
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

  const SelectedArray = [
    1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 31, 32, 35, 36, 45,
    51, 53, 62, 65, 66, 67, 69, 70, 73, 75, 76, 77, 83, 84,
  ];

  const img1 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length - 2))) + 1])
  ) || {};

  const img2 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length - 2))) + 1])
  ) || {};

  const img3 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length - 2))) + 1])
  ) || {};

  

  let random = Math.floor(Math.random() * (data.length - 2)); // Ensures there are enough elements for slicing
  if (random < 0) random = 0;
  

  if (random == (data.length - 2)) {
    random = random - 1;
  }
  

  return (
    <>
    {loading ? (
     <Loading setLoadingComplete={handleLoadingComplete} />
   ) : (
   
    <>
    <div className="full-body">

<Navigation />  

    <div className="HomeParentMain">
        <div className="headergrid">
          <div className="headerbox1 headerbox">
            <div className="childMain">
              <img className="homemainimg" alt="loading" src={img1.img_url} />
              <div className="homeblankdiv">
                <h2>{img1.title}</h2>
                <p>{img1.description}</p>
              </div>
            </div>
          </div>
          <div className="headerbox2 headerbox">
            <div className="childMain2">
              <img className="homemainimg" alt="loading" src={img2.img_url} />
              <div className="homeblankdiv">
                <h2>{img2.title}</h2>
                <p>{img2.description}</p>
              </div>
            </div>
          </div>
          <div className="headerbox3 headerbox">
            <div className="childMain3">
              <img className="homemainimg" alt="loading" src={img3.img_url} />
              <div className="homeblankdiv">
                <h2>{img3.title}</h2> 
                <p>{img3.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-latest-page">
        <div className="homeheading">
          <h1>The Latest</h1>
          <div className="homeheadunderline"></div>
        </div>
        <div className="Bollywoodmain home3latest">
          <div className="ChildMain">
          
            {data && data.length > 0 && data.slice(random, random + 3).map((item,index) => (
              <>
                <div className="BollyMainMovie" key={index}>
              <Link to={`/details/${item.id}`} key={item.id}>
                <img src={item.img_url || 'fallback-image-url'} alt="Bollywood movie" className="BollyMainimg" />
                <h3 className="Title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </Link>
              </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="storypost">
        <div className="topstories">
          <div className="homeheading">
            <h1>Top Stories</h1>
            <div className="homeheadunderline"></div>
          </div>
          {data.slice(0,5).map((item) => (
            <>
              <Link className="storydata" to={`/details/${item.id}`}>
                <div className="storyimg">
                  <img className="imagestory" src={item.img_url} alt="data" />
                  <h3 className="storycategory">{item.category}</h3>
                </div>
                <div className="titledescription">
                  <h2 className="Title storytitle">{item.title}</h2>
                  <p className="storydescription description">
                    {item.description}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>

      
          

          <div className="advertisement">
            <div className="AdHeading">
              <p>Advertisement</p>
            </div>
            <div className="parAdImg">
              {AdData.map((item,index) => (
                <>
                  <img key={index}
                    className="AdImg"
                    src={item.ad_img}
                    alt="advertisement"
                  />
                </>
              ))}
            </div>
          </div>
        
      </div>
     

      <Footer />
     </div>

     </>
  )}
    </>

  )
}

export default Home