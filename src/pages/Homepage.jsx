import React from 'react';
import { CiSearch } from "react-icons/ci";
function Homepage() {
  return (
    <div className="navbar m-10 ">
      <div className=" flex justify-center  ">
        <div className="logo w-[300px] mr-28 ">
        <img 
          src="https://thulo.com.np/assets/landlord/uploads/media-uploader/thulo-logo-small1719034772.png"
          alt="Logo"
        />
      </div>
      <div className="input ">
        <input type='text'className='w-[500px]' placeholder='what are you looking for....?' />
        
      </div>

      <div className="icon flex">
        <div className='w-[50px]'>
          <img src="https://thulo.com.np/assets/img/business.png" alt="" />
        </div>
        <div className='w-[50px]'>
          <img src="https://thulo.com.np/assets/img/business.png" alt="" />
        </div>
        <div className='w-[50px]'>
          <img src="https://thulo.com.np/assets/img/business.png" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Homepage;
