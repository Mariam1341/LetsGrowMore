import React, { useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Slider from "react-slick";

const App = () => {
  const [page, setPage] = useState(0)
  const [users, setUsers] = useState()
  const [isLoading, setIsLoading] = useState(true)

 

  const dataFetch = ()=>{
    fetch(`https://reqres.in/api/users?page=${page % 2 + 1}`)
    .then(res => res.json())
    .then(json => {
      console.log(json.data)
      setUsers(json.data)
      setTimeout(()=>{
        setIsLoading(false)
        setPage(page + 1)
      }, 2000)
    })
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
 return(
  <div className='page'>
    <nav>
      <div className='logo'>Users<div className='logoS'>    Getter</div></div>
      <button onClick={dataFetch}>Get Users</button>
    </nav>
    {
      isLoading?
      <div className='loading'>
         <HashLoader
        color="#9775fa"
        loading={isLoading}
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "red",
        }}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      :
          <Slider {...settings}>
        {users.map(user => {
          return(
          <div key = {user.id} className = 'userCard '>
            <div className='upperContainer'>
              <div className='userImg'>
                <img src = {user.avatar} alt={user.fist_name}/>
              </div>
            </div>
            <div className='details'>
              <h3>{user.fist_name} {user.last_name}</h3>
              <p>{user.email}</p>
            </div>
          </div>);
        })}
        </Slider>
    
    }
  </div>
 );
}

export default App;