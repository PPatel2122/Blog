import React, { useState,useEffect } from 'react'
import './Loading2.css'

const Loading2 = ({ setLoadingComplete }) => {
    




  const [allow,setAllow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllow(false);
      setLoadingComplete();
    }, 1000);


    return () => clearTimeout(timer);
  }, []);
    return (
        <>
        {allow ? (
            <div className="loading-div2">
                <div className="loader2"></div>
            </div>
            ) : null}
        </>
    )
}

export default Loading2