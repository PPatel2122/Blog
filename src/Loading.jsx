import React, { useState,useEffect } from 'react'
import './Loading.css'

const Loading = ({ setLoadingComplete }) => {

  const [allow,setAllow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllow(false);
      setLoadingComplete();
    }, 2000);


    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {allow ? (
        <div className="loading-div">
        <div className="loader" > </div>
        </div>
      ) : null}
    </>
  )
}

export default Loading